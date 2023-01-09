import React from 'react';
import Container from 'react-bootstrap/container';
import {AiFillInfoCircle} from 'react-icons/ai';


export default function ProductDetails() {
  return (
    <Container>
    <div style={{marginTop:25,justifyContent:"center"}}>
        <div className="container d-flex justify-content-center align-items-center">
            <h5>Soft dress for 6 months old babies with soft gentle cloth and easy to wash.</h5>
        </div>
        <div className="ProductDetails">
            <div className="d-flex justify-content-between p-2 align-items-center">
                <h6>Price :</h6>
                <div>
                <h6 style={{color:"#999999",textDecoration:"line-through"}}>120$</h6>
                <i>60$</i>
                </div>
            </div>
             <div className="d-flex justify-content-between p-2">
                <h6>Discount :</h6>
                <h6 style={{color:"red"}}>50% off</h6>
            </div> 
        </div>
        <div className="ProductDetails p-2">
          <h5 style={{color:"green"}}>More Features</h5>
           <div className="d-flex justify-content-between">
               <p>Type : </p>
               <p>Cotton</p>
           </div>
           <div className="d-flex justify-content-between">
               <p>Color : </p>
               <p>MultiColor</p>
           </div>
            <div className="d-flex justify-content-between">
               <p>Pattern Available : </p>
               <p>Design and Plain</p>
           </div>
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
