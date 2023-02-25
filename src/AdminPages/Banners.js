import React,{useState,useEffect} from 'react';
import AdminHeader from '../AdminPages/AdminHeader';
import Container from 'react-bootstrap/Container';
import { AiFillDelete,AiTwotoneEdit } from "react-icons/ai";
import BannerModal from '../AdminHelpers/BannerModal';
import axios from 'axios';
import {baseUrl2} from '../Api/ApiRoutes';

export default function Banners() {
  const [Data,setData]=useState([]);
  useEffect(()=>{
    axios.get(`${baseUrl2}/Products/AllBanner`).then((res)=>{
      setData(res.data);
      console.log(res.data)
    }).catch((err)=>{console.log(err)});
  },[])
    const [show, setShow] = useState(false);
    const [Edit, setEdit] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Title,setTitle]=useState("");
    const [Image,setImage]=useState([]);
    var formData = new FormData();
    // formData.append('',)
    const uploadImage= async()=>{
       await axios.post(`${baseUrl2}/Products/AddBanner`,formData).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
    }
  return (
    <div>
        <AdminHeader/>
        <Container>
          <div className="d-flex justify-content-end py-3">
             <input type="button" className="btn btn-primary" value="Add Banner" onClick={()=>{handleShow();setEdit(false)}}/>
          </div>
          <div>
            <table>
                <thead>
                    <tr style={{borderWidth:1,padding:5,marginBottom:2,borderColor:"grey"}} className="bg-primary">
                        <th className="p-2 col-6 text-light">Image</th>
                        <th className="p-2 col-4 text-light">Product Name</th>
                        <th className="p-2 col-2 text-light">Edit</th>
                        <th className="p-2 col-2 text-light">Delete</th>
                    </tr>
                </thead>
                <tbody>
                      {Data.map((data,index)=>{
                        return(
                          <tr style={{borderWidth:1,padding:5,marginBottom:2,borderColor:"grey"}}>
                            <td key={index} >
                              <img src={`${data.Image[0].url}`} style={{height:50,width:100}}/>

                            </td>
                            <td>{data.Title}</td>
                            <td className="p-2"><AiTwotoneEdit  size={20}/></td>
                            <td className="p-2"><AiFillDelete color="red"  size={20}/></td>
                   

                        </tr>
                        )
                      })}
                    
                </tbody>
            </table>
          </div>
        </Container>
        <BannerModal show={show} handleClose={handleClose} handleShow={handleShow}/>  
    </div>
  )
}
