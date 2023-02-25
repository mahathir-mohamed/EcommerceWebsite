import React,{useState} from 'react';
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { AiFillStar,AiFillTag,AiOutlineShoppingCart } from "react-icons/ai";

export default function ProductCard(props) {
  const [CartItem,setCardItem]=useState(0);
  return (
    <Link to={`SingleProduct/${props.id}`} style={{textDecoration:"none"}}>
    <Card className="p-0 overflow-hidden h-100 shadow" >
      <div className="overflow-hidden p-0 bg-light" style={{height:230,width:"100%",alignSelf:"center"}}>
         <Card.Img variant="top" style={{width:"100%",height:100,zIndex:1}} src={process.env.PUBLIC_URL + props.img}/>
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex flex-column justify-content-between">
        <Card.Title className="text-truncate"  style={{fontSize:15,color:"black"}} >{props.title}</Card.Title>
        <Card.Title className="d-flex justify-content-between"  style={{fontSize:15,color:"green"}}>
           <div className="d-flex  align-items-center">
            <AiFillTag color="black" size={15}/>
            {props.price}₹
           </div>
           {props.offer?<div className="offer"><p style={{fontSize:11,color:"white",alignSelf:"center"}}>{props.offer}% off</p></div>:null}
             
        </Card.Title>
        </div>
        <Card.Title  style={{fontSize:8,color:"green"}}>
            <AiFillStar size={20} color="orange"/>
            <AiFillStar size={20} color="orange"/>
            <AiFillStar size={20} color="orange"/>
            <AiFillStar size={20} />
        </Card.Title>
      </Card.Body>
      <div className="d-flex justify-content-around align-items-center">
        <Button className="w-80 rounded-0" variant="primary">Buy Now</Button>
        <AiOutlineShoppingCart onClick={()=>{alert("Total Items:" + CartItem);setCardItem(CartItem+1);}} className="w-80 rounded-0" variant="primary" color="orange" size={25}/>
      </div>
    </Card>
    </Link>
  )
}
