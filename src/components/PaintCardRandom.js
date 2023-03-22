import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import alien from "../assets/images/alien.png";

const PaintCardRandom = () => {
  //!Constants
  
  const [paintData, setPaintData] = useState([]);
  const [descriptionData, setDescriptionData] = useState({});
  const [medium, setMedium] = useState({});
  const [dimensions, setDimensions] = useState({});
  const [attribution, setAttribution] = useState("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const index = Math.floor(Math.random() * 99);

  //! Constantes API
  const apiId = paintData.id == null ? 250745 : paintData.id;
  const API = "https://api.artic.edu/api/v1/artworks?limit=100";
  const apiDescription = `https://api.artic.edu/api/v1/artworks/${apiId}/manifest.json`;

  //!Fonctions
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
      .then((data) => setDescriptionData(data.description[0]));
  }, [descriptionData]);

  useEffect(() => {
    axios
      .get(apiDescription)
      .then((res) => res.data)
      .then((data) => setMedium(data.metadata[1]));
  }, [descriptionData]);

  useEffect(() => {
    axios
      .get(apiDescription)
      .then((res) => res.data)
      .then((data) => setDimensions(data.metadata[2]));
  }, [descriptionData]);
  useEffect(() => {
    axios
      .get(apiDescription)
      .then((res) => res.data)
      .then((data) => setAttribution(data.attribution));
  }, [descriptionData]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="paints">
        <img
          className="art-img m-5"
          src={
            paintData.image_id == null || paintData.image_id == undefined  
              ? { alien }
              : `https://www.artic.edu/iiif/2/${paintData.image_id}/full/843,/0/default.jpg`
          }
          alt=""
        />
        
        <div className="infos-card m-5">
          <h2
            style={{ fontStyle: "italic", fontWeight: 900 }}
          >
            {paintData.title == null || paintData.title == "" ? (
              <p>No Title</p>
            ) : (
              paintData.title
            )}
          </h2>
          <h4>
            {paintData.artist_title == null || paintData.artist_title == "" ? (
              <p>Unsigned</p>
            ) : (
              `- ${paintData.artist_title} -`
            )}
          </h4>
          <p style={{ fontStyle: "italic" }}>
            {paintData.place_of_origin == null ||
            paintData.place_of_origin == "" ? (
              <p>No Origin</p>
            ) : (
              `- ${paintData.place_of_origin} -`
            )}
          </p>
          <br />
          <h2
            style={{
              fontStyle: "italic",
              textDecoration: "underline red",
              
            }}
          >
            Description
          </h2>
          <p
            className="desc mb-0 p-1"
            style={{ fontStyle: "italic"}}
          >
            {descriptionData.value == null || descriptionData.value == "" ? (
              <p>NO description</p>
            ) : (
              <>
                {descriptionData.value.length > 70 ? (
                  <>
                    {descriptionData.value.slice(0, 70)}...
                    <button className="" onClick={handleShowModal}>
                      show more
                    </button>
                    {showModal && (
                      <div
                        className="modal"
                        onClick={() => setShowModal(false)}
                      >
                        <div className="modal-content">
                          <span
                            className="close"
                            onClick={() => setShowModal(false)}
                          >
                            &times;
                          </span>
                          <h2
                            style={{
                              fontStyle: "italic",
                              textDecoration: "underline red",
                              
                            }}
                          >
                            Description
                          </h2>
                          <p style={{ fontStyle: "italic" }}>
                            {descriptionData.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <p>{descriptionData.value}</p>
                )}
              </>
            )}
          </p>

          <br />
          <h2
            className="mb-0 p-1"
            style={{
              fontStyle: "italic",
              textDecoration: "underline red",
              
            }}
          >
            {medium.label == null || medium.label == "" ? (
              <p>No Medium</p>
            ) : (
              medium.label
            )}
          </h2>
          <p>
            {medium.value == null || medium.value == "" ? (
              <p>No infos</p>
            ) : (
              ` - ${medium.value} -`
            )}
          </p>
          <br />
          <h2
            style={{
              fontStyle: "italic",
              textDecoration: "underline red",
              
            }}
          >
            {dimensions.label == null || dimensions.label == "" ? (
              <p>No Dimension</p>
            ) : (
              dimensions.label
            )}
          </h2>
          <p>
            {dimensions.value == null || dimensions.value == "" ? (
              <p>No infos</p>
            ) : (
              dimensions.value
            )}
          </p>
          <p>
            {attribution == null || attribution == "" ? (
              <p>No infos</p>
            ) : (
              attribution
            )}
          </p>
        </div>
      </div>
    </>
  );
};
export default PaintCardRandom;
