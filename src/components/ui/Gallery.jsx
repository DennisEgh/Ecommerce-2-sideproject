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
        See What All The Fuss Is About.
      </p>
      <Link className="item__button--link" to="/shop">
        <div className="item__button">
          <p className="button__para">SHOP</p>
        </div>
      </Link>
    </div>
  </div>,

  <div className="item pic--two" data-value="2">
       <div className="item__content">
      <h1 className="item__title">
        MADE TO LAST
      </h1>
      <p className="item__para">
        Tired Of Low Quality? We Got You Covered.
      </p>
      <Link className="item__button--link" to="/shop">
        <div className="item__button">
          <p className="button__para">SHOP</p>
        </div>
      </Link>
    </div>
  </div>,
  <div className="item pic--three" data-value="3">
       <div className="item__content">
      <h1 className="item__title">
        FASTEST DELIVERY MONEY CAN BUY
      </h1>
      <p className="item__para">
        Why Wait 1 Week When You Can Have It Now.
      </p>
      <Link className="item__button--link" to="/shop">
        <div className="item__button">
          <p className="button__para">SHOP</p>
        </div>
      </Link>
    </div>
  </div>,
];

const Gallery = () => {
  return (
    <AliceCarousel
      mouseTracking={false}
      items={items}
      autoPlay
      autoPlayInterval={3000}
      infinite
      animationDuration={1000}
    />
  );
};
export default Gallery;
