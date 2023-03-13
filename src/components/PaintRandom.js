import React, { useEffect, useState } from "react";
import axios from "axios";

const PaintRandom = () => {
  const [paintData, setPaintData] = useState([]);
  const [description, setDescription] = useState({});
  const index = Math.floor(Math.random() * 99);
  /* const randomIndex = paintData[index] */
  const apiId = paintData.id;
  //-Nouvelle API Chicago museum plus simple je pense à tester
  const API = "https://api.artic.edu/api/v1/artworks?limit=100";

  //-Ici on a l'API qui explique la peinture via son id : https://api.artic.edu/api/v1/artworks/{id}/manifest.json

  const apiDescription = `https://api.artic.edu/api/v1/artworks/${apiId}/manifest.json`;

  //-UseEffect utilisé lorsque axios à besoin de faire jouer sa recherche
  useEffect(() => {
    axios.get(API).then((res) => setPaintData(res.data.data[index]));
  }, []);

  useEffect(() => {
    axios
      .get(apiDescription)
      .then((res) => res.data)
      .then((data) => setDescription(data.description[0]));
  }, []);

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

export default PaintRandom;

//!Il faut que je récupère l'id grâce à la premiere API, pour pouvoir utiliser le lien d'API de description pour afficher la description de la peinture avec : .value
//!Ensuite créer un nouveau const [valueId, setValueId] = useState("") pour afficher la description de la peinture avec la nouvelle API