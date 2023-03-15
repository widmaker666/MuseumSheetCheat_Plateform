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
  const [repeatPassword, setRepeatPassword] = useState("");
  const [validation, setValidation] = useState("");
  const [validationPassword, setValidationPassword] = useState("");

  console.log(password);
  const passwordHasLowercaseLetter = /[a-z]/.test(password);
  const passwordHasUppercaseLetter = /[A-Z]/.test(password);
  const passwordHasSpecialCharacter = /^(?=.*[!@#\$%\^&\*])/.test(password);
  const passwordHasNumber = /[0-9]/.test(password);
  const passwordHasValidLength = password.length >= 8;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();  
    
    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
      setValidationPassword("Password need to be more secured");      
      return;
    }else if (password !== repeatPassword) {
      setValidation("Passwords must be the same");      
      return;
    }
    

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
        navigate('/home')    
    }
    onRegister();
    
  };

  return (
    <div>
      <div className="login">
        <Navigation />
        <div className="form_container">
          <div className="formulaire">
            <form className="loginForm" onSubmit={handleSubmit}>
              <h2>Sign up</h2>
              <p>first name</p>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                required
              ></input>
              <p>last name</p>
              <input
                type="text"
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
              <p className="text-danger mt-1">{validationPassword}</p>
              <ul>
                <li
                  style={{
                    color: passwordHasLowercaseLetter ? "green" : "red",
                  }}
                >
                  One lowerCase letter
                </li>
                <li
                  style={{
                    color: passwordHasUppercaseLetter ? "green" : "red",
                  }}
                >
                  One UpperCase letter
                </li>
                <li
                  style={{
                    color: passwordHasSpecialCharacter ? "green" : "red",
                  }}
                >
                  One special character
                </li>
                <li style={{ color: passwordHasNumber ? "green" : "red" }}>
                  One number
                </li>
                <li
                  style={{
                    color: passwordHasValidLength ? "green" : "red",
                  }}
                >
                  minimum 8 characters
                </li>
              </ul>
              <div className="mb-3">
                <label htmlFor="repeatPwd" className="form-label">
                  Repeat Password
                </label>
                <input
                  required
                  type="password"
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              <p className="text-danger mt-1">{validation}</p>
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
