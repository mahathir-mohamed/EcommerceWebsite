import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/container';
import { toast,ToastContainer } from 'react-toastify';
import {baseUrl1,baseUrl2} from '../Api/ApiRoutes';
import {useSelector,useDispatch} from 'react-redux';
import {setMobileNo,setPassword} from  '../redux/actions';
import AdminRoute from '../Routes/AdminRoutes';

export default function Login() {
  const navigate = useNavigate();
  // const {MobileNo,Password} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['Token','Auth']);
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

  
  const AdminCheck = ()=>{
     if(MobileNo == "7092017605" && Password=="pass123")
     {setCookie("Auth",true);
     window.location.reload(false)}
     else{
      CheckLogin();
    }
  }
  const CheckLogin = async ()=>{
    const data={MobileNo,Password};
    await axios.post(`${baseUrl2}/users/AuthLogin`,data).then((response)=>{
      if(response.status==202){
            toast.info(response.data.msg,{position: toast.POSITION.BOTTOM_CENTER});   
        }else{
            toast.success(response.data.msg,{position: toast.POSITION.BOTTOM_CENTER});
            setTimeout(() => {
              window.location.reload(false); 
            }, 200);
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
               <input className="form-control" type="Number" style={{width:"100%"}} required placeholder="+91 Mobile Number"  onChange={e=>dispatch(setMobileNo(e.target.value))}/>
             </div>
             <div className="col-sm-5 col-lg-12">
               <input class="form-control" type="password" style={{width:"100%"}} required placeholder="Password"   onChange={e => dispatch(setPassword(e.target.value))}/>
             </div>
          </div>
          <div>
             <input type="button" class="col-11 mx-3 btn btn-primary" value="Login" disabled={Disabled} onClick={AdminCheck}/>
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
