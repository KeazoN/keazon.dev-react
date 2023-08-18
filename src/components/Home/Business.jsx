import { CgWebsite } from 'react-icons/cg'

function Business({ businessData }) {
    return (
        <section className="project" id="reference">
			<div className="container">
				<div className="contentTitle"><h1>I worked with</h1></div>
				<div className="cards">
					{businessData.map((data, index) => (  
			            <div key={data.id} className="card">
							<div className="cardBanner">
								<img src={data.brandBanner} alt={data.brandName} />
								<div className="bannerEffect"></div>
							</div>
							<div className="cardContent">
								<div className="cardLogo">
									<img src={data.brandLogo} alt={data.brandName} />
								</div>
								<div className="cardTitle">
									<h1>{data.brandName}</h1>
								</div>
								<div className="cardDesc">
									<p>{data.brandDesc}</p>
								</div>
								<div className="cardButtons">
									<a href={data.brandWebsite} title={data.brandName}><CgWebsite /> Website</a>
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