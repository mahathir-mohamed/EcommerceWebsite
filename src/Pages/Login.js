import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/container';
import { toast,ToastContainer } from 'react-toastify';
import {baseUrl1,baseUrl2} from '../Api/ApiRoutes';


export default function Login() {
  // const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['Token']);
  const [MobileNo,setMobileNo]=useState();
  const [Password,setPassword]=useState();
  const [Disabled,setDisabled]=useState(true);
  useEffect(()=>{
    if(MobileNo && Password){
      setDisabled(false);
    }else{
      setDisabled(true);
    }
  },[MobileNo,Password])

  const CheckLogin = async ()=>{
    const data={MobileNo,Password}
    // alert(Password);
    await axios.post(`http://${baseUrl2}:3000/users/AuthLogin`,data).then((response)=>{
      if(response.status==202){
            toast.info(response.data.msg,{position: toast.POSITION.BOTTOM_CENTER});   
        }else{
            toast.success(response.data.msg,{position: toast.POSITION.BOTTOM_CENTER})
            localStorage.setItem('userId',JSON.stringify(response.data.userId))
            setCookie('Token', response.data.Token, { path: '/' });
            // navigate('/',{ replace: true });
        }
    }).catch((err)=>console.log(err))
  }
  return (
    <Container className="col-lg-5">
       <div className="my-5 p-3 p-lg-2" style={{width:"100%",backgroundColor:"#cccccc",borderRadius:10}}>
         <div className="d-flex justify-content-center my-2">
            <h4>Login</h4>
         </div>
         <div className="d-flex flex-column p-3 justify-content-center ">
             <div className="col-sm-5 col-lg-12 justify-content-center my-2">
               <input className="form-control" type="Number" style={{width:"100%"}} required placeholder="+91 Mobile Number"  onChange={e=>setMobileNo(e.target.value)}/>
             </div>
             <div className="col-sm-5 col-lg-12">
               <input class="form-control" type="password" style={{width:"100%"}} required placeholder="Password"   onChange={e => setPassword(e.target.value)}/>
             </div>
          </div>
          <div>
             <input type="button" class="col-11 mx-3 btn btn-primary" value="Login" disabled={Disabled} onClick={CheckLogin}/>
          </div>
          <div className="mx-3 my-1">
             <p>New Customer? <span><a href="/SignUp" style={{textDecoration:'none'}} className="text-primary" >Register</a></span></p>
          </div>
       </div>
        <div>
               <ToastContainer/>
            </div>
    </Container>
  )
}
