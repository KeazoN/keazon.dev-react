import { useState, useEffect } from "react";
import SongsApi from "../components/Songs/SongsApi"
import { FaSpotify } from 'react-icons/fa'
import { BiBarChart } from 'react-icons/bi'
import { CSSTransition } from 'react-transition-group'
import { motion } from 'framer-motion'

function Songs() {
  const [isLoading, setIsLoading] = useState(true);
  const songs = SongsApi();

  useEffect(() => {
    setIsLoading(false);
  }, [songs]);
  return (
    <motion.div 
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
	>
	{isLoading ? ((
		<div>
			<h1>Loading...</h1>
		</div>
	)) : ((
		<CSSTransition in={songs !==null} timeout={300} classNames="fade" unmountOnExit>
			<section className="songs">
				<div className="container">
					<div className="top">
						<div className="song-container">
							<div className="song" key={songs[0]?.url}>
								<div className="song-image">
									<img className="image" src={songs[0]?.image[3]['#text']} alt={songs[0]?.name} />
									<div className="song-effect"></div>
								</div>
								<div className="song-info">
									<a href={songs[0]?.url} target="_blank">
										<h2 className="songName">{songs[0]?.name}</h2>
									</a>
									<a href={songs[0]?.url}>
										<p className="artistName">{songs[0]?.artist['#text']}</p>
									</a>
									<span className="date">
										<BiBarChart className="linePlay" /> {songs[0]?.date ? `Played
										${songs[0].date['#text']}` : 'Now Playing...' }</span>
								</div>
							</div>
							<div className="song-icon">
								<FaSpotify className="icon" />
							</div>
						</div>
					</div>
					<div className="bottom">
						<ul className="songsUl">
							{songs.slice(1, 10).map((song) => (
							<li className="song" key={song.url}>
								<div className="song-image">
									<img className="imageSong" src={song.image[3]['#text']} alt={song.name} />
								</div>
								<div className="song-info">
									<a href={song.url} target="_blank">
										<h2 className="songName">{song.name}</h2>
									</a>
									<a href={song.url} target="_blank">
										<p className="artistName">{song.artist['#text']}</p>
									</a>
									<span className="date">
										<BiBarChart className="linePlay" /> {song.date['#text']}</span>
								</div>
							</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</CSSTransition>
		))}
    </motion.div>
  );
}

export default Songs;
