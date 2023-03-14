import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import hambmenu from "../assets/images/hambmenu.jpg";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <NavLink to="/">
          <img src={Logo} alt="Logo MSC" className="logo" />
        </NavLink>
      </div>
      <div className="menu-hamb-container" onClick={handleMenuClick}>
        <img src={hambmenu} alt="menu_hamburger" className="menu-hamb" />
      </div>
      <div className={`navlink ${showMenu ? "mobile-menu" : ""}`}>
        <ul>
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
          <NavLink to="/signup">
            <li>Sign up</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
