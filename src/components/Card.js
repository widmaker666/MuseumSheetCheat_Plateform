import { useNavigate } from "react-router-dom";
import Alien from "../assets/images/alien.png";

const Card = ({ paint }) => {
  //-Permet de récupérer l'id de la div cliqué ! Manque plus qu'à s'en servir pour faire afficher la peinture
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const idUrl = e.target.childNodes[1].data;
    console.log(idUrl);
    navigate(`../one-paint/${idUrl}`);
  };

  return (
    <li className="card" target="_blank">
      <img
        src={
          paint.image_id === null
            ? Alien
            : `https://www.artic.edu/iiif/2/${paint.image_id}/full/843,/0/default.jpg`
        }
        alt="paint"
      />

      <div className="infos">
        <h2>{paint.title === null ? "No Title" : paint.title}</h2>
        <h4>{paint.artist_title === null ? "Unsigned" : paint.artist_title}</h4>
        <p>
          {paint.place_of_origin === null ? "No origin" : paint.place_of_origin}
        </p>
        <button onClick={handleClick}>more {paint.id}</button>
      </div>
    </li>
  );
};

export default Card;
