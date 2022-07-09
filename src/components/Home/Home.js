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
			  <div className='organization-morals mt-60'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-lg-4'>
							<div className='Morals-card'>
								<h6 className='text text-danger'>Trust and accountability</h6>
								<p>
									The organization has been built on the key foundations of accounatbility to clients.
									It takes the responsibility of the damage incurred to them by our workers. The organization ensures that
									it provides the best workers in the industry to ensure that quality service is attained by the clients.
									Our staff are qualified for the tasks and thus quality service is assurred and hence trust build.
								</p>
							</div>
						</div>
						<div className='col-lg-4'>
							<div className='Morals-card'>
								<h6 className='text text-danger'>Focus and Service Delivery</h6>
								<p>
									Taskwithmeke is focused mainly in bridging the gap between the organization and the skilled man power.
									Through this it aims at creating more employment opportunities to the youth. The organization ensures that it hires qualified personnel
									who have the required skills to handle the tasks from our clients.
								</p>
							</div>
						</div>
						<div className='col-lg-4'>
							<div className='Morals-card'>
								<h6 className='text text-danger'>Privacy and confidentiality</h6>
								<p>
									We ensure the  both clients and worker data is kept private. The organization takes accountability to handle and protect 
									the data from other harmful sources.
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