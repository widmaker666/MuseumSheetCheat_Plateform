import { useNavigate } from "react-router-dom";
import Alien from "../assets/images/alien.png";

const Card = ({ paint }) => {
  const navigate = useNavigate();

  //!Functions
  const handleClick = (e) => {
    e.preventDefault();
    const idUrl = e.target.childNodes[1].data;
    console.log(idUrl);
    navigate(`../one-paint/${idUrl}`);
  };

  return (
    <li className="card" target="_blank">
      <img className="img"
        src={
          paint.image_id == null
            ? Alien
            : `https://www.artic.edu/iiif/2/${paint.image_id}/full/843,/0/default.jpg`
        }
        alt="paint"
      />

      <div className="infos">
        <h2>{paint.title == null ? "No Title" : paint.title}</h2>
        <h2>{paint.artist_title == null ? "Unsigned" : paint.artist_title}</h2>
        <h2>
          {paint.place_of_origin == null ? "No origin" : paint.place_of_origin}
        </h2>
        <button  onClick={handleClick}> MORE {paint.id}</button>
      </div>
    </li>
  );
};

export default Card;
