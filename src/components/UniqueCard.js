import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const UniqueCard = () => {

  //! faire toutes les validates et corriger les bugs d'affichages
  const [paintData, setPaintData] = useState([]);
  const [description, setDescription] = useState({});
  const params = useParams();  

  const apiId = params.uid;

  const API = `https://api.artic.edu/api/v1/artworks/${apiId}`;
  const apiDescription = `https://api.artic.edu/api/v1/artworks/${apiId}/manifest.json`;

  useEffect(() => {
    axios.get(API).then((res) => setPaintData(res.data.data));
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
        src={paintData.image_id === undefined || paintData.image_id === null ? "LOADING" : `https://www.artic.edu/iiif/2/${paintData.image_id}/full/843,/0/default.jpg`}
        alt="img"
        width="500px"
      />
      <div className="infos-card">
        <h2>{paintData.title === undefined || paintData.title === null ? "No title" : paintData.title}</h2>
        <h4>{paintData.artist_title === undefined || paintData.artist_title === null ? "No Painter" : paintData.artist_title}</h4>
        <p>{paintData.place_of_origin === undefined || paintData.place_of_origin === null ? "No title" : paintData.place_of_origin}</p>
        <p>{description.value === undefined || description.value === null ? "No title" : description.value}</p>
      </div>
    </div>
  );
};

export default UniqueCard;
