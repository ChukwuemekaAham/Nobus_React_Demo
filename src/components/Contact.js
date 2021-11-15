import React from "react";

import {
 Container,
 Form,
 FormControl
 } from "react-bootstrap";

function ContactForm() {
  return (
    <Container className="bg-white">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form>
      
    </Container>
  );
}

export default ContactForm;