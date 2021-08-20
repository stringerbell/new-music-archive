import {useEffect, useState} from "react";
import Album from "./Album";
import {useParams, useHistory} from "react-router-dom";
import useDates from "./Dates";

export default function NewAlbumList() {
    const dates = useDates();
    let {date: dateP} = useParams();
    let history = useHistory();
    const [albums, setAlbums] = useState([])
    let [cache, addCache] = useState({})

    let picked = 0;
    for (let i = 0; i < dates.length; i++) {
        if (dates[i]["date"] === dateP) {
            picked = i
            break
        }
    }
    const [date, setDate] = useState(dates[picked])

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
            <select className={'date-selection'} value={date.date} name="dates"
                    onChange={(e) => {
                        setDate({date: e.target.value})
                        history.push(`/${e.target.value}`)
                    }}>
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
