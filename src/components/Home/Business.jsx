import { project, contentTitle, cards, card, cardBanner, bannerEffect, cardContent, cardLogo, cardTitle, cardDesc, cardButtons } from '../../css/module/business.module.css'

function Business({businessData}) {
	return(
		<section className={project}>
			<div className="container">
				<div className={contentTitle}><h1>I worked with</h1></div>
				<div className={cards}>
					{businessData.map((data, index) => (  
			            <div className={card}>
							<div className={cardBanner}>
								<img src={data.brandBanner} />
								<div className={bannerEffect}></div>
							</div>
							<div className={cardContent}>
								<div className={cardLogo}>
									<img src={data.brandLogo} />
								</div>
								<div className={cardTitle}>
									<h1>{data.brandName}</h1>
								</div>
								<div className={cardDesc}>
									<p>{data.brandDesc}</p>
								</div>
								<div className={cardButtons}>
									<a href={data.brandWebsite}><i className="fa fa-earth"></i> Website</a>
								</div>
							</div>
						</div>
			        ))}
				</div>
			</div>
		</section>
	)
}

export default Business