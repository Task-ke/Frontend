import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { routeContext } from '../contexts/routeContexts';




function Header() {
    const activeRoutes=useContext(routeContext);

  return (
<header>

<nav>
	<div className="header-menu-area header-menu-style-2">
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
							<li><Link to="/about" className={activeRoutes.About?'activeTab':''}>About</Link></li>
							<li className="has-child-menu">
								<Link to="javascript:void(0)">Services</Link>
								<i className="fl flaticon-plus">+</i>
								<ul className="sub-menu">
									<li><Link to="service.html">Services</Link></li>
									<li><Link to="service-details.html">Services Details</Link></li>
								</ul>
							</li>
							<li className="has-child-menu">
								<Link to="javascript:void(0)">Blog</Link>
								<i className="fl flaticon-plus">+</i>
								<ul className="sub-menu">
									<li><Link to="blog.html">Blog</Link></li>
									<li><Link to="blog-sidebar.html">Blog Sidebar</Link></li>
									<li><Link to="blog-details.html">Blog Details</Link></li>
								</ul>
							</li>
							<li className="has-child-menu">
								<Link to="javascript:void(0)">Pages</Link>
								<i className="fl flaticon-plus">+</i>
								<ul className="sub-menu">
									<li><Link to="teachers.html">Teachers</Link></li>
									<li><Link to="teachers-details.html">Teachers Details</Link></li>
									<li><Link to="case-study.html">Case Study</Link></li>
									<li><Link to="case-study-sidebar.html">Case Study Sidebar</Link></li>
									<li><Link to="case-details.html">Case Study Details</Link></li>
									<li><Link to="gallery.html">Gallery</Link></li>
									<li><Link to="faq.html">FAQ</Link></li>
								</ul>
							</li>
							<li><Link to="contact.html">Contact</Link></li>
						</ul>
						<div className="menu-btn-wrap d-block d-lg-none">
							<Link className="menu-btn" to="/login"><i className="bi bi-person"></i> Sign In</Link>
						</div>
					</nav>
				</div>
				<div className="col-xxl-2 col-xl-3 col-lg-3 col-sm-5 col-5 order-1 order-lg-2">
					<div className="menu-btn-wrap ">
						<Link className="menu-btn d-none d-lg-block" to="/login"><i className="bi bi-person"></i> Sign In</Link>
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
			<Link to="https://themeforest.wprealizer.com/cdn-cgi/l/email-protection#275748554654524946094e49414867404a464e4b0944484a"><i className="bi bi-envelope-fill"></i> <span className="__cf_email__" data-cfemail="2c5c435e4d5f59424d0245424a436c48494143024f4341">[email&#160;protected]</span></Link>
		</div>
		<div className="menu-info-content">
			<p>Need help? Talk to an expert: <Link to="tel:01716900768">+254 7 99039 109</Link></p>
		</div>
	</div>
</nav>



<div className="hero-area hero-style-two positioning">
	<div className="container">
		<div className="row align-items-center ">
			<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-1 order-lg-0 mobt-60">
				<div className="hero-content hero-content-style-2">
					<h1>Assignment Help Service in the World.</h1>
					<h2>Looking for <Link to="contact.html">help</Link> from premier Assignment.</h2>
					<div className="hero-rating-wrap owl-carousel">
						<div className="hero-rating text-start text-sm-center">
							<img src="assets/images/icon/envato.png" alt=""/>
							<ul>
								<li><i className="bi bi-star-fill"></i></li>
								<li><i className="bi bi-star-fill"></i></li>
								<li><i className="bi bi-star-fill"></i></li>
								<li><i className="bi bi-star-fill"></i></li>
								<li><i className="bi bi-star-fill"></i></li>
								<li>/4.5</li>
							</ul>
						</div>
						<div className="hero-rating text-start text-sm-center">
							<img src="assets/images/icon/envato.png" alt=""/>
							<ul>
								<li><i className="bi bi-star-fill"></i></li>
								<li><i className="bi bi-star-fill"></i></li>
								<li><i className="bi bi-star-fill"></i></li>
								<li><i className="bi bi-star-fill"></i></li>
								<li><i className="bi bi-star-fill"></i></li>
								<li>/4.5</li>
							</ul>
						</div>
						<div className="hero-rating text-start text-sm-center">
							<img src="assets/images/icon/envato.png" alt=""/>
							<ul>
								<li><i className="bi bi-star-fill"></i></li>
								<li><i className="bi bi-star-fill"></i></li>
								<li><i className="bi bi-star-fill"></i></li>
								<li><i className="bi bi-star-fill"></i></li>
								<li><i className="bi bi-star-fill"></i></li>
								<li>/4.5</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-0 order-lg-1 ">
				<div className="hero-img-wrap">
               <img src="assets/images/hero-img-2.png" alt=""/>
				</div>
			</div>
		</div>
	</div>
	<img className="shape hero-round-1" src="assets/images/shape/hero-round.png" alt=""/>
</div>



</header>
  )
}

export default Header