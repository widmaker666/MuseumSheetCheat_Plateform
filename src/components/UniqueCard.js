import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import alien from '../assets/images/alien.png'

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
          className="art-img m-5"
          src={
            paintData.image_id == null || paintData.image_id == "" ? (
              {alien}
            ) : (
              `https://www.artic.edu/iiif/2/${paintData.image_id}/full/843,/0/default.jpg`
            )
          }
          alt="img"
        />
        <div className="infos-card m-5">
          <h2 style={{ fontStyle: "italic", fontSize: "35px", fontWeight: 900 }}>
            {paintData.title == null || paintData.title == "" ? (
              <p>No Title</p>
            ) : (
              paintData.title
            )}
          </h2>
          <br />
          <h4 style={{ fontSize: "25px" }}>
            {paintData.artist_title == null || paintData.artist_title == "" ? (
              <p>Unsigned</p>
            ) : (
             `- ${paintData.artist_title} -`
            )}
          </h4>
          <br />
          <p style={{ fontStyle: "italic" }}>
            {paintData.place_of_origin == null || paintData.place_of_origin == "" ? (
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
              fontSize: "30px",
            }}
          >
            Description
          </h2>
          <p className="desc mb-0 p-1" style={{ fontStyle: "italic", fontSize: "20px" }}>
            {description.value == null || description.value == "" ? (
              <p>No description</p>
            ) : (
              <>
                {description.value.length > 70 ? (
                  <>
                    {description.value.slice(0, 70)}...
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
                              fontSize: "40px",
                            }}
                          >
                            Description
                          </h2>
                          <p style={{ fontStyle: "italic", fontSize: "20px" }}>{description.value}</p>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <p>{description.value}</p>
                )}
              </>
            )}
          </p>

          <br />
          <p className="mb-0 p-1"
            style={{
              fontStyle: "italic",
              textDecoration: "underline red",
              fontSize: "30px",
            }}
          >
            {medium.label == null || medium.label == "" ? (
              <p>No Medium</p>
            ) : (
              medium.label
            )}
          </p>
          <p>
            {medium.value == null || medium.value == "" ? (
              <p>No infos</p>
            ) : (
             ` - ${medium.value} -`
            )}
          </p>
          <br />
          <p
            style={{
              fontStyle: "italic",
              textDecoration: "underline red",
              fontSize: "30px",
            }}
          >
            {dimensions.label == null || dimensions.label == "" ? (
              <p>No Dimension</p>
            ) : (
              dimensions.label
            )}
          </p>
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

export default UniqueCard;
