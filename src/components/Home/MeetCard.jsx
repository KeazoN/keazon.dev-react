import { meet, cards, card, meetTitle, meetDesc } from '../../css/module/meetCard.module.css'

function MeetCard({meetData}) {
	return(
		<section className={meet}>
			<div className="container">
				<div className={cards}>
					{meetData.map((data, index) => (  
			            <a href={data.url}>
							<div className={card}>
								<h1 className={meetTitle}>{data.title}</h1>
								<p className={meetDesc}>{data.desc}</p>
							</div>
						</a>
			        ))} 
				</div>
			</div>
		</section>
	)
}

export default MeetCard