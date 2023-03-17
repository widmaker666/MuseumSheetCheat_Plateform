import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import UniqueCard from "../components/UniqueCard";

const SinglePaint = () => {
  return (
    <>
      <div className="single">
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <UniqueCard />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default SinglePaint;
