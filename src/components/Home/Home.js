import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
	  <><div className="hero-area hero-style-two positioning">
		  <div className="container">
			  <div className="row align-items-center ">
				  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-1 order-lg-0 mobt-60">
					  <div className="hero-content hero-content-style-2">
						  <div className="hero-rating-wrap owl-carousel">
							  <div className="hero-rating text-start text-sm-center">
								  <img src="assets/images/icon/envato.png" alt="" />
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
								  <img src="assets/images/icon/envato.png" alt="" />
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
								  <img src="assets/images/icon/envato.png" alt="" />
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
						  <img src="assets/images/hero-img-2.png" alt="" />
					  </div>
				  </div>
			  </div>
		  </div>
		  <img className="shape hero-round-1" src="assets/images/shape/hero-round.png" alt="" />
	  </div><div className="assignment-form-area mt-120">
			  <div className="container">
				  <div className="row">
					  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						  {/* <div className="assignment-tab-wrap assignment-tab-wrap-2">
            <ul className="nav nav-pills" id="pills-tab-1" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-five-tab" data-bs-toggle="pill" data-bs-target="#pills-five" type="button" role="tab" aria-controls="pills-five" aria-selected="true">Assignment</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-six-tab" data-bs-toggle="pill" data-bs-target="#pills-six" type="button" role="tab" aria-controls="pills-six" aria-selected="false">Exams</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-seven-tab" data-bs-toggle="pill" data-bs-target="#pills-seven" type="button" role="tab" aria-controls="pills-seven" aria-selected="false">Report</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link"  id="pills-eight-tab" data-bs-toggle="pill" data-bs-target="#pills-eight" type="button" role="tab" aria-controls="pills-eight" aria-selected="false">Thesis</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent-1">
                <div className="tab-pane fade show active" id="pills-five" role="tabpanel" aria-labelledby="pills-five-tab">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="assignment-form-wrap">
                                <form action="https://themeforest.wprealizer.com/html-educoda-preview/educoda/index.html">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" placeholder="Enter Your Name"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" id="datepicker" placeholder="Due Date     mm/dd/yyyy"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="email" placeholder="webinfo@gmail.com"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <div className="input-file-upload position-relative">
                                                <input type="file"/>
                                                <img src="assets/images/icon/upload-icon-2.png" alt=""/>
                                                <span>Assignment Files Upload</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" placeholder="Subject Name"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" placeholder="School Name"/>
                                        </div>
                                        <div className="col-xl-10 col-lg-9 col-sm-12 col-12">
                                            <input type="text" placeholder="Message"/>
                                        </div>
                                        <div className="col-xl-2 col-lg-3 col-sm-12 col-12">
                                            <div className="assignment-btn-wrap text-center">
                                                <button type="submit" className="assignment-btn">Let's start +</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-six" role="tabpanel" aria-labelledby="pills-six-tab">
             <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                   <div className="assignment-form-wrap">
                      <form action="https://themeforest.wprealizer.com/html-educoda-preview/educoda/index.html">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" placeholder="Enter Your Name"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" id="datepicker-1" placeholder="Due Date     mm/dd/yyyy"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="email" placeholder="webinfo@gmail.com"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <div className="input-file-upload position-relative">
                                                <input type="file"/>
                                                <img src="assets/images/icon/upload-icon-2.png" alt=""/>
                                                <span>Assignment Files Upload</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" placeholder="Subject Name"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" placeholder="School Name"/>
                                        </div>
                                        <div className="col-xl-10 col-lg-9 col-sm-12 col-12">
                                            <input type="text" placeholder="Message"/>
                                        </div>
                                        <div className="col-xl-2 col-lg-3 col-sm-12 col-12">
                                            <div className="assignment-btn-wrap text-center">
                                                <button type="submit" className="assignment-btn">Let’s start +</button>
                                            </div>
                                        </div>
                                    </div>
                        </form>
                   </div>
                </div>
             </div>
                </div>
                <div className="tab-pane fade" id="pills-seven" role="tabpanel" aria-labelledby="pills-seven-tab">
             <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                   <div className="assignment-form-wrap">
                      <form action="https://themeforest.wprealizer.com/html-educoda-preview/educoda/index.html">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" placeholder="Enter Your Name"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" id="datepicker-2" placeholder="Due Date     mm/dd/yyyy"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="email" placeholder="webinfo@gmail.com"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <div className="input-file-upload position-relative">
                                                <input type="file"/>
                                                <img src="assets/images/icon/upload-icon-2.png" alt=""/>
                                                <span>Assignment Files Upload</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" placeholder="Subject Name"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" placeholder="School Name"/>
                                        </div>
                                        <div className="col-xl-10 col-lg-9 col-sm-12 col-12">
                                            <input type="text" placeholder="Message"/>
                                        </div>
                                        <div className="col-xl-2 col-lg-3 col-sm-12 col-12">
                                            <div className="assignment-btn-wrap text-center">
                                                <button type="submit" className="assignment-btn">Let's start +</button>
                                            </div>
                                        </div>
                                    </div>
                    </form>
                   </div>
                </div>
             </div>
                </div>
                <div className="tab-pane fade" id="pills-eight" role="tabpanel" aria-labelledby="pills-eight-tab">
             <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                   <div className="assignment-form-wrap">
                      <form action="https://themeforest.wprealizer.com/html-educoda-preview/educoda/index.html">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" placeholder="Enter Your Name"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" id="datepicker-3" placeholder="Due Date     mm/dd/yyyy"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="email" placeholder="webinfo@gmail.com"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <div className="input-file-upload position-relative">
                                                <input type="file"/>
                                                <img src="assets/images/icon/upload-icon-2.png" alt=""/>
                                                <span>Assignment Files Upload</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" placeholder="Subject Name"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                                            <input type="text" placeholder="School Name"/>
                                        </div>
                                        <div className="col-xl-10 col-lg-9 col-sm-12 col-12">
                                            <input type="text" placeholder="Message"/>
                                        </div>
                                        <div className="col-xl-2 col-lg-3 col-sm-12 col-12">
                                            <div className="assignment-btn-wrap text-center">
                                                <button type="submit" className="assignment-btn">Let's start +</button>
                                            </div>
                                        </div>
                                    </div>
                        </form>
                   </div>
                </div>
             </div>
                </div>
            </div>
    </div> */}
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