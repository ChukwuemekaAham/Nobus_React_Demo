import React from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faComment } from '@fortawesome/free-solid-svg-icons'
import Carousel from './Carousel';



function Main() {
    return (
      <Container className="mainbg" fluid > 
      <div>
      <Row id="core1">
       <img src="/img/v2/header1.png" className="d-flex w-100 image-fluid" />
       
      </Row>
      <Row id="core2" class="pt-5">
       <img src="/img/v2/header4.png" className="d-flex w-100 image-fluid mt-5" />
      </Row>
        
        <button id="headerbtn" class="text-decoration-none btn btn-primary p-3 " style={{ radius: "30px", borderRadius: "50px" }} >     
        <span>Get started</span> <span > <FontAwesomeIcon icon={faChevronCircleRight} /> </span> 
        </button>

                 
        <button id="chatbtn" href="#" style={{ backgroundColor: "#3671E9", color: "#fff" }} class="btn btn-primary shadow-lg rounded-circle" >
          <h4 class="pt-2 px-1"><FontAwesomeIcon icon={faComment} /></h4>
        </button>

      </div>
      <Carousel />
      <Row>
        <Col className="text-light text-center pt-5">
          <h1  class="pt-5 mt-5">Why you should choose</h1>
          <h1 class="font-weight-bold" >NOBUS CLOUD</h1>
          <p > Nobus offers standard compute services that allows you to develop,
            deploy, run and scale your applications and workloads in a secure and
             cost effective compute cloud.
          </p>
          <a class="text-decoration-none btn btn-primary-outline  border border-light text-light" href="#" >
          <span > Learn More </span>
                  
          </a>  
                 
        </Col>
        <hr class="w-100 clearfix d-md-none" color="#0D0D2B" />
        <Col>
        <img src="/img/v2/bg-daas.png" className="d-flex w-100 image-fluid mt-4"  />
        </Col>
       
      </Row>
    
      <Col className="text-light text-center py-5 mx-5">
        <h1 class="font-weight-bold" >SIMPLE MONTHLY CALCULATOR</h1>
        <p class="">Calculate your average cost per month with our simple monthly calculator. Low Ongoing Cost; pay-as-you-use pricing with flexible expenses, of short or long term commitments, without requiring complex licensing.</p>
      
        <a class="text-decoration-none btn btn-primary-outline border border-light text-light" href="#" >
        <span>  Get started </span>
        
        </a>
                
      </Col>
       
      <Row className="text-center p-5  bg-light ">
      <h5 class="font-weight-bold jumbotron-fluid "> Migrate securely and easily to the nobus platform. 
        Eliminate guessing on your infrastructure capacity needs, scale 
        up or down as the need arises.</h5>
        
      </Row>
        
       
    
      {/* <Row>
        <Col className="text-light text-center ">
         
        </Col>
        <Col className="text-light text-center ">
         
        </Col>
        <Col className="text-light text-center ">
         
        </Col>
        
       
      </Row> */}
       
       
      </Container>
      
      
    );
        
  }
  
export default Main;