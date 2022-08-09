import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

const items = [
  <div className="item pic--one" data-value="1">
    <div className="item__content">
      <h1 className="item__title">
        BEST SELLERS
      </h1>
      <p className="item__para">
        See what all the fuss is about
      </p>
      <Link to="/">
        <div className="item__button">
          <p className="button__para">SHOP</p>
        </div>
      </Link>
    </div>
  </div>,

  <div className="item pic--two" data-value="2"></div>,
];

const Gallery = () => {
  return (
    <AliceCarousel
      mouseTracking={false}
      items={items}
      autoPlayInterval={3000}
      infinite
      animationDuration={1000}
    />
  );
};
export default Gallery;
