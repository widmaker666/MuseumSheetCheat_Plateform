import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-4"></p>

        <a
          href="/home"
          className="col-md-4 d-flex align-items-center justify-content-center mb-md-3 me-md-auto link-dark text-decoration-none"
        >
          <img src={logo} width="100px" alt="" />
        </a>

        <ul className="nav col-md-7 justify-content-end">
          <li className="">
            <NavLink to="/contact">
              <li>Contact/</li>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/about">
              <li>About/</li>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/privacy">
              <li>RGPD/</li>
            </NavLink>
          </li>
          <li className="">
            <a
              href="https://api.artic.edu/docs/"
              className=""
            >
              API used
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
