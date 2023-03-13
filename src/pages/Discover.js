import React from "react";
import Navigation from "../components/Navigation";
import passion from "../assets/images/la-passion.jpg";
import dali from "../assets/images/Dali.jpg";


const Discover = () => {
  return (
    <div className="discover">
      <Navigation />
      <h1 className="what">What are you doing here?</h1>
      <img className="la-passion" src={passion} alt="image peinture Van Gogh" />
      <p className="descri">
        Art is an activity, the product of that activity or the idea of it,
        which deliberately addresses the senses, emotions, intuitions and the
        intellect.
        <br />
        <br />
        Museum Sheet Cheat was created to collect a large number of artistic
        works from all periods. MSC is aimed at all art lovers, students, the
        curious, and anyone wishing to learn more about an artistic movement, an
        artist, an artistic work...
        <br />
        <br />
        Art is to be seen, but also discussed. That is why you will find a
        chatroom where everyone is free to express their thoughts.{" "}
      </p>
      <img className="dali" src={dali} alt="image peinture Van Gogh" />
      <h1 className="why">Why Subscribe ?</h1>
        <p className="sub">
          - You will be able to store your favorite works so that you can find
          them more easily <br /> <br />
          - Have a nickname is convenient to use a chat <br />
          <br />- This site is a study project and we need some statistical
          data.
        </p>
      
    </div>
  );
};

export default Discover;