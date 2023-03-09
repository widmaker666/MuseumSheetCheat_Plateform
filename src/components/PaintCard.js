import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";


const PaintCard = () => {
  const [paintData, setPaintData] = useState([]);
  const [rangeValue, setRangeValue] = useState(24);
  
  //-Nouvelle API Chicago museum plus simple je pense à tester
  const API = "https://api.artic.edu/api/v1/artworks?limit=100";


  //-UseEffect utilisé lorsque axios à besoin de faire jouer sa recherche
  useEffect(() => {
    axios.get(API).then((res) => setPaintData(res.data.data));
  }, []);

  return (
    <div className="paints">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="100"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <p>compteur de peinture de 1 à 100 à créer(fromScratch)</p>        
      </ul>
      <ul>
        {paintData.slice(0, rangeValue).map((paint, index) => (
          <Card key={index} paint={paint} />
        ))}
      </ul>
      
    </div>
  );
};

export default PaintCard;