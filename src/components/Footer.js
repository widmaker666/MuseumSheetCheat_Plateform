import React from 'react';
import logo from "../assets/images/logo.png"


const Footer = () => {
  return (
    <>
<footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-4"></p>

    <a href="/home" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <img src={logo} width="100px" alt="" />
    </a>

    <ul className="nav col-md-7 justify-content-end">
      <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted">Contact us</a></li>
      <li className="nav-item"><a href="/about" className="nav-link px-2 text-muted">About</a></li>
      <li className="nav-item"><a href="/rgpd" className="nav-link px-2 text-muted">Policy Privacy</a></li>
      <li className="nav-item"><a href="https://api.artic.edu/docs/" className="nav-link px-2 text-muted">API used</a></li>      
    </ul>
  </footer>    
    </>

  );
};

export default Footer;
