import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import matisse from "../assets/images/matisse.jpg";
import fenetre from "../assets/images/fenetre.jpg";
import ambush from "../assets/images/ambush1.jpg";

const Welcome = () => {
  return (
    <div className="welcome">
      <Navigation />
      <h1 className="h1_welcome">
        Do you know <br /> Museum sheet cheat ?
      </h1>
      <div className="buttons-welcome">
        <div className="to_discover">
          <h3 className="click-discover">Click here to discover</h3>
          <NavLink to="/discover">
            <img
              className="img_matisse"
              src={matisse}
              alt="image_peinture_matisse"
            />
          </NavLink>
        </div>
        <div className="to_start">
          <h3 className="click-start">Click here to start</h3>
          <NavLink to="/login">
            <img
              className="img_fenetre"
              src={fenetre}
              alt="image_peinture_matisse"
            />
          </NavLink>
        </div>
      </div>
      <img
        className="img_harley"
        src={ambush}
        alt="image_harley_weir"
      />
      </div>
  )
}
      
      
     
    

export default Welcome;
