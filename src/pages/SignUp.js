import React, { useState } from "react";
import { auth, db } from "../config/firebase-congif";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import signup_img from "../assets/images/signup_img.jpg";
import Navigation from "../components/Navigation";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(db, "users/" + userCredential.user.uid), {
            firstName: firstName,
            lastName: lastName,
            email: email,
          });
        })
        .catch((error) => console.log(error));
      navigate("/home");
    }
    onRegister();
  };

  return (
    <div>
      <div className="login">
        <Navigation/>
        <div className="form_container">
          <div className="formulaire">
            <form className="loginForm" onSubmit={handleSubmit}>
              <h2>Sign up</h2>
              <p>first name</p>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                required
              ></input>
              <p>last name</p>
              <input
                onChange={(e) => setLastName(e.target.value)}
                required
              ></input>
              <p>email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              ></input>
              <p>password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
              ></input>
              <div className="btn">
                <button>Sign Up</button>
              </div>
            </form>
          </div>
          <img className="img_form" src={signup_img} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
