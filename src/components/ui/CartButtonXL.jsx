import React from 'react';

const CartButtonXL = ({ad, addArticleToCart}) => {
    return (
        <>
        {ad.size5 === "XL" ? (
          <div onClick={() => addArticleToCart(ad)} className="cart__button">
            <p className="cart__title">ADD TO BAG</p>
          </div>
        ) : (
          <div className="cart__button noPointer">
            <p className="cart__title">OUT OF STOCK</p>
          </div>
        )}
      </>
    );
}

export default CartButtonXL;
