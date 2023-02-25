import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {baseUrl2} from '../Api/ApiRoutes';
import { toast,ToastContainer } from 'react-toastify';

export function ModalScreen(props) {
  const [Title,setTitle]=useState("");
  const [Price,setPrice]=useState();
  const [Offer,setOffer]=useState();
  const [Type,setType]=useState();
  const [Material,setMaterial]=useState();
  const [Category,setCategory]=useState();
  const [Stock,setStock]=useState();
  const [Description,setDescription]=useState();
  const[image,setimage]=useState([]);

  useEffect(()=>{
    if(props.Edit==true && props.productId){
        axios.get(`${baseUrl2}/Products/ProductDetails/${props.productId}`).then((res)=>{
      console.log(res.data);
       setTitle(res.data.Title);
      setPrice(res.data.Price);
      setOffer(res.data.Offer);
      setMaterial(res.data.Material);
      setStock(res.data.Stock);
      setCategory(res.data.Category);
      setDescription(res.data.Description);
      setType(res.data.Type);
    }).catch((e)=>console.log(e))
  }else{
     EmptyState()
  }},[props.productId,props.Edit])

  const EmptyState=()=>{
      setTitle("");
      setPrice("");
      setOffer("");
      setMaterial("");
      setCategory("");
      setDescription("");
      setType("");
      setStock("");
  }

  const ButtonFunction = ()=>{
     if(props.Edit==true){
       EditProduct();
     }else{
       AddProduct();
     }
  }
  const formData = new FormData();
  useEffect(()=>{
    formData.append('Title', Title);
    formData.append('Price', Price);
    formData.append('Offer', Offer);
    formData.append('Type', Type);
    formData.append('Stock', Stock);
    formData.append('Material', Material);
    formData.append('Category', Category);
    formData.append('Description', Description);
  },[Title,Price,Offer,Type,Stock,Material,Category,Description])
  
   
  const EditProduct = async()=>{
    // console.log(formData) 
    const data={
       Title,
       Price,
       Offer,
       Type,
       Stock,
       Material,
       Category,
       Description
    }
    console.log(data)
     await axios.post(`${baseUrl2}/Products/UpdateProduct/${props.productId}`,data).then((res)=>{
      console.log(res)  
    }).catch((e)=>console.log(e))
  }
  const AddProduct = async()=>{
    console.log(formData);
     await axios.post(`${baseUrl2}/Products/AddProduct`,formData).then((res)=>{
      console.log(res);
      if(res.data.status==200){
        toast.success(res.data.msg,{position: toast.POSITION.BOTTOM_CENTER});
        // console.log("hi")
      }
    }).catch((e)=>console.log(e))
  }

  const FileHandling = (e)=>{
     for(let i=0;i<e.target.files.length;i++){
        formData.append('image',e.target.files[i]);
     }
  }

 
  return (
    <Container>
      <Modal show={props.show} onHide={()=>{props.handleClose();props.setEdit(false)}}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="d-flex justify-content-around w-100">
                   <input type="text" value={Title} placeholder="Title" onChange={(e)=>setTitle(e.target.value)} className="form-group"/>
                   <input type="number" value={Price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price" className="form-group"/> 
                </div>
                <div className="d-flex justify-content-around w-100 my-2">
                   <input type="number" onChange={(e)=>setOffer(e.target.value)} value={Offer} placeholder="Offer %" className="form-group"/>
                   <input type="number" value={Stock} onChange={(e)=>setStock(e.target.value)} placeholder="Stock Available" className="form-group"/> 
                </div>
                 <div className="d-flex justify-content-around w-100 my-2">
                   <input type="text" value={Type} onChange={(e)=>setType(e.target.value)} placeholder="Add Type" className="form-group"/>
                   <input type="text" value={Material} onChange={(e)=>setMaterial(e.target.value)} placeholder="Add Material" className="form-group"/> 
                </div>
                  <div className="d-flex justify-content-around my-2">
                   <label for="Category">Select Category :</label>
                <select  name="Category" value={Category} onChange={(e)=>setCategory(e.target.value)} id="Category">
                    <option value="Indoor Decoration">Indoor Decoration</option>
                    <option value="Baby Accessories">Baby Accessories</option>
                    <option selected value="Soft Toys">Soft Toys</option>
                    <option value="Baby Toys">Baby Toys</option>
                    <option value="Gift Products">Gift Products</option>
                 </select>
                </div>
                <div className="d-flex justify-content-around my-2">
                   <textarea style={{width:"90%"}} value={Description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Add Description" className="form-group"/>
                </div>
                 <div className="d-flex justify-content-around my-2">
                   <input onChange={(e)=>{FileHandling(e)}} type="file" placeholder="file" className="form-control bg-light" style={{width:"90%"}} multiple/>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={
            ()=>{ButtonFunction()}} >
            {props.Edit?"Update Product":"Add Product"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

// render(<Example />);