import React,{useEffect,useState} from 'react';
import AllProductCard from '../Helpers/AllProductCard';
import Container from 'react-bootstrap/container';
import axios from 'axios';
import {baseUrl1,baseUrl2} from '../Api/ApiRoutes'; 

export default function AllProducts() {
  const [AllProduct,setAllProduct]=useState([]);
  useEffect(()=>{
    axios.get(`http://${baseUrl2}:3000/Products/AllProducts`).then((response)=>{console.log(response.data);setAllProduct(response.data)}).catch((err)=>console.log(err))
  },[])
  const Items = [
        {
            "title":"Baby Wear",
            "price":"₹120",
            "offer":"25%",
            "img":"/baby Cloth.jpeg",
            "description":"Good and soft product for babies",
            "objectId":"/SingleProduct"
        },{
           "title":"Cooling Glass" ,
           "price":"₹20",
           "img":"/glass.png",
           "description":"Perfect looking cooling glass",
           "objectId":"/SingleProduct"
        },{
           "title":"Pack Bag" ,
           "price":"₹50",
           "offer":"30%",
           "img":"/bag.png",
           "description":"Easy to carry bags",
           "objectId":"/SingleProduct"
        },{
          "title":"Wrist Watch" ,
           "price":"₹200",
           "offer":"10%",
           "img":"/watch.png",
           "description":"Affortable and beautiful looking watches",
           "objectId":"/SingleProduct"
        },{
          "title":"Tooth Brush" ,
          "price":"₹10",
          "img":"/brush.png",
          "description":"very soft brushes for babie",
          "objectId":"/SingleProduct"
        },
        {
          "title":"Wrist Watch" ,
           "price":"₹200",
           "offer":"10%",
           "img":"/watch.png",
           "description":"Affortable and beautiful looking watches",
           "objectId":"/SingleProduct"
        },
        {
            "title":"Baby Wear",
            "price":"₹120",
            "offer":"25%",
            "img":"/baby Cloth.jpeg",
            "description":"Good and soft product for babies",
            "objectId":"/SingleProduct"
        }
    ]
  return (
    <div>
        {AllProduct.map((item,index)=>{
            return <AllProductCard key={index} title={item.Title} price={item.Price} img={item.Image[0].url} offer={item.Offer} description={item.Description} id={item._id}/>
        })}
    </div>
  )
}
