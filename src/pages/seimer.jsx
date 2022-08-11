import React from "react";
import { Link, useParams } from "react-router-dom";
import Landingcardprice from "../components/ui/Landingcardprice";

const Seimer = ({ ads }) => {
  const { id } = useParams();
  const ad = ads.find((ads) => +ads.id === +id);

  return (
    <section id="shop-specific">
      <header>
        <div className="header__container">
          <p className="article__name">
            <Link className="home__link" to="/">Home</Link> / <Link className="home__link" to="/shop-leggings">Leggings</Link> / {ad.title}
          </p>
          <div className="header__main--content">
            <div className="header__pictures">
              <img className="header__img" src={ad.url} alt="" />

              <div className="header__pictures--second">
                <img className="header__img--second" src={ad.url2} alt="" />
                <img className="header__img--second" src={ad.url3} alt="" />
              </div>
            </div>
            <div className="article__information">
              <div className="article__title--container">
                <h1 className="article__title">{ad.title} </h1>
                <p className="article__price">${ad.originalPrice}</p>
              </div>
              <p className="article__maker">{ad.maker}</p>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Seimer;
