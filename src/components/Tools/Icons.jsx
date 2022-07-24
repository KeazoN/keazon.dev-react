import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
const libraryAdd = library.add(fab);

function GithubIcon() {
    return (
        <FontAwesomeIcon icon={['fab', 'github']} />
    )
}

function SpotifyIcon() {
    return (
        <FontAwesomeIcon icon={['fab', 'spotify']} />
    )
}

export {
    GithubIcon,
    SpotifyIcon
}