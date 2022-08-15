import React from "react";
import Gallery from "./ui/Gallery";
import "../index.css";

import Landingcard from "./ui/Landingcard";
import { Link } from "react-router-dom";

const Landing = ({ ads }) => {
  return (
    <section id="landing">
      <header>
        <Gallery></Gallery>
        <div className="header__container">
          <div className="header__description">
            <div className="description__container">
              <p className="header__para">WOMENS</p>
              <h1 className="header__title">NEW RELEASES</h1>
            </div>
          </div>
          <div className="cards">
            {ads
              .filter((ads) => ads.new === true)
              .slice(0, 4)
              .map((ads) => (
                <Landingcard ads={ads} key={ads.id} />
              ))}
          </div>
        </div>
        <div className="header__container">
          <div className="header__description">
            <div className="description__container">
              <p className="header__para">WOMENS</p>
              <h1 className="header__title">POPULAR</h1>
            </div>
          </div>
          <div className="cards">
            {ads
              .filter((ads) => ads.popular === true)
              .slice(0, 4)
              .map((ads) => (
                <Landingcard ads={ads} key={ads.id} />
              ))}
          </div>
        </div>
        <div className="header__container">
          <div className="header__description">
            <div className="description__container">
              <p className="header__para">ACCESSORIES</p>
              <h1 className="header__title">POPULAR</h1>
            </div>
          </div>
          <div className="cards">
            {ads
              .filter(
                (ads) => ads.popular === true && ads.category === "accessories"
              )
              .slice(0, 4)
              .map((ads) => (
                <Landingcard ads={ads} key={ads.id} />
              ))}
          </div>
        </div>
      </header>
      <section id="explore">
        <div className="explore__interaction">
          <h1 className="explore__title">Explore our assortment</h1>
          <Link to="/shop">
            <div className="explore__button">SHOP</div>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Landing;
