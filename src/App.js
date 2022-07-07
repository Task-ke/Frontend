import logo from './logo.svg';
import './App.css';
import Footer from './MainLayout/Footer';
import Header from './MainLayout/Header';
import PreLoader from './MainLayout/PreLoader';
import Main from './MainLayout';
import { routeContext } from './contexts/routeContexts';
import { useState } from 'react';
import { AuthenticationContext } from './contexts/AuthenticationContexts';


function App() {
  
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
