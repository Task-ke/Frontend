import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                        <div className="footer-wrap">
                            <div className="row justify-content-between">
                                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 wow fadeIn" data-wow-duration="2s" data-wow-delay=".6s">
                                    <div className="single-widget">
                                        <div className="footer-title">
                                            <h3>Extra Links</h3>
                                        </div>
                                        <div className="footer-link">
                                            <ul>
                                                <li><Link to="#">Create Tasks</Link></li>
                                                <li><Link to="#">View organization</Link></li>
                                                <li><Link to="#">View our Workers</Link></li>
                                                <li><Link to="#">Partner with us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 wow fadeIn" data-wow-duration="2s" data-wow-delay=".7s">
                                    <div className="single-widget">
                                        <div className="footer-title">
                                            <h3>Contact</h3>
                                        </div>
                                        <div className="footer-contact">
                                            <ul>
                                                <li>E-mail:</li>
                                                <li><Link to="lumulikenreagan@gmail.com"><span className="__cf_email__">Taskwithme</span></Link></li>
                                                <li>Phone:</li>
                                                <li><Link to="tel:0794784462">(+254) 794784462</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 wow fadeIn" data-wow-duration="2s" data-wow-delay=".8s">
                                    <div className="single-widget">
                                        <div className="footer-title">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <div className="footer-link d-flex justify-content-between flex-wrap">
                                            <ul className="useful-1">
                                                <li><Link to="about-us.html">About Us</Link></li>
                                                <li><Link to="service.html">Services</Link></li>
                                                <li><Link to="case-study.html">Case Study</Link></li>
                                                <li><Link to="gallery.html">Gallery Page.</Link></li>
                                            </ul>
                                            <ul className="useful-2">
                                                <li><Link to="teachers.html">Our Workers</Link></li>
                                                <li><Link to="faq.html">FAQ</Link></li>
                                                <li><Link to="#">Privacy Policy</Link></li>
                                                <li><Link to="#">Terms & Condition</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 wow fadeIn" data-wow-duration="2s" data-wow-delay=".9s">
                                    <div className="single-widget single-widget-last">
                                        <div className="chart-wrap d-flex align-items-center">
                                            <div className="round-chart">
                                                <div className="circle-percent percent-more" data-percent="70">
                                                    <div className="circle-inner">
                                                        <div className="round-per"></div>
                                                    </div>
                                                    <div className="circle-inbox"><span className="percent-text">75%</span></div>
                                                </div>
                                            </div>
                                            <div className="chart-content">
                                                <h3>Success rate completion of tasks by <br/> our workers</h3>
                                            </div>
                                        </div>
                                        <div className="chart-wrap chart-wrap-design-2 d-flex align-items-center pt-4">
                                            <div className="round-chart round-chart-design-2">
                                                <div className="circle-percent percent-more" data-percent="70">
                                                    <div className="circle-inner">
                                                        <div className="round-per" ></div>
                                                    </div>
                                                    <div className="circle-inbox"><span className="percent-text">100%</span></div>
                                                </div>
                                            </div>
                                            <div className="chart-content">
                                                <h3>Money Back Guarantee and <br/> Rules</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer