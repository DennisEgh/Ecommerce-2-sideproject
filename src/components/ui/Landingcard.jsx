import React from "react";
import Landingcardprice from "./Landingcardprice";

const Landingcard = ({ ads }) => {
  return (
    
      <div className="card">
        <img className="card__img" src={ads.url} alt="" />
        <div className="card__description">
          <div className="card__description--top">
            <p className="description__para--top">NEW</p>
            <Landingcardprice
              salePrice={ads.salePrice}
              originalPrice={ads.originalPrice}
            />
          </div>
          <p className="description__para--mid">Leggings</p>
          <p className="description__para--bot">Green Melange</p>
        </div>
      </div>
    
  );
};

export default Landingcard;
