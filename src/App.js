import './App.css';
import Main from './MainLayout';
import { routeContext } from './contexts/routeContexts';
import { useState } from 'react';
import { AuthenticationContext } from './contexts/AuthenticationContexts';
import axios from 'axios'

function App() {
  

  const taskUrlApi = axios.create({
    baseURL: "https://taskwithmeke.co.ke/api"
  })

  taskUrlApi.get(
    '/tasks/'
  )
 
  
  const [user, setUser] = useState({});
  const [Authenticated, setAuthenticated] = useState(false);

  var activeRoutes={
    Home:false,
    About:false
}
  return (
    <routeContext.Provider value={activeRoutes}>
        <div className="App">
          <AuthenticationContext.Provider value={{Authenticated,setAuthenticated}}>
            <Main />
          </AuthenticationContext.Provider>
        </div>
    </routeContext.Provider>

  );
}

export default App;
