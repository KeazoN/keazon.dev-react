import { useState, useEffect } from 'react'
import { MeetSkeleton } from '../Tools/Skeletons'
import { Link } from 'react-router-dom'

function MeetCard({ meetData }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <section className="meet" id="meet">
					<div className="container">
						<div className="cards">
							{loading && <MeetSkeleton />}
							{!loading && 
								meetData.map((data, index) => {
								return(
									<Link key={data.id}  to={data.url}>
										<div className="card">
											<h1 className="meetTitle">{data.title}</h1>
											<p className="meetDesc">{data.desc}</p>
										</div>
									</Link>
								)
							})}
						</div>
					</div>
				</section>
    )
}

export default MeetCard