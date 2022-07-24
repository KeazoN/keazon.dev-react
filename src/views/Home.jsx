import Main from '../components/Home/Main'
import MeetCard from '../components/Home/MeetCard'
import MeetData from '../data/MeetData'
import Business from '../components/Home/Business'
import BusinessData from '../data/BusinessData'
import Skills from '../components/Home/Skills'
import SkillsData from '../data/SkillsData'
import Contact from '../components/Home/Contact'

function Home() {
	return(
		<>
			<Main />
			<MeetCard meetData={MeetData} />
			<Business businessData={BusinessData} />
			<Skills skillsData={SkillsData} />
			<Contact />
		</>
	)
}

export default Home