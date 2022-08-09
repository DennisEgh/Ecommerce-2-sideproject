import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";




const items = [

<div className="item pic--one" data-value="1">
    <h1>hello</h1>
</div>,


<div className="item pic--two" data-value="2">
    
</div>

];

const Gallery = () => {
  return <AliceCarousel mouseTracking={false} items={items} />;
};
export default Gallery;
