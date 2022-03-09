import Artwork from './Artwork';
import { Link, useParams } from 'react-router-dom';

const get = (p) => (o) => p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o);

export default function AlbumDetail({ album }) {
  const { attributes } = album;
  const { date } = useParams();
  const notes = get(['editorialNotes', 'standard'])(attributes);
  const title = get(['editorialNotes', 'short'])(attributes);
  const setNotes = (notes) => {
    return { __html: notes };
  };
  const genre = attributes.genreNames.filter((a) => a !== 'Music')[0];
  const year = new Date(attributes.releaseDate).getFullYear();
  return (
    <>
      <Link className={'back-link'} to={`/${date}`}>
        {'＜ Back'}
      </Link>
      <div className={'album'}>
        <div className={'wrapper'}>
          <a href={attributes.url}>
            <Artwork
              title={title}
              className={'album-art'}
              width={650}
              height={650}
              artwork={attributes.artwork}
              alt={`${attributes.artistName} - ${attributes.name} album artwork`}
            />
          </a>
          <div className={'detail-album-details'}>
            <div>
              <h1 className={'detail-album-name'}>
                {album.attributes.name}
                <div className={'explicit'}>
                  {attributes.contentRating === 'explicit' && '🅴'}
                </div>
              </h1>
            </div>
            <div className={'detail-artist-name'}>
              <h1>{album.attributes.artistName}</h1>
            </div>
            <div className={'album-genre'}>
              {genre} - {year}
            </div>
            <div className={'notes-wrap'}>
              <p
                className={'detail-editors-notes'}
                dangerouslySetInnerHTML={setNotes(notes)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
