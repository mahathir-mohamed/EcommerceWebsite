import './App.css';
import React,{useEffect,useState} from 'react';
// import PageRoutes from '../src/PageRoutes';
// import Header from '../src/HeaderAndFooter/Header';
// import Footer from '../src/HeaderAndFooter/Footer';

import { useCookies } from 'react-cookie';
import { Navigate } from "react-router-dom";
import Login from './Pages/Login';
import RootPage from './Pages/RootPage';
import AuthRoute from './Routes/AuthRoute';
import AdminRoutes from './Routes/AdminRoutes';

function App() {
  const [cookies, setCookie] = useCookies(['Token','Auth']);
  const [loggedIn,setloggedIn] = useState(false);
  const [Admin,setAdmin]=useState(false);
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
     if(cookies.Auth){
       setAdmin(true);
       console.log(Admin)
    }else{
      setAdmin(false);
    }
  }
  ,[])
   if(loggedIn && !cookies.Auth){
    return <RootPage/>
  }
  if(!loggedIn && !cookies.Auth){
     return <AuthRoute/>
  } 
  if(!loggedIn && cookies.Auth){
    return <AdminRoutes/>
  }
 
  
  
}

export default App;
