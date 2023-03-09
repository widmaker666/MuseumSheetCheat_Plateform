import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../config/firebase-congif";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthProvider";

import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import PaintCard from "../components/PaintCard";


function Home() {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      const starCountRef = ref(db, "users/" + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          setUsername(data.firstName + " " + data.lastName);
        }
      });
    }
  }, [currentUser]);

  const clickLogin = () => {
    if (currentUser) {
      signOut(auth);
    } else {
      navigate("/login");
    }
  };

  const clickSignup = () => {
    navigate("/signup");
  };

  return (
    <div>

    <div className="mainContainer">
      <h1>Home</h1>
      {currentUser && <p>Welcome, {username}</p>}
      <div className="buttons">
        <button onClick={clickLogin}>
          {currentUser ? "Log Out" : "Login"}
        </button>
        {!currentUser && <button onClick={clickSignup}>Sign Up</button>}
      </div>

    <PaintCard/>
    </div>
    </div>
  );
}

export default Home;