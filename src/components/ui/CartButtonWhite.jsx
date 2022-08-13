import React from "react";

const CartButtonWhite = ({ ad, addArticleToCartWhite }) => {
  return (
    <>
      {ad.color2 === "WHITE" ? (
        <div onClick={() => addArticleToCartWhite(ad)} className="cart__button">
          <p className="cart__title">ADD TO BAG</p>
        </div>
      ) : (
        <div className="cart__button noPointer">
          <p className="cart__title">OUT OF STOCK</p>
        </div>
      )}
    </>
  );
};

export default CartButtonWhite;
