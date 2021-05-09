import './App.css';
import {useEffect, useState} from 'react';

function Artwork({artwork, width = 100, height = 100}) {
    return (
        <>
            <img className={'album-art'} src={artwork.url.replaceAll("{w}", width).replaceAll("{h}", height)} alt="TODO"/>
        </>
    )
}

function Album({album}) {
    const {attributes} = album
    return <div>
        <a href={attributes.url}><Artwork width={200} height={200} artwork={attributes.artwork}/></a>
        <div className={"artist-name"}>
            <p>
                {album.attributes.artistName}
            </p>
                <span className={"explicit"}>{attributes.contentRating === "explicit" && "🅴"}</span>
        </div>
        <div>
            <p className={"album-name"}>
                {album.attributes.name}
            </p>
        </div>
    </div>
}

function NewAlbumList() {
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

function App() {
    return (
        <div className="App">
            <NewAlbumList/>
        </div>
    );
}

export default App;
