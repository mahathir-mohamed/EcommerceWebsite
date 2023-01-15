import React,{useEffect,useState} from 'react';
import AdminHeader from './AdminHeader';
import Container from 'react-bootstrap/container';
import axios from 'axios';
import {baseUrl2} from '../Api/ApiRoutes';

export default function CustomerPage() {
  const [Cust,setCust]=useState([]);
  useEffect(()=>{
    axios.get(`${baseUrl2}/users/AllCustomer`).then((res)=>{
      console.log(res.data);
      setCust(res.data);
    }).catch((err)=>{console.log(err)});
  },[])
  return (
    <div>
      <AdminHeader/>
      <Container>
        <table style={{width:"100%"}}>
        <thead className="bg-primary">
          <tr>
            <th className="p-2 text-light">FirstName</th>
            <th className="p-2 text-light">Mobile No</th>
            <th className="p-2 text-light">Alter Mobile</th>
            <th className="p-2 text-light">State</th>
            <th className="p-2 text-light">District</th>
            <th className="p-2 text-light">Street Name</th>
            <th className="p-2 text-light">Door No</th>
            <th className="p-2 text-light">Landmark1</th>
            <th className="p-2 text-light">Landmark2</th>
          </tr>
        </thead>
        <tbody className="bg-light">
          {/* <tr>
            <td className="p-2">Mahathir</td>
            <td className="p-2">7092017605</td>
            <td className="p-2">8122235789</td>
            <td className="p-2">Tamilnadu</td>
            <td className="p-2">Ramanathapuram</td>
            <td className="p-2">East Street</td>
            <td className="p-2">2/643</td>
            <td className="p-2">Near bustand</td>
            <td className="p-2">Near mosque</td>
          </tr> */}
          {Cust.map((item,index)=>{
            return(
            <tr key={index} style={{borderBottomWidth:1}}>
            <td className="p-2">{item.FirstName}</td>
            <td className="p-2">{item.MobileNo}</td>
            <td className="p-2">{item.AlterMobileNo}</td>
            <td className="p-2">{item.Address.State}</td>
            <td className="p-2">{item.Address.District}</td>
            <td className="p-2">{item.Address.StreetName}</td>
            <td className="p-2">{item.Address.DoorNo}</td>
            <td className="p-2">{item.Address.Landmark1}</td>
            <td className="p-2">{item.Address.Landmark2}</td>
          </tr>)
          })}

        </tbody>
        </table>
      </Container>
    </div>
  )
}
