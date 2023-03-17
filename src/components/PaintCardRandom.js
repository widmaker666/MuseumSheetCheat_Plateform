import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const PaintCardRandom = () => {
  //!Constantes
  const [paintData, setPaintData] = useState([]);
  const [description, setDescription] = useState({});
  const [medium, setMedium] = useState({});
  const [dimensions, setDimensions] = useState({});
  const [attribution, setAttribution] = useState("");
  const [loading, setLoading] = useState(true);
  const index = Math.floor(Math.random() * 99);

  //! Constantes API
  const apiId =
    paintData.id === undefined || paintData.id === null ? 250745 : paintData.id;
  const API = "https://api.artic.edu/api/v1/artworks?limit=100";
  const apiDescription = `https://api.artic.edu/api/v1/artworks/${apiId}/manifest.json`;

  //!Fonctions
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
    axios.get(API).then((res) => setPaintData(res.data.data[index]));
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

  return loading ? (
    <Loader />
  ) : (
    <div className="paints">
      <img
        src={
          paintData.image_id === undefined || paintData.image_id === null
            ? "No Picture"
            : `https://www.artic.edu/iiif/2/${paintData.image_id}/full/843,/0/default.jpg`
        }
        width="500px"
        height="auto"
        alt=""
      />
      <div className="infos-card">
        <h2>
          {paintData.title === undefined || paintData.title === null
            ? "No Title"
            : paintData.title}
        </h2>
        <h4>
          {paintData.artist_title === undefined ||
          paintData.artist_title === null
            ? "Unsigned"
            : paintData.artist_title}
        </h4>
        <p>
          {paintData.place_of_origin === undefined ||
          paintData.place_of_origin === null
            ? "No Origin"
            : paintData.place_of_origin}
        </p>

        <p>
          {description.value === undefined || description.value === null
            ? "Description Unknown"
            : description.value}
        </p>
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
      )
    </div>
  );
};
export default PaintCardRandom;
