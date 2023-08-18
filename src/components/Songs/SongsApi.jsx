import { useEffect, useState } from 'react';

function SongsApi() {
  const [songs, setSongs] = useState([]);
  const lastFMApiKey = import.meta.env.VITE_LASTFM_API_KEY;
  const user = import.meta.env.VITE_MY_USERNAME;

  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${lastFMApiKey}&limit=10&format=json`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.recenttracks && result.recenttracks.track) {
          setSongs(result.recenttracks.track);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [songs]);

  return songs;
}

export default SongsApi;
