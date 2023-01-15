import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom';


export default function AdminHeader() {
  const [cookies,setCookie,removeCookie] = useCookies(['Token']);
  // const navigate = useNavigate();
  function LogOut(){
     removeCookie('Auth');
     window.location.reload(false)
    //  navigate('/',{replace:true})
  }
  const {innerHeight:height,innerWidth:width} = window;
  return (
    <Container>
    <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
      <div>
        <Navbar.Brand href="/" className="d-flex justify-content-between px-3">
             {/* <img style={height<=800?Mobile.logoSize:Desk.logoSize} src={process.env.PUBLIC_URL + '/logo.jpeg'} />  */}
             <p style={height<=800?Mobile.logoSize:Desk.logoSize}>Store Dashboard</p>
        </Navbar.Brand>
      </div>
      <div> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto px-sm-5">
            <Nav.Link href="/">Products</Nav.Link>
            {/* <Nav.Link href="/SignUp">SignUp</Nav.Link> */}
            <Nav.Link href="/CustomerList">Customers</Nav.Link>
            <Nav.Link href="/OrderList">Orders</Nav.Link>
            <Nav.Link onClick={()=>{LogOut()}} className="btn btn-danger p-2 text-light">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
     
    </Navbar>
     </Container>
  )
}

const Mobile={
    logoSize:{
        heigth:"60px",
        width:"120px"
    }
}
const Desk = {
    logoSize:{
        height:"80px",
        width:"200px"
    }
}