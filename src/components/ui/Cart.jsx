import React from "react";
import Landingcardprice from "./Landingcardprice";

const Cart = ({ cart, incrementQuantity, decrementQuantity, removeItem }) => {
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +((item.salePrice || item.originalPrice) * item.quantity);
    });
    return price;
  };
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
            <h1 className="bag__total">TOTAL: ${total().toFixed(2)}</h1>
            {cart.map((ad) => {
              return (
                <div className="bag__item" key={ad.id}>
                  <img className="bag__image" src={ad.url} alt="" />
                  <div className="bag__info">
                    <h1 className="bag__title">{ad.maker}</h1>
                    <p className="bag__para">{ad.title}</p>
                    {ad.category === "clothes" ? (
                      <p className="bag__size">Size: {ad.CHOSEN_SIZE}</p>
                    ) : null}
                    <Landingcardprice
                      salePrice={ad.salePrice}
                      originalPrice={ad.originalPrice}
                    />{" "}
                    <div className="bag__quantity">
                      {ad.quantity <= 1 ? (
                        <div
                          className="decrement noPointer"
                          value={ad.quantity}
                          onClick={() => decrementQuantity(ad, ad.quantity)}
                        >
                          -
                        </div>
                      ) : (
                        <div
                          className="decrement"
                          value={ad.quantity}
                          onClick={() => decrementQuantity(ad, ad.quantity)}
                        >
                          -
                        </div>
                      )}

                      <div className="counter">{ad.quantity}</div>
                      {ad.quantity >= 99 ? (
                        <div
                          value={ad.quantity}
                          className="increment noPointer"
                          onClick={() => incrementQuantity(ad, ++ad.quantity)}
                        >
                          +
                        </div>
                      ) : (
                        <div
                          value={ad.quantity}
                          className="increment"
                          onClick={() => incrementQuantity(ad, ++ad.quantity)}
                        >
                          +
                        </div>
                      )}

                      <div
                        onClick={() => removeItem(ad)}
                        className="bag__remove"
                      >
                        Remove
                      </div>
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
