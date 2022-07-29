import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
const libraryAdd = library.add(fab);

export default [
	{
		id: 1,
		languageWebsite: 'https://html5.org/',
		languageIcon: <FontAwesomeIcon icon={['fab', 'html5']} />,
		languageName: 'HTML5'
	},
	{
		id: 2,
		languageWebsite: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		languageIcon: <FontAwesomeIcon icon={['fab', 'css3']} />,
		languageName: 'CSS3'
	},
	{
		id: 3,
		languageWebsite: 'https://sass-lang.com/',
		languageIcon: <FontAwesomeIcon icon={['fab', 'sass']} />,
		languageName: 'SASS'
	},
	{
		id: 4,
		languageWebsite: 'https://getbootstrap.com/',
		languageIcon: <FontAwesomeIcon icon={['fab', 'bootstrap']} />,
		languageName: 'Bootstrap'
	},
	{
		id: 5,
		languageWebsite: 'https://tailwindcss.com/',
		languageIcon: <FontAwesomeIcon icon={faFileCode} />,
		languageName: 'TailwindCSS'
	},
	{
		id: 6,
		languageWebsite: 'https://www.javascript.com/',
		languageIcon: <FontAwesomeIcon icon={['fab', 'js']} />,
		languageName: 'JavaScript'
	},
	{
		id: 7,
		languageWebsite: 'https://www.figma.com/',
		languageIcon: <FontAwesomeIcon icon={['fab', 'figma']} />,
		languageName: 'Figma'
	},
	{
		id: 8,
		languageWebsite: 'https://www.php.net/',
		languageIcon: <FontAwesomeIcon icon={['fab', 'php']} />,
		languageName: 'PHP'
	},
	{
		id: 9,
		languageWebsite: 'https://nodejs.org/',
		languageIcon: <FontAwesomeIcon icon={['fab', 'node-js']} />,
		languageName: 'Node.js'
	},
	{
		id: 10,
		languageWebsite: 'https://www.mysql.com/',
		languageIcon: <FontAwesomeIcon icon={faFileCode} />,
		languageName: 'MySQL'
	},
	{
		id: 11,
		languageWebsite: 'https://ejs.co/',
		languageIcon: <FontAwesomeIcon icon={faFileCode} />,
		languageName: 'EJS (View Engine)'
	},
	{
		id: 12,
		languageWebsite: 'https://reactjs.org/',
		languageIcon: <FontAwesomeIcon icon={['fab', 'react']} />,
		languageName: 'React.js'
	}
]