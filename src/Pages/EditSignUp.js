import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/container';
// import PhoneInput from 'react-phone-number-input';
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

import {baseUrl1,baseUrl2} from '../Api/ApiRoutes';

import { toast,ToastContainer } from 'react-toastify';

// toast.configure()
export default function EditSignUp() {
  
  // const [value, setValue] = useState();
  const {handleSubmit,formState:{errors},control} = useForm();

  const [Validate,setValidate] = useState(true);
  const [User,setUser]=useState();
  const [UserId,setUserId]=useState();
 
  const [FirstName,setFirstName]=useState();
  const [LastName,setLastName]=useState();
  const [ConfirmPassword,setConfirmPassword]=useState();
  const [Password,setPassword]=useState();
  const [StreetName,setStreetName]=useState();
  const [City,setCity]=useState();
  const [Pincode,setPincode]=useState();
  const [MobileNo,setMobileNo]=useState();
  const [AlterMobileNo,setAlterMobileNo]=useState();
  const [District,setDistrict]=useState();
  const [State,setState]=useState();
  const [DoorNo,setDoorNo]=useState();
  const [Landmark1,setLandmark1]=useState();
  const [Landmark2,setLandmark2]=useState();

  const [Loading,setLoading]=useState(false);

//   const onSubmit = (data) => {
//   //  console.log({data});
//  };
useEffect(()=>{
  
    setUserId(JSON.parse(localStorage.getItem('userId')))
    console.log(UserId);
    // console.log(UserId);
    axios.get(`http://${baseUrl2}:3000/users/CustomerDetail/${JSON.parse(localStorage.getItem('userId'))}`).then((response)=>{
    if(response.status=200){
       console.log(response.data);
       setFirstName(response.data.FirstName);
       setLastName(response.data.LastName);
       setState(response.data.Address.State);
       setDistrict(response.data.Address.District);
       setStreetName(response.data.Address.StreetName);
       setCity(response.data.Address.City);
       setPincode(response.data.Address.Pincode);
       setMobileNo(response.data.MobileNo);
       setAlterMobileNo(response.data.AlterMobileNo);
       setDoorNo(response.data.Address.DoorNo);
       setLandmark1(response.data.Address.Landmark1);
       setLandmark2(response.data.Address.Landmark2);

      }
   }).catch((err)=>console.log(err))
},[])
useEffect(()=>{
  if(FirstName && LastName && StreetName && City && Pincode &&  District && State&&DoorNo&&Landmark1 && Landmark2 && MobileNo && AlterMobileNo){
   setValidate(false);
}else{
  setValidate(true);
}
},[FirstName, LastName, ConfirmPassword, Password, StreetName, City, Pincode, District,AlterMobileNo,State, DoorNo, Landmark1, Landmark2])

 const UpdateCustomer = async ()=>{
  const data = {
     FirstName,
     LastName,
     MobileNo,
     Address:{
        District,
        State,
        Landmark1,
        Landmark2,
        City,
        Pincode,
        DoorNo,
        StreetName,
     },
     AlterMobileNo
   }

   await axios.post(`http://${baseUrl2}:3000/users/update/${JSON.parse(localStorage.getItem('userId'))}`,data).then((response)=>{
        // toast(response.data.msg)
        if(!response){
          setLoading(true);
        }else{
          setLoading(false);
        }
        if(response.status==202){
            toast.info(response.data.msg,{position: toast.POSITION.BOTTOM_CENTER})
        }else{
            toast.success(response.data.msg,{position: toast.POSITION.BOTTOM_CENTER})
        }
   }).catch((err)=>console.log(err))
 }
//  const handleValidate = (MobileNo) => {
//    const isValid = isValidPhoneNumber(MobileNo);
//    console.log({ isValid })
//    return isValid
//  }
  return (
    <Container>
       <div className="SignupDiv my-2" style={{width:"100%",backgroundColor:"#cccccc",borderRadius:10}}>
        <div className="d-flex justify-content-center py-2">
           <h4>Update user</h4>
        </div>
        <form>
        {/*FirstName & lastName div*/}
          <div className="d-flex p-3 justify-content-center">
             <div className="col-sm-5 mx-2">
               <input readOnly={false} value={FirstName} class="form-control" type="text" style={{width:"100%"}} required placeholder="First Name" name="FirstName"  onChange={e=>setFirstName(e.target.value)}/>
             </div>
             <div className="col-sm-5">
               <input class="form-control" type="text" style={{width:"100%"}} required placeholder="Last Name" name="LastName" value={LastName}  onChange={e => setLastName(e.target.value)}/>
             </div>
          </div>
          {/*Password & Confirm Password div*/}
          {/* <div className="d-flex p-3 justify-content-center">
             <div className="col-sm-5 mx-2 ">
               <input class="form-control" required type="Password" style={{width:"100%"}} placeholder="Password" value={User.Password} name="Password"  onChange={e => setPassword(e.target.value)}/>
             </div>
             <div className="col-sm-5">
               <input class="form-control" required type="Password" style={{width:"100%"}} placeholder="Confirm Password" value={User.FirstName}  onChange={e => setConfirmPassword(e.target.value)} name="Confirm Password"/>
             </div>
          </div> */}
         {/*District & State div*/}
        <div className="d-flex p-3 justify-content-center">
             <div className="col-sm-5 mx-2">
               <input class="form-control" required type="text" style={{width:"100%"}}  onChange={e => setState(e.target.value)} value={State} placeholder="State" name="State"/>
             </div>
             <div className="col-sm-5">
               <input class="form-control" required type="text" style={{width:"100%"}} placeholder="District" name="District" value={District}  onChange={e => setDistrict(e.target.value)}/>
             </div>
          </div>
         {/*Village/City Name & Pincode div*/}
        <div className="d-flex p-3 justify-content-center">
             <div className="col-sm-5 mx-2">
               <input class="form-control"  required type="number" value={Pincode} style={{width:"100%"}} placeholder="Pincode" name="Pincode"  onChange={e => setPincode(e.target.value)}/>
             </div>
             <div className="col-sm-5">
               <input class="form-control" value={City} required type="text" style={{width:"100%"}} placeholder="Village/City Name" name="City Name"   onChange={e => setCity(e.target.value)}/>
             </div>
          </div>
         {/*Door No & Street Name div*/}
           <div className="d-flex p-3 justify-content-center">
             <div className="col-sm-5 mx-2">
               <input class="form-control" value={DoorNo} required type="text" style={{width:"100%"}} placeholder="Door No" name="DoorNo"  onChange={e => setDoorNo(e.target.value)}/>
             </div>
             <div className="col-sm-5">
               <input class="form-control" value={StreetName} required type="text" style={{width:"100%"}} placeholder="StreetName" name="StreetName"   onChange={e => setStreetName(e.target.value)}/>
             </div>
          </div>

         {/*Landmark1 & Landmark2 div*/}
         <div className="d-flex p-3 justify-content-center">
             <div className="col-sm-5 mx-2">
               <input class="form-control" value={Landmark1} required type="text" style={{width:"100%"}}  placeholder="Landmark 1" name="Landmark1"  onChange={e => setLandmark1(e.target.value)}/>
             </div>
             <div className="col-sm-5">
               <input class="form-control" type="text" style={{width:"100%"}} value={Landmark2}  placeholder="Landmark 2" name="Landmark2"  onChange={e => setLandmark2(e.target.value)}/>
             </div>
          </div>
          {/*Mobile Number Field*/}
          {/* <div className="d-flex mx-lg-5 col-sm-5 col-lg-10 mx-3 p-2 justify-content-center">
            <input className="col-11 mx-lg-5 form-control" type="number" placeholder="+91 Mobile Number" minLength="10" name="MobileNo" onChange={e=> setMobileNo(e.target.value)}/>
          </div> */}
          {/* <div className="d-flex col-12  p-2 justify-content-center">
              <input type="number" placeholder="+91 Mobile Number" minLength="10" onChange={e=>setMobileNo(e.target.value)} class="col-11 form-control  mx-lg-5 col-lg-6"/>
            </div> */}
            {/*MobileNumber and Alter Mobile number div */}
            <div className="d-flex p-3 justify-content-center">
             <div className="col-sm-5 mx-2">
               <input class="form-control" required type="number" style={{width:"100%"}} placeholder="Mobile Number" value={MobileNo} name="Mobile Number"  onChange={e => setMobileNo(e.target.value)}/>
             </div>
             <div className="col-sm-5">
               <input class="form-control" type="number" style={{width:"100%"}} placeholder="Alternate Mobile Number" name="Alternate Mobile Number" value={AlterMobileNo}  onChange={e => setAlterMobileNo(e.target.value)}/>
             </div>
          </div>
          {/*Button Container*/}
           <div className="d-flex col-12  p-2 justify-content-center">

            {!Loading? <input type="button" onClick={UpdateCustomer}  disabled={Validate} value="Update" class="col-11 btn btn-primary mx-lg-5 col-lg-6"/>:<p>Loading ....</p>}
            </div>
            <div>
               <ToastContainer/>
            </div>
         </form>
          
       </div>
    </Container>
  )
}
