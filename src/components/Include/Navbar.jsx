import logo from '../../img/logo.svg'
import { GithubIcon } from '../Tools/Icons'
import { useState, useEffect } from 'react'
import { NavbarSkeleton } from '../Tools/Skeletons'

function Navbar() {
	const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
    return (
    		<nav>
				<div className="container">
    				{loading && <NavbarSkeleton />}
    				{!loading &&
						<>
							<div className="logoNav">
								<a href="/">
									<img src={logo} />
								</a>
							</div>
							<ul className='menu'>
								<li><a href="#">Home</a></li>
								<li><a href="#meet">Meet Me</a></li>
								<li><a href="#reference">Reference</a></li>
								<li><a href="#skills">Skills</a></li>
								<li><a href="#contact">Contact</a></li>
								<li className="githubNav"><a href="https://github.com/keazon"><GithubIcon /></a></li>
							</ul>
						</>
					}
    			</div>
    		</nav>
    )
}

export default Navbar