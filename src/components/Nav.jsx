import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/cart.webp";
import hamburger from "../assets/Hamburger_icon.svg"
const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <ul className="nav__links ">
          <li className="nav__list nav__list--women">
            <div className="nav__list--menu">
              <h1>eeee</h1>
            </div>
            <Link className="nav__link nav__link--middle" to="/">
              WOMENS
            </Link>
          </li>
          <li className="nav__list nav__list--shoes">
            <div className="nav__list--menu">
              <h1>oooo</h1>
            </div>
            <Link className="nav__link nav__link--middle" to="/">
              SHOES
            </Link>
          </li>
          <li className="nav__list nav__list--accessories">
            <div className="nav__list--menu "></div>
            <Link className="nav__link nav__link--middle" to="/">
              ACCESSORIES
            </Link>
          </li>
        </ul>
        <ul className="nav__links nav__links--end">
          <li className="nav__list cart">
            <Link className="nav__link" to="/">
              <img className="cart__logo" src={cart} alt="" />

              <div className="cart__length"></div>
            </Link>
          </li>
          <li className="nav__list">
            <Link className="nav__link" to="/">
              ACCOUNT
            </Link>
          </li>
          <li className="nav__list burger__menu">
            <img
              src={hamburger}
              alt=""
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
