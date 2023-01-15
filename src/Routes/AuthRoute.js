import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';
import AdminRoutes from '../Routes/AdminRoutes';
import ProtectedRoute from '../Route Prodector/ProtectedRoute';
import ProductPage from '../AdminPages/ProductPage';

export default function AuthRoute() {
  return (
    <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            {/* <Route path='/Admin' element={<ProtectedRoute>
                <ProductPage/>
            </ProtectedRoute>} /> */}
         </Routes>
    </BrowserRouter>
  )
}
