import { socialMedia, socialMediaContent, icons } from '../css/module/footer.module.css'

function Footer({mediaData}) {
	return(
		<section className={socialMedia}>
			<div className="container">
				<div className={socialMediaContent}>
					<div className={icons}>
						{mediaData.map((data, index) => (  
				            <a href={data.smUrl}>
				            	{data.smIcon}
				            </a>
				        ))}
					</div>
					<footer>
						<p>Made by ❤ <a href="/">KeazoN</a></p>
					</footer>
				</div>
			</div>
		</section>
	)
}

export default Footer