import React from 'react';

const CartButtonM = ({ad, addArticleToCart}) => {
    return (
        <>
        {ad.size3 === "M" ? (
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

export default CartButtonM;
