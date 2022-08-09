import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


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
                <Link className="nav__link nav__link--middle" to="/">WOMENS</Link>
            </li>
            <li className="nav__list nav__list--shoes">
            <div className="nav__list--menu">
              <h1>oooo</h1>
            </div>
                <Link className="nav__link nav__link--middle" to="/">SHOES</Link>
            </li>
            <li className="nav__list nav__list--accessories">
            <div className="nav__list--menu "></div>
                <Link className="nav__link nav__link--middle" to="/">ACCESSORIES</Link>
            </li>
        </ul>
        <ul className="nav__links">
            <li className="nav__list">
                <Link className="nav__link" to="/">CART</Link>
            </li>
            <li className="nav__list">
                <Link className="nav__link" to="/">ACCOUNT</Link>
            </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Nav;
