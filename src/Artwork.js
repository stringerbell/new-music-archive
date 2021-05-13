export default function Artwork({artwork, width = 100, height = 100, alt = "", ...props}) {
    return (
        <>
            <img className={'album-art'} src={artwork.url.replaceAll("{w}", width).replaceAll("{h}", height)}
                 alt={alt} {...props} />
        </>
    )
}
