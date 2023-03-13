import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const PaintCard = () => {
  const [paintData, setPaintData] = useState([]);
  const [rangeValue, setRangeValue] = useState(24);

 

  //-Nouvelle API Chicago museum plus simple je pense à tester
  const API = "https://api.artic.edu/api/v1/artworks?limit=100";

  useEffect(() => {
    axios.get(API).then((res) => setPaintData(res.data.data));
  }, []);

  return (
    <div className="paints">
      <div className="radio-container">
        <input
          type="range"
          min="1"
          max="100"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <span className="m-3">{rangeValue}</span>
      </div>
      <ul>
        {paintData &&
          paintData
            .filter(
              (paint) =>
                paint.artist_title !== null &&
                paint.title !== null &&
                paint.image_id !== null &&
                paint.place_of_origin !== null
            )
            .sort((a, b) => a.id - b.id)
            .slice(0, rangeValue)
            .map((paint, index) => <Card key={index} paint={paint} />)}
      </ul>
    </div>
  );
};

export default PaintCard;

/* paintData.artist_title === null ? 
"unsigned" : paintData.artist_title */
