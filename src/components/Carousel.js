import React from "react";
import {
 Container,
 Carousel
 } from "react-bootstrap";

function Slide() {
  return (
    
      <Carousel id="core1" className="mainbg">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/img/v2/slide1.png"
            alt="First slide"
            />
            
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/img/v2/slide.png"
            alt="Second slide"
            />

        </Carousel.Item>
       
      </Carousel>
      
      
      
  
  );
}

export default Slide;