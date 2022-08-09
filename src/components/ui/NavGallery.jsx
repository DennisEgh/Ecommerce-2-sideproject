import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="nav-gallery item" data-value="1">
<p className="nav-gallery__para">POWERED BY KLARNA</p>
  </div>,

  <div className="nav-gallery item" data-value="2">
   <p className="nav-gallery__para">30 DAY MONEY BACK GUARANTEE</p>
  </div>,
];

const NavGallery = () => {
  return (
    <AliceCarousel
      mouseTracking={false}
      items={items}
      autoPlay
      autoPlayInterval={5000}
      infinite
      animationDuration={3000}
    />
  );
};
export default NavGallery;
