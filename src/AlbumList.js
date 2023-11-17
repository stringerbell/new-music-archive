import { useEffect, useState } from 'react';
import Album from './Album';
import { useParams, useHistory } from 'react-router-dom';
import useDates from './Dates';
import { MetaTags } from 'react-meta-tags';

export default function NewAlbumList() {
  const dates = useDates();
  let { date: dateP } = useParams();
  let history = useHistory();
  const [albums, setAlbums] = useState([]);
  let [cache, addCache] = useState({});

  let picked = 0;
  for (let i = 0; i < dates.length; i++) {
    if (dates[i]['date'] === dateP) {
      picked = i;
      break;
    }
  }
  const [date, setDate] = useState(dates[picked]);

  useEffect(() => {
    (async ({ date }) => {
      if (cache[date]) {
        setAlbums(cache[date]);
        return;
      }
      const res = await fetch(`/new-music-archive/archive/${date}.json`);
      let { data, resources } = await res.json();
      if (data[0].type === 'rooms') {
        // TODO consolidate AlbumList.js/useAlbum.js
        // Kinda hacky, but this is b/c apple changed their format. There's probably a lot more data we could be using.
        // We should also maybe backfill the old formats with the new one, so we don't have to juggle
        data = Object.values(resources['albums'])
      }
      cache[date] = data;
      addCache(cache);
      setAlbums(data);
    })(date);
  }, [cache, date]);
  return (
    <>
      <MetaTags>
        <title>{`New Music Archive - ${dateP}`}</title>
        <meta
          name='description'
          content={"Apple's list of new music. Archived every week."}
        />
        <meta property='og:title' content={`New Music Archive - ${dateP}`} />

        <meta property='og:url' content={window.location.href} />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content={"Apple's list of new music. Archived every week."}
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content={window.location.origin} />
        <meta property='twitter:url' content={window.location.href} />
        <meta name='twitter:title' content={`New Music Archive - ${dateP}`} />
        <meta
          name='twitter:description'
          content={"Apple's list of new music. Archived every week."}
        />
      </MetaTags>
      <select
        className={'date-selection'}
        value={date.date}
        name='dates'
        onChange={(e) => {
          setDate({ date: e.target.value });
          history.push(`/${e.target.value}`);
        }}
      >
        {dates.map(({ name, date }) => {
          return (
            <option key={date} value={date}>
              {name}
            </option>
          );
        })}
      </select>
      <div className={'album-list'}>
        {albums.map((album, i) => {
          return <Album idx={i} album={album} key={album.id} />;
        })}
      </div>
    </>
  );
}
