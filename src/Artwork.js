import useImageURL from "./useImageURL";

export default function Artwork({artwork, width = 100, height = 100, alt = "", ...props}) {
    let imageURL = useImageURL({rawURL: artwork.url, width, height})
    return (
        <>
            <img className={'album-art'} src={imageURL}
                 alt={alt} {...props} />
        </>
    )
}
