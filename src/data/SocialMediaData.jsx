import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
const libraryAdd = library.add(fab);

export default [
	{
		id: 1,
		smUrl: 'https://www.instagram.com/ugr_mrcn/',
		smName: 'Instagram',
		smIcon: <FontAwesomeIcon icon={['fab', 'instagram']} />
	},
	{
		id: 2,
		smUrl: 'http://github.com/keazon',
		smName: 'Github',
		smIcon: <FontAwesomeIcon icon={['fab', 'github']} />
	},
	{
		id: 3,
		smUrl: 'https://www.figma.com/@keazon',
		smName: 'Figma',
		smIcon: <FontAwesomeIcon icon={['fab', 'figma']} />
	},
	{
		id: 4,
		smUrl: 'https://twitter.com/keazondev',
		smName: 'Twitter',
		smIcon: <FontAwesomeIcon icon={['fab', 'twitter']} />
	},
	{
		id: 5,
		smUrl: 'https://open.spotify.com/user/q34hz9w6r3i1jhxrn5kxk0dyp',
		smName: 'Spotify',
		smIcon: <FontAwesomeIcon icon={['fab', 'spotify']} />
	},
	{
		id: 6,
		smUrl: 'https://t.me/keazon',
		smName: 'Telegram',
		smIcon: <FontAwesomeIcon icon={['fab', 'telegram']} />
	},
	{
		id: 7,
		smUrl: 'https://discord.com/users/540508804043767844',
		smName: 'Discord',
		smIcon: <FontAwesomeIcon icon={['fab', 'discord']} />
	}
]