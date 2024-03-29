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
import axios from 'axios';
import {baseUrl2} from './Api/ApiRoutes';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [cookies, setCookie,removeCookie] = useCookies(['Token','Auth']);
  const [loggedIn,setloggedIn] = useState(false);
  const [Loading,setLoading] = useState(false);
  const [Admin,setAdmin]=useState(false);
  // let navigate = useNavigate();
   
  function AdminToken(Authtoken){
      axios.post(`${baseUrl2}/users/AdminCheck`,{AuthToken:Authtoken}).then((res)=>{
        if(!res){
          setLoading(true);
        }
        if(res.data.AuthToken){
          setCookie('AuthToken',res.data.AuthToken, { path: '/' });
          console.log(res.data);
          setAdmin(true);
        }else{
           removeCookie('AuthToken');
           setAdmin(false);
        }
      }).catch((err)=>{console.log(err)})
      // console.log(token);
  }
  function TokenVerify(token){
     axios.post(`${baseUrl2}/users/AuthCheck`,{Token:token}).then((res)=>{
        if(!res){
          setLoading(true);
        }
        if(res.data.Token){
          setCookie('Token',res.data.Token, { path: '/' });
          console.log(res.data);
          setloggedIn(true);
        }else{
           removeCookie('Token');
           setloggedIn(false);
        }
      }).catch((err)=>{console.log(err)})
      console.log(token);
  }

  useEffect(()=>{
    var Authtoken = cookies.AuthToken;
    var token = cookies.Token;
    if(Authtoken){
       AdminToken(Authtoken)
    }else{
      console.log("Failed to LoggedIn");
       removeCookie('AuthToken');
      setAdmin(false);
    }
    if(token){
       TokenVerify(token)
    }else{
      console.log("Failed to LoggedIn");
       removeCookie('Token');
      setloggedIn(false);
    }}
  ,[])


   if(loggedIn && !Admin){
    return Loading?<Spinner animation="border" size="lg"/>:<RootPage/>
  }else if(!loggedIn && !Admin){
     return Loading?<Spinner animation="border" size="lg"/>:<AuthRoute/>
  }else if(!loggedIn && Admin){
    return Loading?<Spinner animation="border" size="lg"/>:<AdminRoutes/>
  }else{
    return Loading?<Spinner animation="border" size="lg"/>:<AuthRoute/>
  }

  
 
  
  
}

export default App;
