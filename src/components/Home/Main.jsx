import { useState, useEffect } from 'react'
import ugurMercan from '../../img/ugur_mercan-min.jpeg'
import { MainSkeleton } from '../Tools/Skeletons'
import { FaSpotify } from 'react-icons/fa'
import { SpotifyNowPlaying } from '../Spotify/SpotifyNowPlaying'

function Main() {
	const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []); 
    return (
        <section className="home" id="home">
			<div className="container">
				{loading && <MainSkeleton />}
				{!loading &&
					<>
						<div className="homeText">
							<h1 class="title">Hello, I'm <span className="homeTextColor">Uğur Mercan</span></h1>
							<p class="desc">I'm a mid-level web designer and developer in Turkey... I like to make people laugh and entertain them. Hold on tight, you'll be greeted with a lot of cold jokes during my internet adventure. <span>😃</span></p>
							<SpotifyNowPlaying />
						</div>
						<div className="homePicture">
							<img src={ugurMercan} />
						</div>
					</>
				}
			</div>
		</section>
    )
}

/*
{!loading &&
						<>
							<div className="homeText">
								<h1>Hello, I'm <span className="homeTextColor">Uğur Mercan</span></h1>
								<p>I'm a mid-level web designer and developer in Turkey... I like to make people laugh and entertain them. Hold on tight, you'll be greeted with a lot of cold jokes during my internet adventure. <span>😃</span></p>
								<div className="spotifyListening">
									<a href="https://open.spotify.com/user/q34hz9w6r3i1jhxrn5kxk0dyp"><SpotifyIcon /> Not Playing</a>
								</div>
							</div>
							<div className="homePicture">
								<img src={ugurMercan} />
							</div>
						</>
					}
*/

export default Main