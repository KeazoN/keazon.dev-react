import { useEffect, useState } from "react";
import { FaSpotify, FaHeadphonesAlt } from 'react-icons/fa'
import getNowPlayingItem from "./SpotifyApi";
import { usePalette } from 'react-palette'

export const SpotifyNowPlaying = (props) => {

    const [result, setResult] = useState({});

    useEffect(() => {
        Promise.all([
            getNowPlayingItem(
                props.client_id,
                props.client_secret,
                props.refresh_token
            ),
        ]).then((results) => {
            setResult(results[0]);
        });
    });

    const {data} = usePalette(result.albumImageUrl)

    if(result.songItem == null || result.isPlaying == false) {
        return (
            <>
                <div className="spotifyListening">
                     <a href="https://open.spotify.com/user/q34hz9w6r3i1jhxrn5kxk0dyp"><FaSpotify /> Not Playing</a>
                </div>
            </>
        )
    }else{
        return(
            <>
                <div className="spotifyListeningActive" style={{backgroundColor: `${data.darkVibrant}`}}>
                    <div class="image">
                        <img src={result.albumImageUrl} />
                        <div className="imageEffect" style={{background: `linear-gradient(to left, ${data.darkVibrant}, transparent)`}}></div>
                    </div>
                    <div className="song-content">
                        <div className="song-data">
                            <h1>{result.title}</h1>
                            <h3>{result.artist}</h3>
                        </div>
                        <p>Şu anda Dinliyor... <FaHeadphonesAlt /></p>
                    </div>
                    <div className="spotifyIcon"><FaSpotify /></div>
                </div>
            </>
        )
    }
};