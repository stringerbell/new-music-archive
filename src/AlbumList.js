import {useEffect, useState} from "react";
import Album from "./Album";

export default function NewAlbumList() {
    const [albums, setAlbums] = useState([])
    const dates = [
        '2021-05-14',
        '2021-05-07',
    ];
    const [date, setDate] = useState(dates[0])
    useEffect(() => {
        get(date)
    }, [date])
    const get = async (date) => {
        const res = await fetch(`/new-music-archive/archive/${date}.json`);
        const {data} = await res.json();
        setAlbums(data)
    }
    const as = albums.map((album) => {
        return <Album album={album} key={album.id}/>
    })
    return (
        <>
            <label htmlFor="dates">Choose a date:</label>
            <select name="dates" onChange={(e) => setDate(e.target.value)}>
                {dates.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <div className={"album-list"}>{as}</div>
        </>
    )
}
