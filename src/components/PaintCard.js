import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

const PaintCard = () => {
  //!Constants
  const [paintData, setPaintData] = useState([]);
  const [rangeValue, setRangeValue] = useState(4);
  const [loading, setLoading] = useState(true);

  //!Constants API
  const API = "https://api.artic.edu/api/v1/artworks?limit=100";

  //!Functions
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    axios
      .get(API)
      .then((res) => setPaintData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="paints">
      <div className="radio-container">
        <input
          type="range"
          min="1"
          max="100"
          style={{color: "black"}}
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <span className="m-2" style={{color: "black"}}>{rangeValue}</span>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <ul className="margin-card">
          {paintData &&
            paintData
              .filter(
                (paint) =>
                  paint.artist_title != null &&
                  paint.title != null &&
                  paint.image_id != null &&
                  paint.place_of_origin != null
              )
              .sort((a, b) => a.id - b.id)
              .slice(0, rangeValue)
              .map((paint, index) => <Card key={index} paint={paint} />)}
        </ul>
      )}
    </div>
  );
};

export default PaintCard;
