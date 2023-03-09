import React, { useEffect, useState } from "react";
import axios from "axios";

//! Ici il faudra faire toute cette logique dans le composant Card.js car c'est là qu'on clique ... je ne sais pas encore il faudra voir des exemple ou demander de l'aide mais ça ne doit pas être si dure que ça.

const UniqueCard = () => {
  const [paintData, setPaintData] = useState([]);
  const [description, setDescription] = useState({});  
  /* const randomIndex = paintData[index] */
  const apiId = 266210;
  //-Nouvelle API Chicago museum plus simple je pense à tester
  const API = `https://api.artic.edu/api/v1/artworks/${apiId}`;

  //-Ici on a l'API qui explique la peinture via son id : https://api.artic.edu/api/v1/artworks/{id}/manifest.json

  const apiDescription = `https://api.artic.edu/api/v1/artworks/${apiId}/manifest.json`;

  //-UseEffect utilisé lorsque axios à besoin de faire jouer sa recherche
  useEffect(() => {
    axios.get(API).then((res) => setPaintData(res.data.data));
  }, []);

  useEffect(() => {
    axios
      .get(apiDescription)
      .then((res) => res.data)
      .then((data) => setDescription(data.description[0]));
  }, [paintData]);

  return (
    <div className="paints">
      <img
        src={`https://www.artic.edu/iiif/2/${paintData.image_id}/full/843,/0/default.jpg`}
        alt={paintData.title}
      />
      <div className="infos-card">
        <h2>{paintData.title}</h2>
        <h4>{paintData.artist_title}</h4>
        <p>{paintData.place_of_origin}</p>
        <p>{description.value}</p>
      </div>
    </div>
  );
};

export default UniqueCard;
