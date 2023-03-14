import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import hambmenu from "../assets/images/hambmenu.jpg";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
      setShowMenu(!showMenu);
    };
  
    return (
      <div className="navbar">
        <div className="logo-container">
          <NavLink to="/home">
            <img src={Logo} alt="Logo MSC" className="logo" />
          </NavLink>
        </div>
        <div className="menu-hamb-container" onClick={handleMenuClick}>
          <img src={hambmenu} alt="menu_hamburger" className="menu-hamb" />
        </div>
        <div className={`navlink ${showMenu ? "mobile-menu" : ""}`}>
          <ul>
            <NavLink to="/random">
              <li>Today</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>            
          </ul>
        </div>
      </div>
    );
  };

export default Navbar;