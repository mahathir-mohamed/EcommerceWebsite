import React from 'react';
import AllProductCard from '../Helpers/AllProductCard';
import Container from 'react-bootstrap/container'

export default function AllProducts() {
  const Items = [
        {
            "title":"Baby Wear" ,
            "price":"₹120",
            "offer":"25%",
            "img":"/baby Cloth.jpeg",
            "description":"Good and soft product for babies"
        },{
           "title":"Cooling Glass" ,
           "price":"₹20",
           "img":"/glass.png",
           "description":"Perfect looking cooling glass"
        },{
           "title":"Pack Bag" ,
           "price":"₹50",
           "offer":"30%",
           "img":"/bag.png",
           "description":"Easy to carry bags"
        },{
          "title":"Wrist Watch" ,
           "price":"₹200",
           "offer":"10%",
           "img":"/watch.png",
           "description":"Affortable and beautiful looking watches"
        },{
          "title":"Tooth Brush" ,
          "price":"₹10",
          "img":"/brush.png",
          "description":"very soft brushes for babie"
        }
    ]
  return (
    <div>
        {Items.map((item,index)=>{
            return <AllProductCard key="index" title={item.title} price={item.price} img={item.img} offer={item.offer} description={item.description}/>
        })}
    </div>
  )
}