import React from "react";

const CartButtonBlack = ({ ad, addArticleToCartBlack }) => {
  return (
    <>
      {ad.color === "black" ? (
        <div onClick={() => addArticleToCartBlack(ad)} className="cart__button">
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

export default CartButtonBlack;
