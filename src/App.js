import './App.css';
import {useEffect, useState} from 'react';
import Modal from 'react-modal';

function Artwork({artwork, width = 100, height = 100, alt = "", ...props}) {
    return (
        <>
            <img className={'album-art'} src={artwork.url.replaceAll("{w}", width).replaceAll("{h}", height)}
                 alt={alt} {...props} />
        </>
    )
}

const get = p => o =>
    p.reduce((xs, x) =>
        (xs && xs[x]) ? xs[x] : null, o)

function Album({album}) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const {attributes} = album
    const notes = get(['editorialNotes', 'standard'])(attributes)
    const title = get(['editorialNotes', 'short'])(attributes)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    const setNotes = (notes) => {
        return {__html: notes};
    }
    const genre = attributes.genreNames.filter((a) => a !== 'Music')[0]
    const year = new Date(attributes.releaseDate).getFullYear();
    return <div className={'album'}>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={'modal'}
            contentLabel={`${attributes.artistName} - ${attributes.name} album details`}
        >
            <div className={'close-wrapper'}>
                <button className={'close-modal-btn'} onClick={closeModal} type={"button"} aria-label={"close"}>×
                </button>
            </div>
            <div className={'modal-wrapper'}>
                <a href={attributes.url}>
                    <Artwork title={title} className={'modal-album-art'} width={400} height={400}
                             artwork={attributes.artwork}
                             alt={`${attributes.artistName} - ${attributes.name} album artwork`}/>
                </a>
                <div className={'modal-album-details'}>
                    <div>
                        <h1 className={"modal-album-name"}>
                            {album.attributes.name}
                            <div className={"explicit"}>{attributes.contentRating === "explicit" && "🅴"}</div>
                        </h1>
                    </div>
                    <div className={"modal-artist-name"}>
                        <h1>
                            {album.attributes.artistName}
                        </h1>
                    </div>
                    <div className={"modal-album-genre"}>
                        {genre} - {year}
                    </div>
                    <div className={'modal-notes-wrap'}>
                        <p className={'modal-editors-notes'} dangerouslySetInnerHTML={setNotes(notes)}/>
                    </div>
                </div>
            </div>
        </Modal>

        <Artwork title={title} width={200} height={200} artwork={attributes.artwork}
                 alt={`${attributes.artistName} - ${attributes.name} album artwork`} onClick={() => openModal()}/>
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

Modal.setAppElement('#root')

function App() {
    return (
        <div className="App">
            <NewAlbumList/>
        </div>
    );
}

export default App;
