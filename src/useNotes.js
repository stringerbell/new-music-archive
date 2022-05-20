export const get = (p) => (o) => p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o);

export default function useNotes(album) {
  // new format
  const notes = get(['editorialNotes', 'standard'])(album?.relationships?.artists?.data[0]?.attributes)
  if (notes) {
    return notes
  }
  // old format
  return get(['editorialNotes', 'standard'])(album.attributes)
}
