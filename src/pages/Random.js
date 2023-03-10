import React from "react";
import Navbar from "../components/Navbar";


import PaintRandom from "../components/PaintRandom";

const Random = () => {
  return (
    <div>
    <Navbar/>
    <br /><br /><br /><br /><br />
      <h1>Random</h1>
      <PaintRandom />
    </div>
  );
};

export default Random;
