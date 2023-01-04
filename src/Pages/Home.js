import React from 'react';
import Banner from '../Helpers/Slider';
import ProductSlider from '../Helpers/ProductSlider';
import BannerSlider from '../Helpers/BannerSlider';
import Greeting from '../Helpers/Greeting';
import Container from 'react-bootstrap/container';

export default function Home() {
  return (
    <div>
        
         {/* <Greeting/> */}
         <Banner/>
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
