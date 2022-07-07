import  '../assets/css/jquery-ui.css';
import '../assets/css/boxicons.min.css';
import '../assets/css/bootstrap-icons.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/odometer.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

import '../assets/js/jquery-3.6.0.min';
import '../assets/js/jquery-ui';
import '../assets/js/main';
import {Routes  , Route,
    Link,
    useLocation} from 'react-router-dom';
import $ from 'jquery';
import React, { useContext, useEffect, useState } from 'react'
import PreLoader from './PreLoader';
import Header from './Header';
import Footer from './Footer';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import { routes } from '../routes/routes';
import { routeContext } from '../contexts/routeContexts';
import axios from 'axios';

function Main() {
    const [Loading, setLoading] = useState(false);
    const location = useLocation();
   
    const activeRoutes=useContext(routeContext);
    useEffect(() => {
        fetchData();
        console.log(location.pathname);
        if(location.pathname=='/'){
            activeRoutes.Home=true;
            activeRoutes.About=false;

        }
        else if(location.pathname=='/about'){
            activeRoutes.About=true;
            activeRoutes.Home=false;

        }
        

    },[location]);

    
    const fetchData=()=>{
        setLoading(true);
        console.log('loading')
        axios.get('https://jsonplaceholder.typicode.com/posts').then(function(response){
             console.log(response)
             setTimeout(() => {
                setLoading(false);
             }, 3000);
            
             

        }).catch(function(error){
     console.log(error)
     setTimeout(() => {
        setLoading(false);
     }, 3000);
     

        });

    }


  return (
    <div>
        <PreLoader/>
        <Link to="/" id="scroll-top" className="back-to-top-btn"><i className="bi bi-arrow-up"></i></Link>
        <Header/>
        {
            Loading?<PreLoader/>:
            <Routes >
            {routes.map((item,index)=>(
          <Route exact key={index} path={item.path} element={<item.component/>}/>
            ))}
        </Routes >
        }
        



        {/*  personal details */}












{/* start of book area */}

        <div className="books-area pb-120">
            <div className="container">
                <div className="row row-cols-2 row-cols-xl-5 row-cols-xxl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay=".2s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-1.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay=".3s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-2.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay=".4s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-3.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay=".5s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-13.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay=".6s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-5.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay=".7s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-6.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay=".8s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-7.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay=".9s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-8.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-9.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay="1.1s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-10.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay="1.2s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-11.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay="1.3s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-12.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay="1.4s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-4.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay="1.5s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-14.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-15.png")} alt=""/>
                        </div>
                    </div>
                    <div className="col wow fadeIn" data-wow-duration="2s" data-wow-delay="1.7s">
                        <div className="books-wrap d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/books/book-16.png")} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="common-border common-border-top-none"></div>
        </div>
        <Footer/>
        <div className="copy-right-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="copy-text text-center wow flipInX" data-wow-duration="2s" data-wow-delay="1s">
                            <p>Copyright by <Link to="/">@wprealizer.</Link> All rights reserved 2022.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main

