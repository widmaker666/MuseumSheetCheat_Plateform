import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../config/firebase-congif";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import PaintCard from "../components/PaintCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      const starCountRef = ref(db, "users/" + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
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

  const clickSignup = () => navigate("/signup");
  const logOut = () => navigate("/login");

  return (
    <div className="home">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="mainContainer mb-5">
        {currentUser && (
          <p>{`Welcome to the Museum Sheet Cheat, you're connected now ! Nice visit ${username}`}</p>
        )}
        <div className="buttons">
          <button onClick={clickLogin}>
            {currentUser ? (
              <button className="buttons" onClick={logOut}>
                Log Out
              </button>
            ) : (
              "Login"
            )}
          </button>
          {!currentUser && <button onClick={clickSignup}>Sign Up</button>}
        </div>
        <PaintCard />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
