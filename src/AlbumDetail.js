import Artwork from './Artwork';
import { Link, useParams } from 'react-router-dom';
import ListenLinks from './ListenLinks';
import { MetaTags } from 'react-meta-tags';

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
      <MetaTags>
        <title>{`${attributes.artistName} - ${attributes.name}`}</title>
        <meta name='description' content={attributes.editorialNotes.short} />
        <meta property='og:title' content={attributes.name} />

        <meta property='og:url' content={window.location.href} />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content={attributes.editorialNotes.short}
        />
        <meta
          property='og:image'
          content={attributes.artwork.url
            .replaceAll('{w}', 650)
            .replaceAll('{h}', 650)}
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content={window.location.origin} />
        <meta property='twitter:url' content={window.location.href} />
        <meta name='twitter:title' content={attributes.name} />
        <meta
          name='twitter:description'
          content={attributes.editorialNotes.short}
        />
        <meta
          name='twitter:image'
          content={attributes.artwork.url
            .replaceAll('{w}', 650)
            .replaceAll('{h}', 650)}
        />
      </MetaTags>
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
            <ListenLinks attributes={attributes} />
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
