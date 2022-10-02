import React from 'react';
import Navbar from './components/Navbar';
import LowertoUppercase from './components/LowertoUppercase';
import About from './components/Pages/About';

// import ReactDOM from 'react-dom';
// import logo from './logo.png';

import './App.css';
function reactApp() {

  
  // let name = " Waseem Saleem";
  return (

      <>  
      <Navbar  Home="Home" About="About"  Contact="Contact"/>
      <div className="container ">
      <LowertoUppercase heading="Welcom to Word Counter" />
      {/* <About/> */}
      </div>

      
      </>

  );
}

export default reactApp;
