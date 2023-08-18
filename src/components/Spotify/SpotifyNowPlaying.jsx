import { useEffect, useState } from "react"
import { FaSpotify, FaHeadphonesAlt } from 'react-icons/fa'
import getNowPlayingItem from './SpotifyApi'
import { usePalette } from 'react-palette'
import { Range, getTrackBackground } from "react-range";

export const SpotifyNowPlaying = props  => {
    const [result, setResult] = useState({});
    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;
    const [values, setValues] = useState([50]);

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

    const {data} = usePalette(result.albumImageUrl);

    function secondsToTime(second) {
        const minutes = Math.floor(second / 60000);
        const seconds = ((second % 60000) / 1000).toFixed(0);
        const result = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        return result;
    }

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
                            <h1><a href={result.songUrl}>{result.title}</a></h1>
                            <h3><a href={result.artistUrl}>{result.artist}</a></h3>
                        </div>
                        <div className="timer-content">
                            <p>{secondsToTime(result.progressMs)}</p>
                            <div className="timerRange">
                                <Range
                                  values={[result?.progressMs]}
                                  step={STEP}
                                  min={MIN}
                                  max={result?.durationMs || 1}
                                  /*onChange={(values) => this.setState({ values })}*/
                                  renderTrack={({ props, children }) => (
                                    <div
                                      style={{
                                        ...props.style,
                                        height: "8px",
                                        display: "flex",
                                        width: "100%",
                                        cursor: "context-menu",
                                        transition: ".5s linear",
                                      }}
                                    >
                                      <div
                                        ref={props.ref}
                                        style={{
                                          height: "6px",
                                          width: "100%",
                                          borderRadius: "4px",
                                          transition: ".5s linear",
                                          background: getTrackBackground({
                                            values: [result?.progressMs],
                                            colors: ["#fff", "rgba(255,255,255,0.3)"],
                                            min: MIN,
                                            max: result?.durationMs || 1
                                          }),
                                          cursor: "context-menu",
                                          alignSelf: "center"
                                        }}
                                      >
                                        {children}
                                      </div>
                                    </div>
                                  )}
                                  renderThumb={({ props, isDragged }) => (
                                    <div
                                      {...props}
                                      style={{
                                        ...props.style,
                                        display: "none",
                                        cursor: "context-menu"
                                      }}
                                    >
                                    </div>
                                  )}
                                />
                            </div>
                            <p>{secondsToTime(result.durationMs)}</p>
                        </div>
                        <div className="spotifyIcon"><FaSpotify /></div>
                    </div>
                </div>
            </>
        )
    }
};