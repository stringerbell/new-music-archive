
export default function useGenre(album) {
  // new format
  const genre = album?.relationships?.artists?.data[0]?.attributes?.genreNames
  if (genre) {
    return genre
  }
  // old format
  return album.attributes.genreNames?.filter((a) => a !== 'Music')[0] ?? '';
}
