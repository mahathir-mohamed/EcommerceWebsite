import React from 'react';
import Banner from '../Helpers/Slider';
import ProductSlider from '../Helpers/ProductSlider';
import BannerSlider from '../Helpers/BannerSlider';
import Greeting from '../Helpers/Greeting';
import Container from 'react-bootstrap/container';

export default function Home() {
   const data = [
    {"img":"/slide1.jpg"},
    {"img":"/slide2.jpg"},
    {"img":"/slide3.jpg"},
    {"img":"/slide2.jpg"}, 
  ]
  return (
    <div>
         {/* <Greeting/> */}
         <Banner data={data}/>
         {/* <BannerSlider/> */}
         <Container>
        <div style={{backgroundColor:'#d9d9d9'}}>
        <ProductSlider title="Baby Accessories"/>
        <ProductSlider title="Gift Products"/>
        <ProductSlider title="Baby Toys"/>
        </div>
         </Container>
    </div>
  )
}
