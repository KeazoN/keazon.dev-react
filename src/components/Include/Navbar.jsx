import logo from '../../img/logo.svg'
import { useState, useEffect } from 'react'
import { BsGithub } from 'react-icons/bs'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { FaRegAddressCard } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
import { BiCodeBlock, BiHomeAlt } from 'react-icons/bi' 
import { TiContacts } from 'react-icons/ti'

function Navbar() {
	const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
    		<nav>
				<div className="container">
						<>
							<div className="logoNav">
								<a href="/">
									<img src={logo} />
								</a>
							</div>
							<ul className="menu">
								<li><a href="#"><BiHomeAlt /></a></li>
								<li><a href="#meet"><FaRegAddressCard /> </a></li>
								<li><a href="#reference"><MdOutlineBusinessCenter /></a></li>
								<li><a href="#github"><AiOutlineFundProjectionScreen /></a></li>
								<li><a href="#skills"><BiCodeBlock /></a></li>
								<li><a href="#contact"><TiContacts /></a></li>
								<li className="githubNav"><a href="https://github.com/keazon/"><BsGithub /></a></li>
							</ul>
						</>
    			</div>
    		</nav>
    )
}

export default Navbar