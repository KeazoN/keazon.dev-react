function Skills({skillsData}) {
	return(
		<section className="skills" id="skills">
			<div className="container">
				<div className="contentTitle"><h1>Skills</h1></div>
				<div className="keazonSkills">
						{skillsData.map((data, index) => (  
				            <a key={index} href={data.languageWebsite}>
					            <div className="power">
						            {data.languageIcon}
						            {data.languageName}
					            </div>
				            </a>
				        ))} 
					</div>
				</div>
		</section>
		)
}

export default Skills