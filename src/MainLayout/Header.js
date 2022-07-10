import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { routeContext } from '../contexts/routeContexts';

function Header() {
    const activeRoutes=useContext(routeContext);

  return (
	<header>
		<nav className='main-nav'>
			<ul>
				<li>
					<Link to="/" className={activeRoutes.Home?'activeTab':''}>Home</Link>
				</li>
				<li>
					<Link to="/tasks" className={activeRoutes.Tasks?'activeTab':''}>
						Tasks
					</Link>
				</li>
				<li>
					<Link to="/about" className={activeRoutes.About?'activeTab':''}>
						About
					</Link>
				</li>
				<li>
					<Link to="contact.html">
						Contact
					</Link>
				</li>
				<li>
					<Link to="/login">Work with us</Link>
				</li>
				<li>
					<Link to="/login">Login to you account</Link>
				</li>
				<li>
					<Link to="#">Worker Profiles</Link>
				</li>
			</ul>
		</nav>
	</header>
  )
}

export default Header