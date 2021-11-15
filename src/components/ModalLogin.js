import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
 Modal,
 Form,
 Button,
 Row,
 Col
} from "react-bootstrap";

function ModalLogin({props, show, handleClose }) {
  

  return (
    <>
      
      <Modal 
      show={show} 
      onHide={handleClose}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <img src="/img/nobus_logo.png" alt="Logo" className="d-flex" height="40px" width="110px" />
        </Modal.Title>
        
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "whitesmoke" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Control type="text" placeholder="Username" />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Control type="email" placeholder="you@example.com" />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
           
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          
          <Button className="border border-light shadow round rounded-lg" type="submit">
            Submit
          </Button>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <a>Already have an account? </a>
        <a href="/" class="btn btn-primary shadow round rounded-lg ">
          <span class="small"> Login <span class="fa fa-user-circle pl-2"></span>
                </span></a>
       
        </Modal.Footer>
        
      </Modal>
    </>
  );
}

export default ModalLogin;