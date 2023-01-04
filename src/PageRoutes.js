import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

export default function PageRoutes() {
  return (
    <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Login" element={<Login/>} />
         </Routes>
    </BrowserRouter>
  )
}
