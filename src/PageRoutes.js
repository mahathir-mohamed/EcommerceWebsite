import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import EditSignUp from './Pages/EditSignUp';
import Login from './Pages/Login';
import AllProducts from './Pages/AllProducts';
import SingleProduct from './Pages/SingleProduct';

export default function PageRoutes() {
  return (
    <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Login" element={<Login/>} />
            <Route path="/AllProducts" element={<AllProducts/>} />
            <Route path="/SingleProduct/:id" element={<SingleProduct/>}/>
            <Route path="/UpdateCustomer" element={<EditSignUp/>}/>
         </Routes>
    </BrowserRouter>
  )
}
