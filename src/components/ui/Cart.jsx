import React from "react";
import Landingcardprice from "./Landingcardprice";

const Cart = ({ cart, addQuantity }) => {
  return (
    <section id="checkout">
      <div className="checkout__upper">
        <h1 className="checkout__title">YOUR BAG</h1>
      </div>
      {cart.length === 0 && (
        <div className="checkout__lower">
          <h1 className="empty__bag">Your Bag Is Empty</h1>
        </div>
      )}

      {cart.length > 0 && (
        <div className="checkout__lower">
          <div className="bag__items">
            {cart.map((ad) => {
              return (
                <div className="bag__item">
                  <img className="bag__image" src={ad.url} alt="" />
                  <div className="bag__info">
                    <h1 className="bag__title">{ad.maker}</h1>
                    <p className="bag__para">{ad.title}</p>
                    <p className="bag__size">Size: {ad.CHOSEN_SIZE}</p>
                    <Landingcardprice
                      salePrice={ad.salePrice}
                      originalPrice={ad.originalPrice}
                    />{" "}
                          <div className="bag__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="bag__input"
                          value={ad.quantity}
                          onChange={(event) =>
                            addQuantity(ad, event.target.value)
                          }
                        />
                      </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="checkout__button">CHECKOUT</div>
        </div>
      )}
    </section>
  );
};

export default Cart;
