import React, { useState } from "react";
import { auth, db } from "../config/firebase-congif";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import signup_img from "../assets/images/signup_img.jpg";
import Navigation from "../components/Navigation";

const SignUp = () => {
  //!Constants
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const navigate = useNavigate();

  //!Const Validations
  const passwordHasLowercaseLetter = /[a-z]/.test(password);
  const passwordHasUppercaseLetter = /[A-Z]/.test(password);
  const passwordHasSpecialCharacter = /^(?=.*[!@#\$%\^&\*])/.test(password);
  const passwordHasNumber = /[0-9]/.test(password);
  const passwordHasValidLength = password.length >= 8;

  //!Fonctions
  const handleChange = () => setChecked(!checked);

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      password.length < 8 ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[^a-zA-Z0-9]/.test(password)
    ) {
      return alert("password need to be more secured");
    } else if (password !== repeatPassword) {
      return alert("Passwords must be the same");
    } else if (checked === false) {
      return alert("You must check the conditions");
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
      navigate("/home");
    }
    onRegister();
  };

  return (
    <div>
      <div className="login">
        <Navigation />
        <div className="form_container">
          <div className="formulaire">
            <form className="signupForm" onSubmit={handleSubmit}>
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
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                required
                type="password"
              ></input>
              {isPasswordFocused && (
                <div className="valid">
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
                </div>
              )}
              <p>confirm password</p>
              <input
                required
                type="password"
                onChange={(e) => setRepeatPassword(e.target.value)}
              />

              <label>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                  label="I agree to the terms and conditions RGPD"
                />
                I agree to the terms and conditions RGPD
              </label>
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
