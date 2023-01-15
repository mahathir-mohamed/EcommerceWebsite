import React,{useState,useEffect} from 'react';
import Banner from '../Helpers/Slider';
// import Container from 'react-bootstrap/container';
import ProductDetails from '../Helpers/ProductDetails';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {baseUrl1,baseUrl2} from '../Api/ApiRoutes';

export default function SingleProduct() {
    const {id} = useParams();
  //    const data = [
  //   {"img":"/baby Cloth.jpeg"},
  //   {"img":"/cloth2.jpeg"},
  //   {"img":"/cloth3.jpg"},
  //   {"img":"/cloth4.jpg"}, 
  // ]
  const [Product,setProduct]=useState({});
  const [data,setdata]=useState([]);
  useEffect(()=>{
    axios.get(`${baseUrl2}/Products/ProductDetails/${id}`).then(
      (response)=>{
        setProduct(response.data);
        setdata(response.data.Image);
        console.log(response.data.Image);
      }).catch((err)=>console.log(err));
  },[])
  
  return (
    <div>
    <Banner data={data} design={true}/>
    <ProductDetails Product={Product}/>
    </div>
    
  )
}   
