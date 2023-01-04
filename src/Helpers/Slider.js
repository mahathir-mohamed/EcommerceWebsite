import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/container';

export default function Banner() {
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
        <a href="/"><img alt="slide image" src={process.env.PUBLIC_URL+"/slide1.jpg"} height="200px" width="100%"/></a>
      </div>
       <div style="height:300px;width:300px">
        <a href="/"><img alt="slide image" src={process.env.PUBLIC_URL+"/slide2.jpg"} height="200px" width="100%"/></a>
      </div>
       <div style="height:300px;width:300px">
        <a href="/"><img alt="slide image" src={process.env.PUBLIC_URL+"/slide3.jpg"} height="200px" width="100%"/></a>
      </div>
      <div style="height:300px;width:300px">
        <a href="/"><img alt="slide image" src={process.env.PUBLIC_URL+"/slide2.jpg"} height="200px" width="100%"/></a>
      </div>
    </Slider>
    </Container>
  );
}