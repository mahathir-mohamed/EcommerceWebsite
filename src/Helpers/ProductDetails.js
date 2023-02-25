import React from 'react';
import Container from 'react-bootstrap/Container';
import {AiFillInfoCircle} from 'react-icons/ai';


export default function ProductDetails(props) {
  return (
    <Container>
    <div style={{marginTop:25,justifyContent:"center"}}>
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5>{props.Product.Title}</h5>
            <p>{props.Product.Description}</p>
        </div>
        <div className="ProductDetails">
            <div className="d-flex justify-content-between p-2 align-items-center">
                <h6>Price :</h6>
                <div>
                <h6 style={props.Product.OfferPrice?OfferPrice:Price}>{props.Product.Price}₹</h6>
                {props.Product.OfferPrice?<i>{props.Product.OfferPrice}₹</i>:null}
                
                </div>
            </div>
            {props.Product.Offer?
             <div className="d-flex justify-content-between p-2">
                <h6>Discount :</h6>
                <h6 style={{color:"red"}}>{props.Product.Offer}% off</h6>
            </div>:null} 
        </div>
        <div className="ProductDetails p-2">
          <h5 style={{color:"green"}}>More Features</h5>
          {props.Product.Material?
           <div className="d-flex justify-content-between">
               <p>Type : </p>
               <p>{props.Product.Material}</p>
           </div>:null}
           {props.Product.Type?
           <div className="d-flex justify-content-between">
               <p>Color : </p>
               <p>MultiColor</p>
           </div>:null}
           {props.Product.Stock?
            <div className="d-flex justify-content-between">
               <p>Stock Available : </p>
               <p>{props.Product.Stock}</p>
           </div>:null}
        </div>
        <div style={{backgroundColor:"#ff6666",borderRadius:5}} className="d-flex justify-content-between align-items-center my-2 p-2">
          <AiFillInfoCircle size={20}/>
          <div>
            Only online payment method is available.
          </div>
        </div>
    </div>
    </Container> 
  )
}

const OfferPrice = {
   color:"#999999",
   textDecoration:"line-through"
}

const Price = {
   color:'green'
}