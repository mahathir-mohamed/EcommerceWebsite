import React,{useEffect,useState} from 'react';
import AllProductCard from '../Helpers/AllProductCard';
import Container from 'react-bootstrap/container';
import axios from 'axios';
import {baseUrl1,baseUrl2} from '../Api/ApiRoutes'; 

export default function AllProducts() {
  const [AllProduct,setAllProduct]=useState([]);
  useEffect(()=>{
    axios.get(`${baseUrl2}/Products/AllProducts`).then((response)=>{console.log(response.data);setAllProduct(response.data)}).catch((err)=>console.log(err))
  },[])
  return (
    <div>
        {AllProduct.map((item,index)=>{
            return <AllProductCard key={index} title={item.Title} price={item.Price} img={item.Image[0].url} offer={item.Offer} description={item.Description} id={item._id}/>
        })}
    </div>
  )
}
