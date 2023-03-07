import React,{useEffect,useState} from 'react';
import AllProductCard from '../Helpers/AllProductCard';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {baseUrl2} from '../Api/ApiRoutes'; 
import {useParams} from 'react-router-dom';

export default function AllProducts() {
  const {Category} = useParams();
  const [AllProduct,setAllProduct]=useState([]);
  const [CatProduct,setCatProduct]=useState([]);
  useEffect(()=>{
    // console.log(Category);
    axios.get(`${baseUrl2}/Products/AllProducts`).then((response)=>{
      setAllProduct(response.data)
    }).catch((err)=>console.log(err));
  },[])
  useEffect(() => {
    var CatData = AllProduct.filter(function(data){
    return data.Category == Category;
   })
   setCatProduct(CatData);
   console.log(CatProduct)
  }, [AllProduct])
  
  return (
    <div>
        {CatProduct.map((item,index)=>{
            return <AllProductCard key={index} title={item.Title} price={item.Price} img={item.Image[0].url} offer={item.Offer} description={item.Description} id={item._id}/>
        })}
    </div>
  )
}
