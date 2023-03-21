import React from "react";
import Navigation from "../components/Navigation";
import passion from "../assets/images/la-passion.jpg";
import dali from "../assets/images/Dali.jpg";
import FormSignUp from "../components/FormSignUp";

const Discover = () => {
  return (
    <div className="discover">
      <Navigation />
      <h1 className="what">Explore world-renowned art</h1>
      <img className="la-passion" src={passion} alt="image peinture Van Gogh" />
      <p className="descri">
        Our virtual museum allows you to discover more than 100 works of art
        each day from the prestigious Art Institute of Chicago. Paintings,
        sculptures, photographs and more - you'll see a wide variety of
        creations from famous artists around the world.
        <br />
        The Museum Sheet Cheat was created to gather a large number of works of
        art from all periods. The MSC is aimed at all art lovers, students, the
        curious, and anyone wishing to learn more about an artistic movement, an
        artist, or a particular work of art."
      </p>
      <h1 className="why">Discover the history and stories behind the works</h1>
      <img className="dali" src={dali} alt="image peinture Van Gogh" />
      <p className="sub">
        In addition to seeing the works themselves, our virtual museum also
        offers you the opportunity to delve into the fascinating history and
        details of each work. Learn about the artists who created them, the
        techniques they used, and the historical events that inspired their
        work.
        <br />
        Let us guide you and explore randomly to make surprising discoveries.
        With new works added regularly, there is always something new to
        discover on our site.
      </p>
      <div className="divSign">
        <FormSignUp />
      </div>
      <h1 className="why_sub">Why Subscribe ?</h1>
      <p className="subscribe">
        Registering on our site has many advantages, one of which is that you
        will receive exclusive invitations to events that we will organise in
        collaboration with our partners. By registering on our site, you will
        join our community of art lovers and enthusiasts, and you will receive
        advance notice of all upcoming events. These events can include special
        exhibitions, lectures, guided tours, meetings with artists and much
        more. In addition, by registering, you will also be able to enjoy other
        exclusive benefits, such as discounts on admission tickets. Register now
        to become part of our community and enjoy these unique benefits! We
        would like to stress that we will not use our users' data for any
        purpose other than sending targeted invitations to our events. We will
        not spam our users and will respect their privacy.
      </p>
    </div>
  );
};

export default Discover;
