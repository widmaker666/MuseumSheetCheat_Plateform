import axios from "axios";
import React, { useEffect, useState } from "react";



const PaintCardRandom = () => {
  const [paintData, setPaintData] = useState([]);
  const [description, setDescription] = useState({});
  const index = Math.floor(Math.random() * 99);
  
  const apiId = paintData.id === undefined || paintData.id === null ? 250745 : paintData.id;
  
  //-Nouvelle API Chicago museum plus simple je pense à tester
  const API = "https://api.artic.edu/api/v1/artworks?limit=100";

  //-Ici on a l'API qui explique la peinture via son id : https://api.artic.edu/api/v1/artworks/{id}/manifest.json

  const apiDescription = `https://api.artic.edu/api/v1/artworks/${apiId}/manifest.json`;

  //-UseEffect utilisé lorsque axios à besoin de faire jouer sa recherche
  //* Mettre un setInterval pour réexecuter la requète

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
        src={
          paintData.image_id === undefined || paintData.image_id === null
            ? "No Picture"
            : `https://www.artic.edu/iiif/2/${paintData.image_id}/full/843,/0/default.jpg`
        }
        width="500px"
        alt=""
      />
      <div className="infos-card">
        <h2>{paintData.title === undefined || paintData.title === null ? "No Title" : paintData.title}</h2>
        <h4>
          {paintData.artist_title === undefined || paintData.artist_title === null
            ? "Unsigned"
            : paintData.artist_title}
        </h4>
        <p>
          {paintData.place_of_origin === undefined || paintData.place_of_origin === null
            ? "No Origin"
            : paintData.place_of_origin}
        </p>
        <p>
          {description.value === undefined || description.value === null
            ? "Description Unknown"
            : description.value}
        </p>
      </div>
    </div>
  );
};
export default PaintCardRandom;
