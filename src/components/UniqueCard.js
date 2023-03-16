import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UniqueCard = () => {
  //! faire toutes les validates et corriger les bugs d'affichages
  const [paintData, setPaintData] = useState([]);
  const [description, setDescription] = useState({});
  const [medium, setMedium] = useState({});
  const [dimensions, setDimensions] = useState({});
  const [attribution, setAttribution] = useState("");
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

  useEffect(() => {
    axios
      .get(apiDescription)
      .then((res) => res.data)
      .then((data) => setMedium(data.metadata[1]));
  }, []);

    useEffect(() => {
      axios
        .get(apiDescription)
        .then((res) => res.data)
        .then((data) => setDimensions(data.metadata[2]));
    }, []);
    useEffect(() => {
      axios
        .get(apiDescription)
        .then((res) => res.data)
        .then((data) => setAttribution(data.attribution));
    }, []);

  return (
    <div className="paints">
      <img
        className="art-img"
        src={
          paintData.image_id === undefined || paintData.image_id === null
            ? "LOADING"
            : `https://www.artic.edu/iiif/2/${paintData.image_id}/full/843,/0/default.jpg`
        }
        alt="img"
      />
      <div className="infos-card">
        <h2>
          {paintData.title === undefined || paintData.title === null
            ? "No title"
            : paintData.title}
        </h2>
        <br />
        <h4>
          {paintData.artist_title === undefined ||
          paintData.artist_title === null
            ? "No Painter"
            : paintData.artist_title}
        </h4>
        <br />
        <p>
          {paintData.place_of_origin === undefined ||
          paintData.place_of_origin === null
            ? "No title"
            : paintData.place_of_origin}
        </p>
        <br />
        <p className="desc">
          {description.value === undefined || description.value === null
            ? "No title"
            : description.value}
        </p>
        <br />
        <p>
          {medium.label === undefined || medium.label === null
            ? "No Medium"
            : medium.label}
        </p>
        <p>
          {medium.value === undefined || medium.value === null
            ? "No infos"
            : medium.value}
        </p>
        <p>
          {dimensions.label === undefined || dimensions.label === null
            ? "No Dimension"
            : dimensions.label}
        </p>
        <p>
          {dimensions.value === undefined || dimensions.value === null
            ? "No infos"
            : dimensions.value}
        </p>
        <p>
          {attribution === undefined || attribution === null
            ? "No infos"
            : attribution}
        </p>
      </div>
    </div>
  );
};

export default UniqueCard;
