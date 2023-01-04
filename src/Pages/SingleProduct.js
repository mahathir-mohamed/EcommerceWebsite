import React from 'react';
import Banner from '../Helpers/Slider';
import Container from 'react-bootstrap/container'

export default function SingleProduct() {
    const data = [
    {"img":"/baby Cloth.jpeg"},
    {"img":"/cloth2.jpeg"},
    {"img":"/cloth3.jpg"},
    {"img":"/cloth4.jpg"}, 
  ]
  return (
    <Banner data={data} design={true} />
  )
}   
