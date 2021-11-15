import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons'

import {
 Navbar,
 Nav,
 Container,
 NavDropdown,
 Button
} from "react-bootstrap";

import ModalLogin from "./ModalLogin";



const Navigation = () => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 return (
   <Navbar className="px-4 mainbg fixed-top expand-lg"  variant="dark" expand="md">
    <Container fluid>
     <Navbar.Brand href="/home"><img src="/img/nobus_logo.png" alt="Logo" className="d-flex" height="40px" width="120px" /></Navbar.Brand>
     
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mx-auto" navbarScroll>         
         <NavDropdown title="Product" id="basic-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Infrastructure as a Service</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">
           Software as a Service
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Platform as a Service</NavDropdown.Item>
          
         </NavDropdown>
         <Nav.Link ><a variant="outline-light" >Pricing</a> </Nav.Link>
         <Nav.Link ><a variant="outline-light" >Solution</a> </Nav.Link>
      
         <Nav.Link ><a variant="outline-light" >Partner</a> </Nav.Link>
         <Nav.Link ><a variant="outline-light" >Support</a> </Nav.Link>
         <Nav.Link ><a variant="outline-light" >Blog</a> </Nav.Link>

       </Nav>
       
       <Nav className="">
       
      
      <Nav.Item class="pt-2" >
        <Nav.Link > <a className="text-light text-decoration-none">
        Login <span > <FontAwesomeIcon icon={faUserCircle}  /></span> 
         </a>
        
        </Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link >  <a class=" px-1 nav-link" id="log1" style={{ color: "#fff"}} > | </a>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link > <a className="btn btn-sm btn-primary-outline border border-light shadow text-light" onClick={handleShow} style= {{radius: "30px", borderRadius: "50px", color: "#fff" }}>
            Register
         </a>
         
         <ModalLogin show={show} handleClose={handleClose} onClick={handleClose} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item class="pt-2">
        <Nav.Link ><a variant="outline-light" ><FontAwesomeIcon icon={faSearch} color="white" /></a> </Nav.Link>
      </Nav.Item>
       
         
       </Nav>
       
     </Navbar.Collapse>
     </Container>
   </Navbar>

   
   
 );
};


export default Navigation;