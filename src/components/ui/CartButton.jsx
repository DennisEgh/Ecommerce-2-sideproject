import React from "react";

const CartButton = ({ ad, addArticleToCart }) => {
  return (
    <>
      {ad.categpry === "clothes" ? (
        <>
          {ad.size1 === "XS" ? (
            <div onClick={() => addArticleToCart(ad)} className="cart__button">
              <p className="cart__title">ADD TO BAG</p>
            </div>
          ) : (
            <div className="cart__button noPointer">
              <p className="cart__title">OUT OF STOCK</p>
            </div>
          )}
        </>
      ) : (
        <div onClick={() => addArticleToCart(ad)} className="cart__button">
          <p className="cart__title">ADD TO BAG</p>
        </div>
      )}
    </>
  );
};

export default CartButton;
