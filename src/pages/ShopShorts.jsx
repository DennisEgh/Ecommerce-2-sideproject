import React from "react";
import { Link } from "react-router-dom";
import Landingcard from "../components/ui/Landingcard";
const Shopshorts = ({ads}) => {
  return (
    <section id="shop">
      <header>
        <div className="header__container">
          <div className="shop__content--upper">
            <div>
              <p className="shop--upper__para">WOMENS</p>
              <h1 className="shop--upper__title">SHORTS</h1>
            </div>
          </div>
          <div className="shop__filters">
            <h1 className="filter__title">FILTERS:</h1>
          </div>
          <div className="shop__categories">
            <Link className="categories__link link__inactive" to="/shop">
              <h1 className="categories__title title__inactive">ALL (12)</h1>
            </Link>
            <Link className="categories__link link__inactive" to="/shop-bras">
              <h1 className="categories__title title__inactive">SPORTS BRAS</h1>
            </Link>
            <Link
              className="categories__link link__inactive"
              to="/shop-leggings"
            >
              <h1 className="categories__title title__inactive">LEGGINGS</h1>
            </Link>
            <Link className="categories__link " to="/shop-shorts">
              <h1 className="categories__title ">SHORTS</h1>
            </Link>
            <Link className="categories__link link__inactive" to="/shop-accessories">
              <h1 className="categories__title title__inactive">ACCESSORIES</h1>
            </Link>
            <Link className="categories__link link__inactive" to="/shop-fragrances">
              <h1 className="categories__title title__inactive">FRAGRANCES</h1>
            </Link>
          </div>
          <div className="ads__container">
            {ads
             .filter(ads => ads.specific === "shorts")
            .map((ads) => (
              <Landingcard ads={ads} key={ads.id} />
            ))}
          </div>
        </div>
      </header>
    </section>
  );
};

export default Shopshorts;
