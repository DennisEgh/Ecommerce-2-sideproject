import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import bag from "../assets/bag.webp";
import hamburger from "../assets/Hamburger_icon.svg";
import Cart from "./ui/Cart";
const Nav = ({ numberOfItems, cart, incrementQuantity, decrementQuantity, removeItem }) => {
  function toggleCart() {
    document.querySelector("#checkout").classList.toggle("checkout__visible");
  }
  function toggleMenu(){
    document.querySelector(".menu").classList.toggle("menu__active");
    document.querySelector(".menu__bg").classList.toggle("menu--bg__active");
    document.querySelector("#checkout").classList.remove("checkout__visible");
    document.querySelector(".filter__menu").classList.remove("filter__menu--active");
    document.body.classList.toggle("overflowhidden")
    
  }


  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <ul className="nav__links ">
          <li className="nav__list nav__list--women">
            <Link className="nav__link nav__link--middle" to="/shop">
              WOMENS
            </Link>
          </li>
          <li className="nav__list nav__list--shoes notAllowed">
            <Link className="nav__link nav__link--middle notAllowed" to="/">
              FRAGRANCES
            </Link>
          </li>
          <li className="nav__list nav__list--accessories">
            <Link
              className="nav__link nav__link--middle"
              to="/shop-accessories"
            >
              ACCESSORIES
            </Link>
          </li>
        </ul>
        <ul className="nav__links nav__links--end">
          <li className="nav__list cart">
            <div className="nav__link" to="/">
              <img
                onClick={toggleCart}
                className="cart__logo"
                src={bag}
                alt=""
              />
              <Cart
                cart={cart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeItem={removeItem}
              />
              {numberOfItems() > 0 && (
                <div onClick={toggleCart} className="cart__length">
                  {numberOfItems()}
                </div>
              )}
            </div>
          </li>
          <li className="nav__list">
            <Link className="nav__link notAllowed" to="/">
              ACCOUNT
            </Link>
          </li>
          <li className="nav__list burger__menu">
            <img src={hamburger} onClick={toggleMenu} alt="" />
            <div onClick={toggleMenu} className="menu__bg"></div>
            <div className="menu">
              <img onClick={toggleMenu} className="menu__close" src="https://icons-for-free.com/download-icon-x+mark+icon-1320196411777857464_512.png" alt="" />
              <ul className="menu__lists">
                <h1 className="menu__title">WOMENS</h1>
                <li className="menu__list">
                  <Link onClick={toggleMenu} className="menu__link" to="/shop-bras">
                    Sports Bras
                  </Link>
                </li>
                <li className="menu__list">
                  <Link onClick={toggleMenu} className="menu__link" to="/shop-leggings">
                    Leggings
                  </Link>
                </li>
                <li className="menu__list">
                  <Link onClick={toggleMenu} className="menu__link" to="/shop-shorts">
                    Shorts
                  </Link>
                </li>
                
                <li className="menu__list">
                  <Link onClick={toggleMenu} className="menu__link" to="">
                    T Shirts & Tops
                  </Link>
                </li>
              </ul>

              <ul className="menu__lists">
                <h1 className="menu__title">GENERAL ITEMS</h1>
                <li className="menu__list">
                  <Link onClick={toggleMenu} className="menu__link" to="/shop-accessories">
                    Accessories
                  </Link>
                </li>
                <li className="menu__list">
                  <Link onClick={toggleMenu} className="menu__link" to="">
                    Fragrances
                  </Link>
                </li>
              </ul>
              <ul className="menu__lists">
                <h1 className="menu__title">USER</h1>

                <li className="menu__list">
                  <Link onClick={toggleMenu} className="menu__link" to="">
                    Account
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
