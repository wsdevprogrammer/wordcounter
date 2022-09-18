import React from 'react';
import Navbar from './components/Navbar';
import LowertoUppercase from './components/LowertoUppercase';
import About from './components/About';

// import ReactDOM from 'react-dom';
// import logo from './logo.png';

import './App.css';
function reactApp() {

  
  // let name = " Waseem Saleem";
  return (

      <>  
      <Navbar  Home="Home" About="About us"/>
      <div className="container ">
      <LowertoUppercase heading="Word Counter" />
      {/* <About/> */}
      </div>

      
      </>

  );
}

export default reactApp;
