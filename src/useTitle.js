import {get} from "./useNotes";

export default function useTitle(album) {
  const title = get(['editorialNotes', 'short'])(album?.relationships?.artists?.data[0]?.attributes)
  if (title) {
    return title
  }
  // old format
  return get(['editorialNotes', 'short'])(album.attributes);
}
