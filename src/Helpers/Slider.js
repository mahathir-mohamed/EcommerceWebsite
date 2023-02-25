import React,{useEffect,useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function Banner(props) {
    const [data,setdata]=useState([
    {"url":"https://res.cloudinary.com/doiff4svr/image/upload/v1673536347/Images/xsnpxa4nsuqxo0j5umxe.jpg"},
    {"url":"https://res.cloudinary.com/doiff4svr/image/upload/v1673536320/Images/lwsip9ouq8ksmr50kyyh.jpg"},
    {"url":"https://res.cloudinary.com/doiff4svr/image/upload/v1673536178/Images/do0izpdy216j1szs23mc.jpg"},
    {"url":"https://res.cloudinary.com/doiff4svr/image/upload/v1673536320/Images/lwsip9ouq8ksmr50kyyh.jpg"}, 
  ]);
  // useEffect(()=>{
  //  console.log(props.data)
  // },[])
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