import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Card = ({ paint }) => {
  //-Permet de récupérer l'id de la div cliqué ! Manque plus qu'à s'en servir pour faire afficher la peinture
const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault();    
    const idUrl = e.target.children[3].innerText;
    console.log(idUrl);
    const urlPaint = `https://api.artic.edu/api/v1/artworks/${idUrl}`
    console.log(urlPaint);
  };

  return (
    <li className="card" onClick={handleClick} target="_blank">
      <img
        src={`https://www.artic.edu/iiif/2/${paint.image_id}/full/843,/0/default.jpg`}
        alt={paint.title}
      />

      <div className="infos">
        <h2>{paint.title}</h2>
        <h4>{paint.artist_title}</h4>
        <p>{paint.place_of_origin}</p>
        <span>{paint.id}</span>
      </div>
    </li>
  );
};

export default Card;
