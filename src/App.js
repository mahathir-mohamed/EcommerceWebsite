import './App.css';
import React,{useEffect,useState} from 'react';
// import PageRoutes from '../src/PageRoutes';
// import Header from '../src/HeaderAndFooter/Header';
// import Footer from '../src/HeaderAndFooter/Footer';

import { useCookies } from 'react-cookie';
import { Navigate } from "react-router-dom";
import Login from './Pages/Login';
import RootPage from './Pages/RootPage';

function App() {
  const [cookies, setCookie] = useCookies(['Token']);
  const [loggedIn,setloggedIn] = useState(false);
  // let navigate = useNavigate();
  useEffect(()=>{
    if(cookies.Token){
      console.log("Succefully LoggedIn");
      setloggedIn(true);
      // navigate('/');
    }else{
      // navigate('/Login');
      console.log("Failed to LoggedIn");
      setloggedIn(false);
    }
  }
  ,[])
 
  return (
      <div>
       {/*<Header/>
       <PageRoutes/>
       <Footer/> */}
       {loggedIn?<RootPage/>:<Login/>}
       </div>
  );
}

export default App;
