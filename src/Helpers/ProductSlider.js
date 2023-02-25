import React,{useState,useEffect} from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
import{FreeMode} from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';
import Container from 'react-bootstrap/Container';
import {useNavigate} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';



export default function ProductSlider(props) {
  useEffect(()=>{
   setProduct(props.Products);

  //  setCat(Product[0].Category);
  //  console.log(Cat)  
  },[])
    const [Product,setProduct]=useState([]);
    const [Cat,setCat]=useState()
    const navigate = useNavigate();
    const {innerWidth:width,innerHeight:height}=window;
    const [Index,setIndex]=useState(0);
  return (
       <div className="container py-4 px-2 justify-content-center">
        {props.Products?
        <div>
        <Container className="d-flex justify-content-between">
            <div><h1 style={width<=600?mobileEdition.TitleBar:DeskEdition.TitleBar}>{props.title}</h1></div>
            <div><a href={`/AllProducts/${props.title}`} style={{textDecoration:"none"}}>See More</a>
            </div>
        </Container>
        <Swiper freeMode={true} grabCursor={true} spaceBetween={30} modules={[FreeMode]} className="mySwiper" slidesPerView={5} onSlideChange={()=>{console.log(Index)}}
        onSwiper={(swiper)=>{setIndex(Index+1)}}
        breakpoints={breakpointValues}
        >
            {props.Products.slice(0,5).map((data,index)=>(
            <SwiperSlide key={index} style={{height:250,width:280}}>
                <ProductCard title={data.Title} price={data.Price} offer={data.Offer} OfferPrice={data.OfferPrice} img={data.Image[0].url} id={data._id} />
            </SwiperSlide>
            ))}
        </Swiper></div>:<Spinner animation="border" size="lg"/>}
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
