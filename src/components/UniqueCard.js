import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";


const UniqueCard = () => {
  //!Constants
  const [paintData, setPaintData] = useState([]);
  const [description, setDescription] = useState({});
  const [medium, setMedium] = useState({});
  const [dimensions, setDimensions] = useState({});
  const [attribution, setAttribution] = useState("");
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [showModal, setShowModal] = useState(false);

  //!Constants API

  const apiId = params.uid;
  const API = `https://api.artic.edu/api/v1/artworks/${apiId}`;
  const apiDescription = `https://api.artic.edu/api/v1/artworks/${apiId}/manifest.json`;


  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //!Functions
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
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

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="paints">
        <img
          className="art-img"
          src={
            paintData.image_id === undefined || paintData.image_id === null ? (
              <p>LOADING...</p>
            ) : (
              `https://www.artic.edu/iiif/2/${paintData.image_id}/full/843,/0/default.jpg`
            )
          }
          alt="img"
        />
        <div className="infos-card">
          <h2>
            {paintData.title === undefined || paintData.title === null ? (
              <p>LOADING...</p>
            ) : (
              paintData.title
            )}
          </h2>
          <br />
          <h4>
            {paintData.artist_title === undefined ||
            paintData.artist_title === null ? (
              <p>LOADING...</p>
            ) : (
              paintData.artist_title
            )}
          </h4>
          <br />
          <p>
            {paintData.place_of_origin === undefined ||
            paintData.place_of_origin === null ? (
              <p>LOADING...</p>
            ) : (
              paintData.place_of_origin
            )}
          </p>
          <br />
          <p className="desc">
            {description.value === undefined || description.value === null ? (
              <p>LOADING...</p>
            ) : (

              <>
                {description.value.length > 150 ? (
                  <>
                    {description.value.slice(0, 150)}...
                    <button onClick={handleShowModal}>show more</button>
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
                          <h2>Description</h2>
                          <p>{description.value}</p>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  description.value
                )}
              </>
            )}
          </p>


          <br />
          <p>
            {medium.label === undefined || medium.label === null ? (
              <p>LOADING...</p>
            ) : (
              medium.label
            )}
          </p>
          <p>
            {medium.value === undefined || medium.value === null ? (
              <p>LOADING...</p>
            ) : (
              medium.value
            )}
          </p>
          <p>
            {dimensions.label === undefined || dimensions.label === null ? (
              <p>LOADING...</p>
            ) : (
              dimensions.label
            )}
          </p>
          <p>
            {dimensions.value === undefined || dimensions.value === null ? (
              <p>LOADING...</p>
            ) : (
              dimensions.value
            )}
          </p>
          <p>
            {attribution === undefined || attribution === null ? (
              <p>LOADING...</p>
            ) : (
              attribution
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default UniqueCard;
