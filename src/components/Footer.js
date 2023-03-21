import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3">
        <a
          href="/home"
          className="col-md-4 d-flex align-items-center justify-content-center mb-md-3 me-md-auto link-dark text-decoration-none"
        >
          <img src={logo} width="150px" alt="" />
        </a>

        <ul className="nav col-md-7 justify-content-end">
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link text-gold">
              Contact/
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link text-gold">
              About/
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/privacy" className="nav-link text-gold">
              RGPD/
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="https://api.artic.edu/docs/" className="nav-link text-gold">
              API used
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Footer;
