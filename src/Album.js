import {useState} from "react";
import Modal from "react-modal";
import Artwork from "./Artwork";
import {Link, useParams} from "react-router-dom";
import ListenLinks from "./ListenLinks";
import useGenre from "./useGenre";

Modal.setAppElement('#root')

const get = p => o =>
    p.reduce((xs, x) =>
        (xs && xs[x]) ? xs[x] : null, o)

export default function Album({album, idx}) {
    const {date: dateP} = useParams()
    const [modalIsOpen, setIsOpen] = useState(false);
    const {attributes} = album
    const notes = get(['editorialNotes', 'standard'])(attributes)
    const title = get(['editorialNotes', 'short'])(attributes)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    const setNotes = (notes) => {
        return {__html: notes};
    }
    const genre = useGenre(album)
    const year = new Date(attributes.releaseDate).getFullYear();
    const albumURL = new URL(album.attributes.url)

    return <div className={'album'}>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={'modal'}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border: '1px solid rgb(59, 59, 59)',
                background: 'rgba(0, 0, 0, 0.9)',
                    height: '500px',
                    overflow: 'scroll' // <-- This tells the modal to scrol
                }
            }}
            contentLabel={`${attributes.artistName} - ${attributes.name} album details`}
        >
            <div className={'close-wrapper'}>
                <button className={'close-modal-btn'} onClick={closeModal} type={"button"} aria-label={"close"}>×
                </button>
            </div>
            <div className={'modal-wrapper'}>
                <Link to={`/${dateP}/${idx}${albumURL.pathname}`}>
                    <Artwork title={title} className={'modal-album-art'} width={400} height={400}
                             artwork={attributes.artwork}
                             alt={`${attributes.artistName} - ${attributes.name} album artwork`}/>
                </Link>
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
                    <ListenLinks attributes={attributes}/>
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
