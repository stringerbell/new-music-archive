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
            const {data} = await res.json();
            cache[date] = data
            addCache(cache)
            setAlbums(data)
        })(date)
    }, [cache, date])

    return albums
}
