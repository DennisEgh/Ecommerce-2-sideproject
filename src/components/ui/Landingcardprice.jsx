import React from "react";

const Landingcardprice = ({ originalPrice, salePrice }) => {
  return (
    <>
      <div className="price">
        {salePrice ? (
          <>
            <div>
              <span className="price--sale">${originalPrice.toFixed(2)}</span>$
              {salePrice.toFixed(2)}
            </div>
          </>
        ) : (
          <>
            <span className="price--normal">${originalPrice.toFixed(2)}</span>
          </>
        )}
      </div>
    </>
  );
};

export default Landingcardprice;
