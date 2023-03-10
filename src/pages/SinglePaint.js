import React from "react";
import Navbar from "../components/Navbar";


import UniqueCard from "../components/UniqueCard";

const SinglePaint = () => {
  return (
    <div> 
    <Navbar/>
    <br /><br /><br /><br /><br />
      <h1>SinglePaint / Utiliser un useNavigate() dans unique page pour atteindre cette page</h1>
      <UniqueCard />
    </div>
  );
};

export default SinglePaint;
