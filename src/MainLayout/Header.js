import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { routeContext } from '../contexts/routeContexts';

function Header() {
    const activeRoutes=useContext(routeContext);

  return (
	<header>
		<nav>
			<div className="App-header header-menu-area header-menu-style-2">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-xxl-3 col-xl-2 col-lg-2 col-sm-6 col-6 order-0 order-lg-0">
							<div className="logo text-left">
								<Link to="index.html"><img src="assets/images/logo-2.png" alt=""/></Link>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-sm-1 col-1 order-2 order-lg-1">
							<Link to="javascript:void(0)" className="hidden-lg hamburger">
								<span className="h-top"></span>
								<span className="h-middle"></span>
								<span className="h-bottom"></span>
							</Link>
							<nav className="main-nav">
								<div className="logo mobile-ham-logo d-lg-none d-block text-left">
									<Link to="/"><img src="assets/images/logo-2.png" alt=""/></Link>
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
										<Link to="contact.html">
											Contact
										</Link>
									</li>
								</ul>
								<div className="menu-btn-wrap d-block d-lg-none">
									<Link className="menu-btn" to="/login"><i className="bi bi-person"></i> Sign In</Link>
								</div>
							</nav>
						</div>
						<div className="col-xxl-2 col-xl-3 col-lg-3 col-sm-5 col-5 order-1 order-lg-2">
							<div className="menu-btn-wrap ">
							<Link className="menu-btn d-none d-lg-block" to="/login"><i className="bi bi-person"></i> Sign In</Link>
							<Link className="menu-btn d-none d-lg-block" to="/signup"><i className="bi bi-person"></i> Sign up</Link>
								<div className="search-wrap position-relative">
									<div className="search-icon">
										<i className="bi bi-search search"></i>
										<i className="bi bi-x-octagon cancel"></i>
									</div>
									<div className="search-field">
										<form action="#">
											<input type="text" placeholder="Search"/>
											<i className="bi bi-search search"></i>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="menu-info-wrap d-none d-xxl-block position-absolute">
				<div className="menu-info-shape position-relative">
					<img src="assets/images/shape/menu.png" alt=""/>
				</div>
				<div className="menu-info-content">
					<p>Need help? Talk to an expert: <Link to="tel:0794784462">+254 794 784462</Link></p>
				</div>
			</div>
		</nav>
	</header>
  )
}

export default Header