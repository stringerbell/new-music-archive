import appleMusic from "./apple-badge.svg";
import spotify from "./Spotify_Icon_RGB_Green.png";

export default function ListenLinks(props) {
    return <div className={"listen-links"}>
        <p>
            <a href={props.attributes.url}>
                <img
                    className={"apple-music-link"}
                    src={appleMusic}
                    alt={"Listen on Apple Music"}
                />
            </a>
        </p>
        <p>
            {props.attributes.spotify && (
                <a href={props.attributes.spotify}>
                    <img
                        className={"spotify-link"}
                        src={spotify}
                        alt={"Listen on Spotify"}
                    />
                </a>
            )}
        </p>
    </div>;
}
