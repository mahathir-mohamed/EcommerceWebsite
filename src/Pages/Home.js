import React,{useState,useEffect} from 'react';
import Banner from '../Helpers/Slider';
import ProductSlider from '../Helpers/ProductSlider';
import BannerSlider from '../Helpers/BannerSlider';
import Greeting from '../Helpers/Greeting';
import Container from 'react-bootstrap/container';
import axios from 'axios';
import {baseUrl1,baseUrl2} from '../Api/ApiRoutes';

export default function Home() {
   const [Products,setProducts]=useState([]);
   const [Banner,setBanner]=useState([]);
   const [image,setimage]=useState([]);
  useEffect(()=>{
    axios.get(`http://${baseUrl2}:3000/Products/AllProducts`).then((res)=>{setProducts(res.data)}).catch((e)=>console.log(e));

    axios.get(`http://${baseUrl2}:3000/Products/AllBanner`).then((res)=>{setBanner(res.data)}).catch((e)=>console.log(e));

    // console.log(Banner)
    // let newImage=[];
    
      IterateImages()
    
    
    // setimage(NewImage);
    // console.log(image)

  },[])
  const data = [
    {"url":"https://res.cloudinary.com/doiff4svr/image/upload/v1673536347/Images/xsnpxa4nsuqxo0j5umxe.jpg"},
    {"url":"https://res.cloudinary.com/doiff4svr/image/upload/v1673536320/Images/lwsip9ouq8ksmr50kyyh.jpg"},
    {"url":"https://res.cloudinary.com/doiff4svr/image/upload/v1673536178/Images/do0izpdy216j1szs23mc.jpg"},
    {"url":"https://res.cloudinary.com/doiff4svr/image/upload/v1673536320/Images/lwsip9ouq8ksmr50kyyh.jpg"}, 
  ]

  
 function IterateImages(){
      for(let i=0;i<Banner.length;i++){
        setimage(old => [...old,Banner[i].Image[0]]);
        console.log(image);
    }
    
    // return image
 }
  // const [Products,setProducts]=useState([
  //       {
  //           "title":"Baby Wear" ,
  //           "price":"₹120",
  //           "offer":"25%",
  //           "img":"/baby Cloth.jpeg",
  //           "objectId":"/SingleProduct"
  //       },{
  //          "title":"Cooling Glass" ,
  //          "price":"₹20",
  //          "img":"/glass.png",
  //          "objectId":"/SingleProduct"
  //       },{
  //          "title":"Pack Bag" ,
  //          "price":"₹50",
  //          "offer":"30%",
  //          "img":"/bag.png",
  //          "objectId":"/SingleProduct"
  //       },{
  //         "title":"Wrist Watch" ,
  //          "price":"₹200",
  //          "offer":"10%",
  //          "img":"/watch.png",
  //          "objectId":"/SingleProduct"
  //       },{
  //         "title":"Tooth Brush" ,
  //         "price":"₹10",
  //         "img":"/brush.png",
  //         "objectId":"/SingleProduct" 
  //       },
  //       {
  //         "title":"Tooth Brush" ,
  //         "price":"₹10",
  //         "img":"/brush.png",
  //         "objectId":"/SingleProduct" 
  //       },
  //       {
  //         "title":"Tooth Brush" ,
  //         "price":"₹10",
  //         "img":"/brush.png",
  //         "objectId":"/SingleProduct" 
  //       }
  //   ])
  return (
    <div>
         {/* <Greeting/> */}
         
         {/* <Banner/> */}
        
         {/* <BannerSlider/> */}
         <Container>
          {Products?
        <div style={{backgroundColor:'#d9d9d9'}}>
        <ProductSlider title="Baby Accessories" Products={Products}/>
        <ProductSlider title="Gift Products" Products={Products}/>
        <ProductSlider title="Baby Toys" Products={Products}/>
        <ProductSlider title="Soft Toys" Products={Products}/>
        <ProductSlider title="Indoor Decoration" Products={Products}/>
        </div>:null}
         </Container>
    </div>
  )
}
 
