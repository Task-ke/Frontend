import About from "../components/About/About";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Tasks from "../components/Tasks/Tasks";

export const routes=[
    {id:1,name:'Home', path:'/', component:Home},
    {id:2,name:'About', path:'/about', component:About},
    {id:3,name:'Login', path:'/login', component:Login},
    {id:4,name:'tasks', path:'/tasks', component:Tasks}
];