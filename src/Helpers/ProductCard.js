import React,{useState,useEffect} from 'react';
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout'
import { AiFillStar,AiFillTag,AiOutlineShoppingCart } from "react-icons/ai";
import axios from 'axios';
import {baseUrl2} from '../Api/ApiRoutes';

export default function ProductCard(props) {
 
  // const userId = JSON.parse(localStorage.getItem('userId'));
  const [AddCart,setAddCart]=useState();
  const [Products,setProducts]=useState([]);
  // const Products = new Array()

  const CreateCart = async (id)=>{
    const data = {
      userId : props.userId,
      Products:[
        {ProductId:id}
      ]
    }
    await axios.post(`${baseUrl2}/Cart/CreateCart`,data).then((res)=>{
       console.log(res.data.msg);
        fetchingStorage(res.data.Products);
        // setProducts(res.data.Products);
    }).catch((err)=>console.log(err))
  }

  const UpdateCart = async (id)=>{
    setProducts(JSON.parse(localStorage.getItem("Products")))
    // setProducts(oldProducts => [...oldProducts,{ProductId:props.id}])
    // Products.push({ProductId:props.id})
    // console.log(typeof(Products));
    console.log(Products);
     const data = {
      userId : props.userId,
      Products:Products
    }
   await axios.post(`${baseUrl2}/Cart/UpdateCart`,data).then((res)=>{
    console.log(res.data);
  }).catch((err)=>{console.log(err)})
  }

  const fetchingStorage = (data)=>{
     localStorage.setItem('Products',JSON.stringify(data));
  }
  const CartAdding = async (id)=>{
    await axios.get(`${baseUrl2}/Cart/CheckCart/${props.userId}`
    ).then((res)=>{
      var data = res.data.Products;
       if(data){
        console.log("hi")
        fetchingStorage(res.data.Products);
       }
      if(res.data.msg=="Cart not Found"){
        CreateCart(props.id);
        
      }else if(res.data.msg="Cart found"){
        UpdateCart(props.id);
      }
    }).catch((err)=>console.log(err));

  }

  const payNow = async token =>{
     await axios.post(`${baseUrl2}/Order/CreateOrder`,{
        price:props.price,
        name:props.title,
        quantity:props.quantity,
        token
     }).then((res)=>console.log(res)).catch((err)=>console.log(err));
  }
  const [CartItem,setCardItem]=useState(0);
  return (
    
    <Card className="p-0 overflow-hidden h-100 shadow" >
      <div className="overflow-hidden p-0 bg-light" style={{height:230,width:"100%",alignSelf:"center"}}>
         <Card.Img variant="top" style={{width:"100%",height:100,zIndex:1}} src={process.env.PUBLIC_URL + props.img}/>
      </div>
      <Link to={`SingleProduct/${props.id}`} style={{textDecoration:"none"}}>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex flex-column justify-content-between">
        <Card.Title className="text-truncate"  style={{fontSize:15,color:"black"}} >{props.title}</Card.Title>
        <Card.Title className="d-flex justify-content-between"  style={{fontSize:15,color:"green"}}>
          <div>
          {props.offer?
          <div className=" align-items-center">
            {props.offer?null:
            <AiFillTag color="grey" size={15}/>}
            <p style={{color:"grey",textDecoration:"line-through"}}>
            {props.price}₹
            </p>
           </div>:  
           <div className="d-flex align-items-center">
            <AiFillTag size={15}/>
            <p>
            {props.price}₹
            </p>
           </div>}
           {props.offer?
           <div className="d-flex  align-items-center">
            <AiFillTag color="black" size={15}/>
            {props.OfferPrice}₹
            </div>:null}
           </div>
           {props.offer?<div className="offer"><p style={{fontSize:11,color:"white",alignSelf:"center"}}>{props.offer}% off</p></div>:null}
             
        </Card.Title>
        </div>
        {/* <Card.Title  style={{fontSize:8,color:"green"}}>
            <AiFillStar size={20} color="orange"/>
            <AiFillStar size={20} color="orange"/>
            <AiFillStar size={20} color="orange"/>
            <AiFillStar size={20} />
        </Card.Title> */}
      </Card.Body>
      </Link>
      <div className="d-flex justify-content-around align-items-center">
           <StripeCheckout
        stripeKey="pk_test_51MfGwoSAev60aCZFmafcUUDaeRkWE6XJ5Wd94PSCwEJVpeSBDdGxePGLjhcscrVm31ZlemEcYUvipdtgKgi3ViDO00k2Hb7Dog"
        name="Pay With Card"
        currency="INR"
        // billingAddress
        // shippingAddress
        country="in"
        amount={props.OfferPrice*100}
        description={`your total amount is ₹${props.OfferPrice?props.OfferPrice:props.price}`}
        token={payNow}
        style={{width:"70%",marginBottom:10}}>
            <Button className="w-80 rounded-0" variant="primary">Buy Now</Button>
          </StripeCheckout>
        <AiOutlineShoppingCart onClick={()=>{CartAdding(props.id)}} className="w-80 rounded-0" variant="primary" color="orange" size={25}/>
      </div>
      {/* <div>
        <StripeCheckout
        stripekey="pk_test_51MfGwoSAev60aCZFmafcUUDaeRkWE6XJ5Wd94PSCwEJVpeSBDdGxePGLjhcscrVm31ZlemEcYUvipdtgKgi3ViDO00k2Hb7Dog"
        label="pay now"
        name="pay with card"
        billingAddress
        shippingAdress
        amount={props.price}
        description={`your total amount is ${props.price}`}

          />
      </div> */}
    </Card>
    
  )
}
