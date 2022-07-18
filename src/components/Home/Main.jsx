import { SpotifyIcon } from '../Icons'
import ugurMercan from '../../img/ugur_mercan-min.jpeg'
import { home, homeContent, homePicture, homeText, homeTextColor, spotifyListening} from '../../css/module/home.module.css'

function Main() {
	return(
		<section className={home}>
				<div className="container">
					<div className={homeContent}>
						<div className={homeText}>
							<h1>Hello, I'm <span className={homeTextColor}>Uğur Mercan</span></h1>
							<p>I'm a mid-level web designer and developer in Turkey... I like to make people laugh and entertain them. Hold on tight, you'll be greeted with a lot of cold jokes during my internet adventure. <span>😃</span></p>
							<div className={spotifyListening}>
								<a href="https://open.spotify.com/user/q34hz9w6r3i1jhxrn5kxk0dyp"><SpotifyIcon /> Not Playing</a>
							</div>
						</div>
						<div className={homePicture}>
							<img src={ugurMercan} />
						</div>
					</div>
				</div>
		</section>
	)
}

export default Main