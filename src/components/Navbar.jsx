import logo from '../img/logo.svg'
import { menu, logoNav, githubNav, navContent } from '../css/module/navbar.module.css'
import { GithubIcon } from './Icons'

function Navbar() {
	return (
		<nav>
			<div className="container">
				<div className={navContent}>
					<div className={logoNav}>
						<a href="/">
							<img src={logo} />
						</a>
					</div>
					<ul className={menu}>
						<li><a href="#">Home</a></li>
						<li><a href="#meet">Meet Me</a></li>
						<li><a href="#reference">Reference</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#contact">Contact</a></li>
						<li className={githubNav}><a href="https://github.com/keazon"><GithubIcon /></a></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar