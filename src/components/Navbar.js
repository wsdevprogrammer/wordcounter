import React from 'react';
import PropTypes from 'prop-types';

export default function navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container ">
      <a className="navbar-brand  text-white"  href="/">{props.title}</a>
      <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation text-white">
        <span className="navbar-toggler-icon text-white"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active  text-white" aria-current="page" href="/">{props.Home}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-white" href="https://wsdevprogrammer.github.io/password-generator-free/" target='new'>Free Password Genrator</a>
          </li>
          </ul>
      
        
      </div>
    </div>
  </nav>
  
  );
}
navbar.propTypes={
    title: PropTypes.string,
    home: PropTypes.string,
    about: PropTypes.string
}

navbar.defaultProps ={
    title: "Word Counter"
}