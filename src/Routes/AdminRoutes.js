import React from 'react';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import OrderPage from '../AdminPages/OrderPage';
import ProductPage from '../AdminPages/ProductPage';
import CustomerPage from '../AdminPages/CustomerPage';
import Banners from '../AdminPages/Banners';


export default function AdminRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductPage/>}/>
            <Route path="/CustomerList" element={<CustomerPage/>}/>
            <Route path="/OrderList" element={<OrderPage/>} />
            <Route path="/Banners" element={<Banners/>} />
         </Routes>
    </BrowserRouter>
  )
}
