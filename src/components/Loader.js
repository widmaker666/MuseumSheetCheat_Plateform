import React from "react";
import loader from "../assets/gif/loading.gif";

const Loader = () => {
  return (
    <div className="container">
      <img
        className="d-block mx-auto"
        src={loader}
        width="50%"
        height="auto"
        alt="loader"
      />
    </div>
  );
};

export default Loader;
