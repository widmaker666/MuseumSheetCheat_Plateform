import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PaintCardRandom from "../components/PaintCardRandom";

const Random = () => {
  return (
    <div className="today">
    <Navbar/>
    <br /><br /><br /><br /><br />
    
      <PaintCardRandom />
    </div>
  );
};

export default Random;
