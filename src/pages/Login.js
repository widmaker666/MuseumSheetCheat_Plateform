import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase-congif";
import login_img from "../assets/images/login_img.jpg";
import Navigation from "../components/Navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      );
      navigate("/home");
    }
    onRegister();
  };

  return (
    <div>
      <Navigation />
      <div className="form_container">
        <div className="formulaire">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <p>Email</p>
        <input
          
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p>Password</p>
        <input
          
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div className="btn">
        <button>Login</button>
        </div>
      </form>
        </div>
        <img className="img_form" src={login_img} alt="image" />
      </div>
    </div>
  );
};

export default Login;
