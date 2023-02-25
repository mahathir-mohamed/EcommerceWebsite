import React,{useState,useEffect} from 'react';
import {Banner} from '../Helpers/Slider';
import ProductSlider from '../Helpers/ProductSlider';
// import BannerSlider from '../Helpers/BannerSlider';
import Greeting from '../Helpers/Greeting';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {baseUrl1,baseUrl2} from '../Api/ApiRoutes';
import HomeBanner from '../Helpers/HomeBanner';
// import {useSelector} from 'react-redux';

export default function Home() {
  // const {MobileNo,Password} = useSelector(state => state.userReducer);
   const [Products,setProducts]=useState([]);
   const [BabyAccessory,setAccessory]=useState([]);
   const [GiftProducts,setGiftProducts]=useState([]);
   const [BabyToys,setBabyToys]=useState([]);
   const [SoftToys,setSoftToys]=useState([]);
   const [IndoorDecorations,setIndoorDecoration]=useState([]);
   const [Banner,setBanner]=useState([]);
   const [image,setimage]=useState([]);

   const [data,setdata]=useState([
    {"url":"https://res.cloudinary.com/doiff4svr/image/upload/v1673536347/Images/xsnpxa4nsuqxo0j5umxe.jpg"},
    {"url":"https://res.cloudinary.com/doiff4svr/image/upload/v1673536320/Images/lwsip9ouq8ksmr50kyyh.jpg"},
    {"url":"https://res.cloudinary.com/doiff4svr/image/upload/v1673536178/Images/do0izpdy216j1szs23mc.jpg"},
    {"url":"https://res.cloudinary.com/doiff4svr/image/upload/v1673536320/Images/lwsip9ouq8ksmr50kyyh.jpg"}, 
  ]);
  useEffect(()=>{
    // console.log(MobileNo);
    axios.get(`${baseUrl2}/Products/AllProducts`).then((res)=>{
      setProducts(res.data);
      // if(res.data[0].Category=="Baby Accessories"){
      //   console.log(res.data[0].Category)
      // }
      // console.log(Products)
    }).catch((e)=>console.log(e));

    // axios.get(`${baseUrl2}/Products/AllBanner`).then((res)=>{setBanner(res.data[0].Image);console.log(res.data[0].Image)}).catch((e)=>console.log(e));

    // console.log(Banner)
    // let newImage=[];
    
      // IterateImages()
    
    
    // setimage(NewImage);
    // console.log(image)

  },[])

  useEffect(()=>{
      ProductSeperator()
  },[Products])
  // const data = 

  
//  function IterateImages(){
//       for(let i=0;i<Banner.length;i++){
//         setimage(old => [...old,Banner[i].Image[0]]);
//         // console.log(image);
//     }
    
    // return image
//  }
 function ProductSeperator(){
   var Accesories = Products.filter(function(data){
    return data.Category == "Baby Accessories";
   })
   setAccessory(Accesories);
   var SoftToys = Products.filter(function(data){
    return data.Category == "Soft Toys";
   })
   setSoftToys(SoftToys);
    var decor = Products.filter(function(data){
    return data.Category == "Indoor Decoration";
   })
   setIndoorDecoration(decor)
    var babyToys = Products.filter(function(data){
    return data.Category == "Baby Toys";
   })
   setBabyToys(babyToys);
    var Gift = Products.filter(function(data){
    return data.Category == "Gift Products";
   })
   setGiftProducts(Gift);
 }
  return (
    
    <div>
         {/* <Greeting/> */}
         
        <HomeBanner/>
        
         {/* <BannerSlider/> */}
         {/* <Banner data={data[0].url}/> */}
         <Container>
           
        <div style={{backgroundColor:'#d9d9d9'}}>
        <ProductSlider title="Baby Accessories" Products={BabyAccessory}/>
        <ProductSlider title="Gift Products" Products={GiftProducts}/>
        <ProductSlider title="Baby Toys" Products={BabyToys}/>
        <ProductSlider title="Soft Toys" Products={SoftToys}/>
        <ProductSlider title="Indoor Decoration" Products={IndoorDecorations}/>
        </div>
         </Container>
    </div>
  )
}
 
