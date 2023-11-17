import {useEffect, useState} from "react";

export default function useAlbum(date) {
    const [albums, setAlbums] = useState([])
    let [cache, addCache] = useState({})
    useEffect(() => {
        (async (date) => {
            if (cache[date]) {
                setAlbums(cache[date]);
                return
            }
            const res = await fetch(`/new-music-archive/archive/${date}.json`);
            let { data, resources } = await res.json();
            if (data[0].type === 'rooms') {
                // TODO consolidate AlbumList.js/useAlbum.js
                // Kinda hacky, but this is b/c apple changed their format. There's probably a lot more data we could be using.
                // We should also maybe backfill the old formats with the new one, so we don't have to juggle
                data = Object.values(resources['albums'])
            }
            cache[date] = data
            addCache(cache)
            setAlbums(data)
        })(date)
    }, [cache, date])

    return albums
}
