import {useEffect, useState} from "react";
import Album from "./Album";

export default function NewAlbumList() {
    const [albums, setAlbums] = useState([])
    let [cache, addCache] = useState({})
    const dates = [
        {date: '2021-05-28', name: "Friday, May 28th 2021"},
        {date: '2021-05-21', name: "Friday, May 21st 2021"},
        {date: '2021-05-14', name: "Friday, May 14th 2021"},
        {date: '2021-05-07', name: "Friday, May 7th 2021"},
    ];
    const [date, setDate] = useState(dates[0])
    useEffect(() => {
        (async ({date}) => {
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
    return (
        <>
            <label htmlFor="dates">Choose a date:</label>
            <select className={'date-selection'} name="dates" onChange={(e) => setDate({date: e.target.value})}>
                {dates.map(({name, date}) => {
                    return (<option key={date} value={date}>{name}</option>)
                })}
            </select>
            <div className={"album-list"}>{albums.map((album) => {
                return <Album album={album} key={album.id}/>
            })}</div>
        </>
    )
}
