import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from 'react';
// import "./App.css";
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Contact from './components/Contact';
import {
   Container,
 } from "react-bootstrap";

const App = () => {
 
 
  return (
    <div>
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  

  );
}

export default App;
