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
        if(location.pathname=='/'){
            activeRoutes.Home=true;
            activeRoutes.About=false;
            activeRoutes.Tasks=false;

        }
        else if(location.pathname=='/about'){
            activeRoutes.About=true;
            activeRoutes.Tasks=false;
            activeRoutes.Home=false;

        }
        else if(location.pathname=='/tasks'){
            activeRoutes.Tasks=true;
            activeRoutes.Home=false;
            activeRoutes.About=false;

        }

    },[location]);

    
    const fetchData=()=>{
        setLoading(true);
        console.log('loading')
        axios.get('http://127.0.0.1:5000/admin/home').then(
            function(response){
                console.log(response)
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            }
        ).catch(function(error){
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

        <div className="books-area pb-120">
            <div className="container">
                <div className="row row-cols-2 row-cols-xl-5 row-cols-xxl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
                    
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
                            <p>Copyright by <Link to="/">@taskwithmeke.co.ke.</Link> All rights reserved 2022.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main

