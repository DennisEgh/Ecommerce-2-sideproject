import React from "react";
import { Link, useParams } from "react-router-dom";

import CartButtonBlack from "../components/ui/CartButtonBlack";
import Landingcardprice from "../components/ui/Landingcardprice";

const ShopSpecificBlack = ({ ads, addToCartBlack, cart }) => {
  const { id } = useParams();
  const ad = ads.find((ad) => +ad.id === +id);

  function addArticleToCartBlack(ad) {
    addToCartBlack(ad);
  }
  function articleExistsOnCart() {
    return cart.find((ad) => ad.id === +id);
  }

  return (
    <section id="shop-specific">
      <header>
        <div className="header__container">
          <div className="header__main--content">
            <div className="header__pictures">
              <p className="article__name">
                <Link className="home__link" to="/Shop">
                  Shop
                </Link>{" "}
                / {ad.title}
              </p>
              <img className="header__img" src={ad.url} alt="" />

              <div className="header__pictures--second">
                <img className="header__img--second" src={ad.url2} alt="" />
                <img className="header__img--second" src={ad.url3} alt="" />
              </div>
            </div>
            <div className="article__information">
              <div className="flexbox">
                <div className="article__title--container">
                  <h1 className="article__title">{ad.title} </h1>
                  <Landingcardprice
                    salePrice={ad.salePrice}
                    originalPrice={ad.originalPrice}
                  />
                </div>
                <p className="article__maker">{ad.maker}</p>
              </div>
              {ad.id && ad.specific === "humidifier" ? (
                <div className="sizes__container">
                  <div className="size__info">
                    <p className="size__title">SELECT SIZE</p>
                    <ul className="sizes__options">

                 
                        <Link
                          className="options__link "
                          to={`/shop/${id}`}
                        >
                          <li className="option">Pink</li>
                        </Link>
                        <Link
                          className="options__link link__active"
                          to={`/shop/${id}/variant=black`}
                        >
                          <li className="option">Black</li>
                        </Link>
                        <Link
                          className="options__link"
                          to={`/shop/${id}/variant=white`}
                        >
                          <li className="option">White</li>
                        </Link>
                    
                    
                    </ul>
                  </div>
                </div>
              ) : null}
              

              <div className="buy__section">
                {articleExistsOnCart() ? (
                  <div className="cart__button noPointer">
                    <p className="cart__title">ADDED TO BAG</p>
                  </div>
                ) : (
                  <CartButtonBlack ad={ad} addArticleToCartBlack={addArticleToCartBlack} />
                )}

                <div className="buy__info">
                  <div className="info__container">
                    <img
                      className="buy__info--img"
                      src="https://images.ctfassets.net/wl6q2in9o7k3/3TTxDiEbj6vogj8lmy6oUX/53818962f5dab372d9b6d2ceaef65fbf/replay.png"
                      alt=""
                    />
                    <p className="buy__info--para">
                      30 Days Money Back Guarantee
                    </p>
                  </div>
                  <div className="info__container">
                    <img
                      className="buy__info--img"
                      src="https://images.ctfassets.net/wl6q2in9o7k3/23j5KZMZyP2yRAbkGuthR2/ab811fbf8e9678221dffc74d930b2ee3/Order.svg"
                      alt=""
                    />
                    <p className="buy__info--para">
                      Free Shipping On Orders Over $70
                    </p>
                  </div>
                  <div className="info__container">
                    <img
                      className="buy__info--img"
                      src="https://images.ctfassets.net/wl6q2in9o7k3/7mSTqYj4UaUW361hJ5Ev5q/e2a5f088fef7e2f2cc8e34f1d25e7bd3/Combined_Shape__2_.svg"
                      alt=""
                    />
                    <p className="buy__info--para">Safe And Quick</p>
                  </div>
                </div>
              </div>
              <div className="article__info">
                <h4 className="ad__title">DESCRIPTION</h4>
                <p className="ad__description">{ad.description}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default ShopSpecificBlack;
