import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../config/firebase-congif";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import PaintCard from "../components/PaintCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TypeWriterEffect from "react-typewriter-effect";


function Home() {
  //!Constants
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  //!Functions textAnime

  //!Fonctions
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
      <div >
        <h3>Bienvenue sur Museum Sheet Cheat</h3>
        <h5 className="justify-content-center">
        <TypeWriterEffect className="text-align-center"
        textStyle={{
          fontFamily: "Roboto",
          color: 'white',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'The only real in the art, it is the art',
          'Art is the image of creation. It is a symbol, just as the earthly world is a symbol of the cosmos',
          'Art is the shortest way from man to man',
          'True art is not only the expression of a feeling, but also the result of a sharp intelligence',
          'The work of art is not the reflection, the image of the world; but it is the image of the world',          
          'Enjoy your visit to the Museum Sheet Cheat website'
        ]}
        multiTextDelay={2000}
        typeSpeed={100}
      />
        </h5>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="mainContainer mb-5">
        {currentUser && <p>{"Connected"}</p>}
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
