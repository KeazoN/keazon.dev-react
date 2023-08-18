import { useState, useEffect } from 'react'
import ugurMercan from '../../img/ugur_mercan-min.jpeg'
import { FaSpotify } from 'react-icons/fa'
import { SpotifyNowPlaying } from '../Spotify/SpotifyNowPlaying'

function Main() {
    return (
        <section className="home" id="home">
			<div className="container">
					<>
						<div className="homeText">
							<h1 class="title">Hello, I'm <span className="homeTextColor">Uğur Mercan</span></h1>
							<p class="desc">I'm a mid-level web designer and developer in Turkey... I like to make people laugh and entertain them. Hold on tight, you'll be greeted with a lot of cold jokes during my internet adventure. <span>😃</span></p>
							<SpotifyNowPlaying />
						</div>
						<div className="homePicture">
							<img src={ugurMercan} alt="Uğur Mercan (KeazoN) Web Geliştirici Frontend geliştirici" />
						</div>
					</>
			</div>
		</section>
    )
}

export default Main