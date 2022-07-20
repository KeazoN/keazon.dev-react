import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'

function Business({businessData}) {
	return(
		<section className="project" id="reference">
			<div className="container">
				<div className="contentTitle"><h1>I worked with</h1></div>
				<div className="cards">
					{businessData.map((data, index) => (  
			            <div key={data.id} className="card">
							<div className="cardBanner">
								<img src={data.brandBanner} />
								<div className="bannerEffect"></div>
							</div>
							<div className="cardContent">
								<div className="cardLogo">
									<img src={data.brandLogo} />
								</div>
								<div className="cardTitle">
									<h1>{data.brandName}</h1>
								</div>
								<div className="cardDesc">
									<p>{data.brandDesc}</p>
								</div>
								<div className="cardButtons">
									<a href={data.brandWebsite}><FontAwesomeIcon icon={faEarth} /> Website</a>
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