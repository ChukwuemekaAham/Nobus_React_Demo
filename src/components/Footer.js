import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaComment } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'


import {
 Container
 } from "react-bootstrap";

// import logo from "/img/nobus_logo.png";
// import emailpng from "/img/v2/email.png";
// import letter from "/img/v2/Newsletter.png";

function Footer() {
  return (
  
      
      <footer class="py-4 fixed-relative " style={{ backgroundColor: "#0D0D2B", color: "#fff" }}>
    
        <div class="contain">
          <div class="container" >
            
            <div class="row" >
                <div class="col pb-2">
                    
                  <img src='/img/v2/nobus_logo1.png' height="30px" alt="Responsive image" />
                    
                </div>

                <hr class="w-100 clearfix d-md-none" style={{color: "#0D0D2B" }} />

                <div class="col">
                    <h6 class="my-3 font-weight-bold" >Quick Links</h6>
                    <p>
                      <a href="#"  style={{ color: "#fff" }} class="small text-decoration-none" >Product</a>
                    </p>
                    <p>
                      <a href="#" style={{ color: "#fff" }} class="small text-decoration-none" >Features</a>
                    </p> 
                    <p class=""> 
                      <a href="#"  style={{ color: "#fff" }} class="small text-decoration-none" >Blog</a>
                    </p> 
                    <p>
                      <a href="#" style={{ color: "#fff" }} class="small text-decoration-none" >Support</a>
                    </p>    
                </div>  
                <div class="col">
                    <h6 class="my-3 font-weight-bold" >Resources</h6>
                    <p >
                      <a href="#"  style={{ color: "#fff" }}  class="small text-decoration-none">Terms of services</a>
                    </p>
                    <p >
                      <a href="#" style={{ color: "#fff" }} class="small text-decoration-none" >Privacy statement</a>
                    </p> 
                    <p >
                      <a href="#"  style={{ color: "#fff" }} class="small text-decoration-none" >Pricing</a>
                    </p>
                    <p >
                      <a href="#"  style={{ color: "#fff" }} class="small text-decoration-none" >Documentation</a>
                    </p> 
                    
                </div>  

                <hr class="w-100 clearfix d-md-none" color="#0D0D2B" />

                <div class="col">
                    
                    <h5 class="my-3" >We accept the following
                      payment systems</h5>

                    <div class="row d-flex align-items-center">
                        <div class="col mr-2" > 
                            <img src='/img/v2/visa.png' class="img-fluid" alt="Responsive image" />
                        </div> 
                        
                        <div class="col mr-2"  > 
                          <img src='/img/v2/mastercard.png'  class="img-fluid" alt="Responsive image" />
                        </div> 
                    </div>        
                </div> 
            </div>
        
            <div class="container text-center mt-3 pt-3 ">

              <div class="row ">

                <div class="col"> 
                    <p  style={{ color: "#fff" }} class="">
                    <span >©2021 </span> Nkponani Limited. All Rights Reserved.
                    </p>
                
                </div> 
            
                <hr class="w-100 clearfix d-md-none" color="#0D0D2B" />
                
                <div class="col" id="ficon1"> 

                    <a class="btn-floating btn-lg rgba-white-slight" style={{ color: "#fff" }} href='https://linkedin.com/company/nobus-cloud-services'>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    
                    <a class="btn-floating btn-lg rgba-white-slight" style={{ color: "#fff" }} href='https://twitter.com/nobus_cloud'>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a class="btn-floating btn-lg rgba-white-slight" style={{ color: "#fff" }} href='#'>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a> 
            
                </div>  


              

                <div class="col text-left" id="ficon2"> 

                      <a class="btn-floating btn-lg rgba-white-slight" style={{ color: "#fff" }} href='https://linkedin.com/company/nobus-cloud-services'>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                      <a class="btn-floating btn-lg rgba-white-slight" style={{ color: "#fff" }} href='https://twitter.com/nobus_cloud'>
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a class="btn-floating btn-lg rgba-white-slight" style={{ color: "#fff" }} href='#'>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a> 
                     
                </div>  
              </div> 
            </div>
          </div> 
            
        </div> 
    
      </footer>
      
    
  );
}

export default Footer;