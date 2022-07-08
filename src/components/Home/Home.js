import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
	  <><div className="mt-120">
			  <div className="container">
				  <div className="row">
					  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div className='row'>
								<div className='col-sm-12 col-lg-6'>
									<h1>Join Our community today</h1>
									<div>
										<button>Join Our community Today</button>

										<button>How it works</button>
									</div>
								</div>
								<div className='col-sm-12 col-lg-6'>

								</div>
							</div>
					  </div>
				  </div>
			  </div>
			  <div className="team-area positioning mt-120 mb-96">
				  <div className="container">
					  <div className="row">
						  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							  <div className="team-cta-wrap text-center">
								  <h1>Meet the main pioneers of this organization</h1>
								  <div className="team-cta-btn-wrap">
									  <Link className="common-btn" to="about-us.html">Read More About our organization +</Link>
								  </div>
							  </div>
						  </div>
					  </div>
					  <div className="row mt-120">
						  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							  <div className="section-title style-two text-center">
								  <p>Excellent Courses</p>
								  <h1>Exceptional Online Assignment</h1>
							  </div>
						  </div>
					  </div>
					  <div className="row mt-60">
						  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							  <div className="team-box">
								  <div className="team-img">
									  <Link to="teachers-details.html"><img className="w-100" src="assets/images/team/team-1.png" alt="" /></Link>
								  </div>
								  <div className="team-content-wrap d-flex align-items-center justify-content-between">
									  <div className="team-content">
										  <h3><Link to="teachers-details.html">Lumuli Ken Reagan</Link></h3>
										  <p>Taskwithme Manager</p>
									  </div>
									  <div className="team-social">
										  <Link to="https://twitter.com/kenlumuli"><i className='bx bxl-twitter'></i></Link>
									  </div>
								  </div>
							  </div>
						  </div>
						  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							  <div className="team-box">
								  <div className="team-img">
									  <Link to="teachers-details.html"><img className="w-100" src="assets/images/team/team-4.png" alt="" /></Link>
								  </div>
								  <div className="team-content-wrap d-flex align-items-center justify-content-between">
									  <div className="team-content">
										  <h3><Link to="teachers-details.html">Alvin Otuya</Link></h3>
										  <p>Taskwithme Manager</p>
									  </div>
									  <div className="team-social">
										  <Link to="#"><i className='bx bxl-twitter'></i></Link>
									  </div>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
				  <img className="shape assignment-shape-2" src="assets/images/shape/assignment-single.png" alt="" />
			  </div>
		  </div>
		  <div className="row align-items-center footer-border">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="footer-logo-wrap">
                            <div className="footer-logo wow fadeInDown" data-wow-duration="2s" data-wow-delay=".5s">
                                <Link to="index.html"><img src="assets/images/logo.png" alt=""/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobt-24">
                        <div className="footer-social text-lg-end">
                            <ul>
                                <li><Link to="#"><i className="bi bi-google"></i></Link></li>
                                <li><Link to="#"><i className="bi bi-twitter"></i></Link></li>
                                <li><Link to="#"><i className="bi bi-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
            </div></>
  )
}

export default Home