import logo from '../../img/logo.svg'
import { useState, useEffect } from 'react'
import { NavbarSkeleton } from '../Tools/Skeletons'
import { BsGithub } from 'react-icons/bs'
import { HiOutlineHome } from 'react-icons/hi'
import { FaRegAddressCard } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
import { BiCodeBlock } from 'react-icons/bi' 
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
    				{loading && <NavbarSkeleton />}
    				{!loading &&
						<>
							<div className="logoNav">
								<a href="/">
									<img src={logo} />
								</a>
							</div>
							<ul className="menu">
								<li><a href="#"><HiOutlineHome /></a></li>
								<li><a href="#meet"><FaRegAddressCard /></a></li>
								<li><a href="#github"><AiOutlineFundProjectionScreen /></a></li>
								<li><a href="#skills"><BiCodeBlock /></a></li>
								<li><a href="#contact"><TiContacts /></a></li>
								
							</ul>
						</>
					}
    			</div>
    		</nav>
    )
}

export default Navbar