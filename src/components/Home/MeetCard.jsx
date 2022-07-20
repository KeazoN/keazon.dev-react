import { Link } from 'react-router-dom'

function MeetCard({meetData}) {
	return(
		<section className="meet" id="meet">
			<div className="container">
				<div className="cards">
					{meetData.map((data, index) => (  
			            <Link key={data.id}  to={data.url}>
							<div className="card">
								<h1 className="meetTitle">{data.title}</h1>
								<p className="meetDesc">{data.desc}</p>
							</div>
						</Link>
			        ))} 
				</div>
			</div>
		</section>
	)
}

export default MeetCard