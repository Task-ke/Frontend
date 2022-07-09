import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const LoginUrl = axios.create(
      {
         baseURL: 'http://localhost:5000/login'
      }
   )
   
   const [token, setToken] = useState("");

   const FormSubmitHandler= async()=>{
      const req = await LoginUrl.post(
         {
            'email': email,
            'password': password
         }
      ).then((response)=>{
         setToken(response.data)
      }
         
      ).catch((error)=>{
         console.log("Error Occurred")
      })
   };

  return (
      <>
      <div className='authentication-wrap'>
         <form id="contact-form" onSubmit={FormSubmitHandler()} className="contact-input">
            <h4>Login to account</h4>
            <div>
               <label>Email</label>
               <input onChange={(e) => { setEmail(e.target.value); } } type="email" name="email"/>
            </div>
            <div>
               <label>Password</label>
               <input onChange={(e) => {
               setPassword(e.target.value);
            } } type="password" name="password"/>
            </div>
            <div className='remember'>
               <input type='checkbox'/>
               Remember me
            </div>
            <button type="submit" className="common-btn">Login to account</button>
            <small className='add-space'>
               Need an account ? <Link to='#'> create one</Link>
            </small>
         </form>
      </div>
      </>
  )
}

export default Login