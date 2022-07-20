function Footer({mediaData}) {
	return(
		<section className="socialMedia">
			<div className="container">
				<div className="socialMediaContent">
					<div className="icons">
						{mediaData.map((data, index) => (  
				            <a key={index} href={data.smUrl}>
				            	{data.smIcon}
				            </a>
				        ))}
					</div>
					<footer>
						<div className="container">
							<p>This project <a target="_blank" href="https://github.mco/keazon/keazonme">open source</a>.</p>
							<p><i className="copyright">&copy;</i> Made by ❤ KeazoN</p>
						</div>
					</footer>
				</div>
			</div>
		</section>
	)
}

export default Footer