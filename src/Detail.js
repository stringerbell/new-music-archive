import useAlbums from "./useAlbum";
import {useParams} from "react-router-dom";
import AlbumDetail from "./AlbumDetail";

export default function NewDetail() {
    let {index: indexP, date: dateP} = useParams();
    let albums = useAlbums(dateP)
    let album = albums[indexP]
    if (albums == null || album == null) {
        return null
    }
    return <AlbumDetail album={album} key={album.id}/>
};
