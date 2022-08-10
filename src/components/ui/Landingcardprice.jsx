import React from "react";

const Landingcardprice = ({ originalPrice, salePrice }) => {
  return (
    <>
      {salePrice ? (
        <>
          (<span className="price--normal">{originalPrice.toFixed(2)}</span>
          {salePrice.toFixed(2)})
        </>
      ) : (
        <>
          <span className="price--normal">${originalPrice.toFixed(2)}</span>
        </>
      )}
    </>
  );
};

export default Landingcardprice;
