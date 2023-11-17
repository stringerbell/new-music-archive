
export default function useGenre(album) {
  // TODO -- this is currently broken as of nov 17. The genre now comes from the top-level artist by id block, so we'll
  //  need to slurp that in here too
  // new format
  const genre = album?.relationships?.artists?.data[0]?.attributes?.genreNames
  if (genre) {
    return genre
  }
  // old format
  return album.attributes.genreNames?.filter((a) => a !== 'Music')[0] ?? '';
}
