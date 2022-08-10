import React from "react";
import Gallery from "./ui/Gallery";
import "../index.css";
import { Link, useParams } from "react-router-dom";
import Landingcard from "./ui/Landingcard";


const Landing = ({ ads }) => {
  const { id } = useParams();
  const ad = ads.find((ads) => +ads.id === +id)
console.log(ad)
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
            <Link to="/" className="header__link">
              View All
            </Link>
          </div>
          <div className="cards">
           

            {ads
            .filter(ads => ads.new === true)
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
            <Link to="/" className="header__link">
              View All
            </Link>
          </div>
          <div className="cards">
           

            {ads
            .filter(ads => ads.popular === true)
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
            <Link to="/" className="header__link">
              View All
            </Link>
          </div>
          <div className="cards">
           

            {ads
            .filter(ads => ads.popular === true && ads.category === "accessories")
            .slice(0, 4)
            .map((ads) => (
              <Landingcard ads={ads} key={ads.id} />
              ))}
              
          </div>
        </div>
      </header>
    </section>
  );
};

export default Landing;
