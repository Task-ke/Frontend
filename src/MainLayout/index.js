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
        axios.get('https://taskwithmeke.co.ke/api/admin/home').then(
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
        <Footer/>
    </div>
  )
}

export default Main

