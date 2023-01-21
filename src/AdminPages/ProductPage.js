import React,{useEffect,useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import AdminHeader from '../AdminPages/AdminHeader';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {baseUrl2} from '../Api/ApiRoutes';
import { AiFillDelete,AiTwotoneEdit } from "react-icons/ai";
import {ModalScreen} from '../AdminHelpers/ModalScreen';
import { toast,ToastContainer } from 'react-toastify';

export default function ProductPage() {
  const [show, setShow] = useState(false);

  const [Edit,setEdit]=useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Product,setProduct]=useState([]); 
  const [cookies,setCookie,removeCookie] = useCookies(['Token','Auth']);
  const [productId,setProductId] = useState();
  useEffect(()=>{
     axios.get(`${baseUrl2}/Products/AllProducts`).then((res)=>{
       console.log(res.data);
       setProduct(res.data);
     }).catch((err)=>{console.log(err)})
  },[])

  const EditProduct = async(id)=>{
        handleShow()
        setEdit(true);    
        setProductId(id);
  }
   const DeleteProduct = async(id)=>{
      await axios.get(`${baseUrl2}/Products/DeleteProduct/${id}`).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
  }

  const navigate = useNavigate();
  return (
    <div>
      <AdminHeader/>
      <Container>
         <div className="d-flex justify-content-end py-3">
            <input type="button" value="Add Product" className="btn btn-primary" onClick={()=>{handleShow();setEdit(false)}}/>
         </div>
         <Container>
         <div>
            <table style={{width:"100%"}}>
               <tr  className="bg-primary">
                 <th className="p-2 text-light">Product Name</th>
                 <th  className="p-2 text-light">Price</th>
                 <th  className="p-2 text-light">Offer</th>
                 <th  className="p-2 text-light">OfferPrice</th>
                 <th  className="p-2 text-light">Stock</th>
                 <th  className="p-2 text-light">Edit</th>
                 <th  className="p-2 text-light">Delete</th>
                 
               </tr>
               {Product.map((item,index)=>{
                 return (
                  <tbody key={index}>
                   <tr className="bg-light" >
                     <td className="p-2">{item.Title}</td>
                     <td className="p-2">₹{item.Price}</td>
                     <td className="p-2">{item.Offer?`${item.Offer}%`:"Nill"}</td>
                     <td className="p-2">{item.OfferPrice?`₹${item.OfferPrice}`:"Nill"}</td>
                     <td className="p-2">{item.Stock?item.Stock:"Nill"}</td>
                     <td className="p-2"><AiTwotoneEdit onClick={()=>EditProduct(item._id)} size={20}/></td>
                     <td className="p-2"><AiFillDelete color="red" onClick={()=>DeleteProduct(item._id)} size={20}/></td>
                   </tr>
                   </tbody>
                   )
               })}
            </table>
         </div>
         </Container>
         <ModalScreen show={show} Edit={Edit} productId={productId} handleShow={handleShow} handleClose={handleClose}/>
      </Container>
    </div>
  )
}
