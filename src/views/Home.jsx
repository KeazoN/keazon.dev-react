import Main from '../components/Home/Main'
import MeetCard from '../components/Home/MeetCard'
import MeetData from '../data/MeetData'
import Business from '../components/Home/Business'
import BusinessData from '../data/BusinessData'
import Skills from '../components/Home/Skills'
import SkillsData from '../data/SkillsData'
import Contact from '../components/Home/Contact'
import Github from '../components/Home/Github'
import { motion } from 'framer-motion'

function Home() {
	return(
		<motion.div
			inital={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<Main />
			<MeetCard meetData={MeetData} />
			<Business businessData={BusinessData} />
			<Github />
			<Skills skillsData={SkillsData} />
			<Contact />
		</motion.div>
	)
}

export default Home