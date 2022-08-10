import React from "react";
import { Link } from "react-router-dom";
import Landingcardprice from "./Landingcardprice";

const Landingcard = ({ ads }) => {
  return (
    <div className="card">
      <Link className="card__link" to={`/shop/${ads.id}`}>
        <img className="card__img" src={ads.url} alt="" />
        <div className="card__description">
          {ads.new ? (
            <div className="card__description--top">
              <p className="description__para--top">NEW</p>
            </div>
          ) : (
            <div className="card__description--top">
              <p className="description__para--top inactive">NEW</p>
            </div>
          )}
          <Landingcardprice
            salePrice={ads.salePrice}
            originalPrice={ads.originalPrice}
          />
          <p className="description__para--mid">{ads.maker}</p>
          <p className="description__para--bot">{ads.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Landingcard;
