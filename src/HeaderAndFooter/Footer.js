import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router';
import {AiFillFacebook,AiFillInstagram} from 'react-icons/ai';

export default function Footer() {
  return (
    <Container>
      <div className="bg-dark d-flex align-items-center justify-content-center" style={{height:100}}>
        <Row className="d-flex flex-row">
            <Col><p style={{color:"white",marginLeft:10,fontSize:15,textAlign:"center"}}>All Rights Reserved By  @ArhamBabyWorld</p></Col>
            <Col className="d-flex flex-row justify-content-sm-center"><p style={{color:"white"}}>follow us on</p>
            <div>
            <a href="/Home" ><AiFillFacebook size={25} color="blue"/></a>
            <a href="/Home" ><AiFillInstagram size={25} color="red"/></a>
            </div>
            </Col>
        </Row>
        </div>
    </Container>
  )
}

