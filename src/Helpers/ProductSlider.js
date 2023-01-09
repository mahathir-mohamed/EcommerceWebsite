import React,{useState} from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
import{FreeMode} from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';



export default function ProductSlider(props) {
    const {innerWidth:width,innerHeight:height}=window;
    const [Index,setIndex]=useState(0);
    const [Products,setProducts]=useState([
        {
            "title":"Baby Wear" ,
            "price":"₹120",
            "offer":"25%",
            "img":"/baby Cloth.jpeg",
            "objectId":"/SingleProduct"
        },{
           "title":"Cooling Glass" ,
           "price":"₹20",
           "img":"/glass.png",
           "objectId":"/SingleProduct"
        },{
           "title":"Pack Bag" ,
           "price":"₹50",
           "offer":"30%",
           "img":"/bag.png",
           "objectId":"/SingleProduct"
        },{
          "title":"Wrist Watch" ,
           "price":"₹200",
           "offer":"10%",
           "img":"/watch.png",
           "objectId":"/SingleProduct"
        },{
          "title":"Tooth Brush" ,
          "price":"₹10",
          "img":"/brush.png",
          "objectId":"/SingleProduct" 
        },
        {
          "title":"Tooth Brush" ,
          "price":"₹10",
          "img":"/brush.png",
          "objectId":"/SingleProduct" 
        },
        {
          "title":"Tooth Brush" ,
          "price":"₹10",
          "img":"/brush.png",
          "objectId":"/SingleProduct" 
        }
    ])
  return (
       <div className="container py-4 px-2 justify-content-center">
        <Container className="d-flex justify-content-between">
            <div><h1 style={width<=600?mobileEdition.TitleBar:DeskEdition.TitleBar}>{props.title}</h1></div>
            <div><Link to="/AllProducts"><h1 style={{color:"blue",fontSize:15}}>See More</h1></Link>
            </div>
        </Container>
        <Swiper freeMode={true} grabCursor={true} spaceBetween={30} modules={[FreeMode]} className="mySwiper" slidesPerView={5} onSlideChange={()=>{console.log(Index)}}
        onSwiper={(swiper)=>{setIndex(Index+1)}}
        breakpoints={breakpointValues}
        >
            {Products.slice(0,5).map((data,index)=>(
            <SwiperSlide key={index} style={{height:250,width:280}}>
                <ProductCard title={data.title} price={data.price} offer={data.offer} img={data.img} id={data.objectId} />
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
  )
}
  const breakpointValues={
      0:{slidesPerView:2,spaceBetween:10,},
      480:{slidesPerView:3,spaceBetween:15},
      768:{slidesPerView:5,spaceBetween:30}
  }
  const mobileEdition={
        TitleBar:{
           fontSize:20,
           fontWeight:"bold",
        }
    }
    const DeskEdition = {
        TitleBar:{
           fontSize:30,
           fontWeight:"bold"
        }
    }
