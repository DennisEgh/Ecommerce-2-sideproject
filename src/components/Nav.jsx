import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import bag from "../assets/bag.webp";
import hamburger from "../assets/Hamburger_icon.svg";
import Cart from "./ui/Cart";
const Nav = ({ numberOfItems, cart, changeQuantity, removeItem }) => {
  

  function toggleCart(){
    document.querySelector("#checkout").classList.toggle("checkout__visible")
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
          <li className="nav__list nav__list--shoes">
            <Link className="nav__link nav__link--middle" to="/">
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
              <img onClick={toggleCart} className="cart__logo" src={bag} alt="" />
              <Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />
              {numberOfItems() > 0 && (
                <div onClick={toggleCart}  className="cart__length">{numberOfItems()}</div>
              )}
            </div>
          </li>
          <li className="nav__list">
            <Link className="nav__link" to="/">
              ACCOUNT
            </Link>
          </li>
          <li className="nav__list burger__menu">
            <img src={hamburger} alt="" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
