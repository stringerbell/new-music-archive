import {useEffect, useState} from "react";
import Album from "./Album";

export default function NewAlbumList() {
    const [albums, setAlbums] = useState([])
    let [cache, addCache] = useState({})
    const dates = [
        {date: '2021-08-13', name: "Friday, August 13th 2021"},
        {date: '2021-08-06', name: "Friday, August 6th 2021"},
        {date: '2021-07-30', name: "Friday, July 30th 2021"},
        {date: '2021-07-23', name: "Friday, July 23rd 2021"},
        {date: '2021-07-16', name: "Friday, July 16th 2021"},
        {date: '2021-07-09', name: "Friday, July 9th 2021"},
        {date: '2021-07-02', name: "Friday, July 2nd 2021"},
        {date: '2021-06-25', name: "Friday, June 25th 2021"},
        {date: '2021-06-18', name: "Friday, June 18th 2021"},
        {date: '2021-06-11', name: "Friday, June 11th 2021"},
        {date: '2021-06-04', name: "Friday, June 4th 2021"},
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
