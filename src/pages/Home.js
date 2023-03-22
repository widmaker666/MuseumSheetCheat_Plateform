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
    <>
      <div className="home">
        <div className="pb-5">
          <Navbar />          
        </div>
        
        <div className="pt-5">        
          <h3
            className="mt-5 pt-0 text-center "
            style={{
              fontFamily: "Italiana",
              fontSize: "3.5em",
              fontWeight: 1000,
              color: "black",
              border: "3px solid goldenrod",
              borderBottomWidth: 0,
              marginLeft: "20%",
              marginRight: "20%",
              marginBottom: "5%",
              paddingBottom: "2%",
            }}
          >
            Welcome on the Museum Sheet Cheat site
          </h3>
          <div className="btn text-center">
          <button onClick={clickLogin}>
            {currentUser ? (
              <button className="btn" onClick={logOut}>
                Log Out
              </button>
            ) : (
              "Login"
            )}
          </button>
          {!currentUser && <button onClick={clickSignup}>Sign Up</button>}
        </div>
          <div className="mt-5 mb-6 text-anime">
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Inconsolata",
                color: "black",
                fontWeight: 200,
                fontSize: "1.8em",
                fontStyle: "italic",
              }}
              startDelay={200}
              cursorColor="#3F3D56"
              multiText={[
                "The only real in the art, it is the art",
                "Art is the image of creation. It is a symbol, just as the earthly world is a symbol of the cosmos",
                "Art is the shortest way from man to man",
                "True art is not only the expression of a feeling, but also the result of a sharp intelligence",
                "The work of art is not the reflection, the image of the world; but it is the image of the world",
                "Enjoy your visit on the Museum Sheet Cheat website",
              ]}
              multiTextDelay={2000}
              typeSpeed={100}             
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="mainContainer mb-5">
          <PaintCard />
        </div> 
        <Footer/>       
      </div>
    </>
  );
}

export default Home;
