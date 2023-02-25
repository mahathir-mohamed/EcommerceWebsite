import React,{useEffect,useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import {baseUrl2} from '../Api/ApiRoutes';
import {Link} from 'react-router-dom';

export default function HomeBanner(props) {
    const [Banner,setBanner]=useState([]);
 useEffect(()=>{
    axios.get(`${baseUrl2}/Products/AllBanner`).then((res)=>{setBanner(res.data);console.log(res.data)}).catch((e)=>console.log(e));
  },[])
 const {innerWidth:width,innerHeight:height}=window;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000
  };
  const responsive = width>=800?Desk.Banner:Mobile.Banner;
  return (
    <Container>
    <Slider {...settings}>
      {Banner.map((item,index)=>{
        return(
        <div key={index}>
        <Link to={`/SingleProduct/${item.ProductId}`}><Image alt="slide image" src={item.Image[0].url} style={props.design?Desk.Banner:responsive}/></Link>
      </div>
      ) 
      })}

    </Slider>
    </Container>
  );
}

const Mobile={
  Banner:{
    height:200,
    width:"100%"
  }
}

const Desk ={
  Banner:{
    height:500,
    width:"100%"
  }
}