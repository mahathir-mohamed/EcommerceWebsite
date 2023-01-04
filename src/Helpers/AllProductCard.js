import React from 'react';
import Container from 'react-bootstrap/container';
import { AiFillStar,AiFillTag,AiOutlineShoppingCart } from "react-icons/ai";


export default function AllProductCard(props) {
  return (
    <Container>
    <div className="AllProductCard my-2 d-flex align-items-center">
        <div style={{height:"85%",width:"30%",backgroundColor:"white",borderRadius:10}} className="mx-2 my-2">
          <img style={{height:"100%",width:"100%"}} src={process.env.PUBLIC_URL+props.img}/>
        </div>
        <div style={{width:"65%",textAlign:"center"}}>
            <div className="d-flex justify-content-between">
           <h5>{props.title}</h5>
            <div>
                {props.offer?<div className="Alloffer "><p style={{fontSize:11,color:"white",padding:8}}>{props.offer}off</p></div>:null}
            </div>
           </div>
           <div className="d-flex">
            <div className="d-flex">
                 <AiFillTag color="blue" size={15}/>
                  <p style={{color:"green"}}>{props.price}</p>
            </div>
           </div>
           <div className="d-flex">
              <AiFillStar size={20} color="orange"/>
              <AiFillStar size={20} color="orange"/>
              <AiFillStar size={20} color="orange"/>
              <AiFillStar size={20} />
           </div>
           <div className="d-flex justify-content-start align-items-center overflow-hidden gap-1">
                <span style={{fontSize:12}}>description:</span>
                <span style={{fontSize:10}}>{props.description}</span>
             </div>
        </div>
    </div>
    </Container>
  )
}