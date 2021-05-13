import {useEffect, useState} from "react";
import Album from "./Album";

export default function NewAlbumList() {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        get()
    }, [])
    const get = async () => {
        const res = await fetch("/new-music-archive/archive/2021-05-07.json");
        const {data} = await res.json();
        setAlbums(data)
    }
    const as = albums.map((album) => {
        return <Album album={album} key={album.id}/>
    })
    return <div className={"album-list"}>{as}</div>
}
