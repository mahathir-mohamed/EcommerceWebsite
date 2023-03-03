import React,{changeEvent,useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {baseUrl2} from '../Api/ApiRoutes';
import {toast,ToastContainer } from 'react-toastify';

export default function BannerModal(props) {
    const [Products,setProducts]=useState([]);
    const [Title,setTitle]=useState("");
    const [Id,setId]=useState("");
    const [image,setImage]=useState();
    
   
    const GetData = ()=>{
    axios.get(`${baseUrl2}/Products/AllProducts`).then((res)=>{
      setProducts(res.data);
    }).catch((e)=>console.log(e));
  }
    useEffect(()=>{
        GetData();
    },[])
    const formData = new FormData();
    useEffect(()=>{
        console.log(Id);
        if(Id){
        axios.get(`${baseUrl2}/Products/ProductDetails/${Id}`).then(
      (response)=>{
        setTitle(response.data.Title)
      }).catch((err)=>console.log(err));}
      formData.append('Title',Title);
      formData.append('ProductId',Id);
      // formData.append('image',image);
      // FileHandling()
    },[Id,Title])

  
   const UploadBanner = async()=>{
        // formData.append('ProductId',Id)
        await axios.post(`${baseUrl2}/Products/AddBanner`,formData).then(
            (res)=>{
                console.log(res);
                if(res.data.status==200){
                    toast.success(res.data.msg,{position:toast.POSITION.BOTTOM_CENTER});
                    // console.log("hi")
                }
                else{
                  toast.info(res.data.msg,{position:toast.POSITION.BOTTOM_CENTER});
                }
    }).catch((err)=>console.log(err))
  }
    

  const FileHandling = (e)=>{
  //   if(e.target.files[0]){
  //    for(let i=0;i<e.target.files.length;i++){
  //       formData.append('image',e.target.files[i]);
  //       console.log(e.target.files[i]);
  //    }
     
  // }
  // image.push(e.target.files[0]);
    formData.append('image',e.target.files[0]);
  
  }
  return (
    <div>
        <Modal show={props.show} onHide={()=>{props.handleClose();}}>
        <Modal.Header closeButton>
          <Modal.Title>Add Banner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                 <div className="d-flex justify-content-around my-2">
                   <input  onChange={(e)=>{FileHandling(e)}} type="file" placeholder="file" className="form-control bg-light" style={{width:"90%"}}/>
                </div>
                  <div className="d-flex justify-content-around my-2">
                   <label htmlFor="Product">Select Product :</label>
                  <select onChange={(e)=>{
                    setId(e.target.value)}} name="Product">
                    {Products?Products.map((item,index)=>{
                        return(
                            <option key={index} value ={item._id}>{item.Title}</option>
                        )
                    }):null}    
                 </select>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={()=>{UploadBanner()}}>
            {props.Edit?"Update Banner":"Add Banner"}
          </Button>
          <ToastContainer/>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </div>
  )
}
