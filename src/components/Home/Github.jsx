import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { TbGitFork } from 'react-icons/tb'
import { VscRepo } from 'react-icons/vsc'

function Github() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const username = import.meta.env.VITE_GITHUB_USERNAME;

	useEffect(() => {
		fetch(`https://api.github.com/users/${username}/repos`)
		.then(res => res.json())
		.then((result) => {
			setIsLoaded(true);
			setItems(result);
		}, (error) => {
			setIsLoaded(true);
			setError(error);
		})
	}, [])
	if (error) {
		return console.log(error.message);
	} else {
		const sort = [...items].sort((a, b) => b.stargazers_count - a.stargazers_count);
		const slice = [...sort].slice(0,6);
		return (
		  <section className="github" id="github">
		  		<div className="container">
		  			<div className="contentTitle"><h1>My Repos</h1></div>
			  		<div className="cards">
						{slice.map((data) => (
							<a key={data.id} href={data.html_url}>
						        <div className="card">
						        	<div className="card-top">
						        		<div className="card-title"><h1><VscRepo /> {data.name}</h1></div>
						        		<div className="card-desc" id={(!data.description) ? "noDesc" :""}>
							        		<p>
								        		{data.description && data.description} 
								        		{!data.description &&
								        			<p>This project not defined on description.</p>
								        		}
						        			</p>
						        		</div>
						        	</div>
						        	<div className="card-bottom">
						        		<div className="card-bottom-left">
							        		<div className="card-star"><p><FaStar /> {data.stargazers_count}</p></div>
							        		<div className="card-fork"><p><TbGitFork /> {data.forks}</p></div>
							        	</div>
							        	<div className="card-bottom-right">
							        		<div id="colorRange" className={
							        			(data.language == "CSS") ? "cssColorRange" :
							        			(data.language == "JavaScript") ? "jsColorRange" :
							        			(data.language == "PHP") ? "phpColorRange" :
							        			(data.language == "HTML") ? "htmlColorRange" :
							        			(!data.language) ? "noLanguage" : ""
							        		}></div>
							        		<div className="language"><h6>{data.language && data.language} {!data.language && <p>No Language</p>}</h6></div>
							        	</div>
						        	</div>
								</div>
							</a>
					    ))}
					</div>
		  		</div>
		  </section>
	  )
	}
}

export default Github