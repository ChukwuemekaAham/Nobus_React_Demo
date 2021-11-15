import React from 'react';
import { Container} from 'react-bootstrap';
import $ from 'jquery';
import "./Loader.css"

function Preloader() {
   
    $(window);
    const Source = () => {
                   
        $(window).on('load', function() {
                // will first fade out the loading animation 
                $("#loader").fadeOut(3, () => {

                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(3).fadeOut(3);

                })
            } 
        )
    };

    return (
      
        <div id="preloader" onLoad={Source} > 
            <div id="loader"></div>
        </div> 
      
    );
        
  };
  
export default Preloader;
