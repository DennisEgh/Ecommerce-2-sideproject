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
        <ul className="nav__links">
            <li className="nav__list">
                <Link className="nav__link" to="/">WOMENS</Link>
            </li>
            <li className="nav__list">
                <Link className="nav__link" to="/">SHOES</Link>
            </li>
            <li className="nav__list">
                <Link className="nav__link" to="/">ACCESSORIES</Link>
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
