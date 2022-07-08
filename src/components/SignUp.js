import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="contact-area mt-120">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="contact-title">
               <h2>Create account and create tasks</h2>
            </div>
            <form id="contact-form" action="https://themeforest.wprealizer.com/html-educoda-preview/educoda/mail.php" method="POST" className="contact-input mt-5 position-relative">
               <div className="row">
                  <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                     <input type="email" name="email" placeholder="Your Email"/>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                     <input type="password" name="password" placeholder="Password"/>
                  </div>
                  <div className="col-xl-7 col-lg-10 col-sm-12 col-12">
                     <div className="contact-check mt-2">
                        <p><span>*</span> Call us 24/7 at +254 794784462 or fill out the form below to receive a free and confidential initial consultation.</p>
                     </div>
                  </div>
                  <div className="contact-btn-wrap mt-5">
                     <button type="submit" className="common-btn">Sign In</button>
                  </div>
                  <p className="form-message">already have an account ?</p>
               </div>
            </form>
			</div>
		</div>
	</div>
</div>
  )
}

export default Login