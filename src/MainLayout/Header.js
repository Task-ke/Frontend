import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { routeContext } from '../contexts/routeContexts';

function Header() {
    const activeRoutes=useContext(routeContext);

  return (
	<header>
		<nav className='main-nav'>
			<div className='hamburger'>
				<div></div>
				<div></div>
				<div></div>
			</div>
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
					<Link to="/contact">
						Contact
					</Link>
				</li>
				<li>
					<Link to="/login">Work with us</Link>
				</li>
				<li>
					<Link to="/account">Account</Link>
				</li>
				<li>
					<button>
						<Link to="/login">Login</Link>
					</button>
					<button>
						<Link to="#">Register</Link>
					</button>
				</li>
			</ul>
		</nav>
	</header>
  )
}

export default Header