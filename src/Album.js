import {useState} from "react";
import Modal from "react-modal";
import Artwork from "./Artwork";

Modal.setAppElement('#root')

const get = p => o =>
    p.reduce((xs, x) =>
        (xs && xs[x]) ? xs[x] : null, o)

export default function Album({album}) {
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
