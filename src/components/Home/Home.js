import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
	  <>
	  <div className="mt-120">
			  <div className="container organization-welcome">
				  <div className="row">
					  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div className='row'>
								<div className='col-sm-12 col-lg-6 main-body'>
									<div>
										<h1>Join Our Growing community today !</h1>
									</div>
									<div>
										<p className='Add-text'>Join our growing community and experience the best support from our team.
									Meet with the top skilled mindset in Kenya and let us grow together.</p>
									</div>
									<div className='HomeAdd'>
										<button className='common-btn'><Link to='/login'>Start Journey</Link></button>

										<button className='common-btn'><Link to='/about'>How it works</Link></button>
									</div>
								</div>
								<div className='col-sm-12 col-lg-6'>

								</div>
							</div>
					  </div>
				  </div>
			  </div>
			  <div className='build-trust container'>
			  		<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div className='row'>
								<div className='col-lg-6 col-sm-12 col-md-12 col-xs-12'>
								
								</div>
								<div className='col-sm-12 col-xs-12 col-md-12 col-lg-6 main-body'>
									<div>
										<h1>Lets build a great online community Together !</h1>
									</div>
									<div>
										<p className='Add-text'>
											Partner with us through this journey and lets break limits.
											It only takes a few steps to register to the best tasking website in Kenya. You can either partner with us through
											creating tasks or directly as our workers and lets make tasking great.
											The Organization takes full responsibilities of the tasks you create and confidentiality is approved for your tasks.
											We have a great to help you out.
										</p>
									</div>
								</div>
							</div>
					</div>
			  </div>
		  </div></>
  )
}

export default Home