import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/container';
import Image from 'react-bootstrap/Image';

export default function Banner(props) {
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
      {props.data.map((item,index)=>{
        return(
        <div key={index} >
        <a href="/SingleProduct"><Image alt="slide image" src={item.url} style={props.design?Desk.Banner:responsive}/></a>
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