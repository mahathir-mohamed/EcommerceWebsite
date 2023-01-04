import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/container';

export default function Banner() {
  const {innerWidth:width,innerHeight:height}=window;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container>
    <Slider {...settings}>
      <div style="height:300px;width:300px">
        <a href="/"><img alt="slide image" src={process.env.PUBLIC_URL+"/slide1.jpg"} style={width<=800?Mobile.Banner:Desk.Banner}/></a>
      </div>
       <div style="height:300px;width:300px">
        <a href="/"><img alt="slide image" src={process.env.PUBLIC_URL+"/slide2.jpg"} style={width<=800?Mobile.Banner:Desk.Banner}/></a>
      </div>
       <div style="height:300px;width:300px">
        <a href="/"><img alt="slide image" src={process.env.PUBLIC_URL+"/slide3.jpg"} style={width<=800?Mobile.Banner:Desk.Banner}/></a>
      </div>
      <div style="height:300px;width:300px">
        <a href="/"><img alt="slide image" src={process.env.PUBLIC_URL+"/slide2.jpg"} style={width<=800?Mobile.Banner:Desk.Banner}/></a>
      </div>
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