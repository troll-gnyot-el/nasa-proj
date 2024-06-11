import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import Label from "../Label/Label";
import GoogleTranslate from "../GoogleTranslate/GoogleTranslate";

function Menu({ headerStyle }) {
  return (
      <header id="header" className={"header " + headerStyle}>
        <div className="menu-container header__container">
          <Label />
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <Link className="menu__link" to="/nasa-proj">
                  Home
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" to="/nasa-proj/shop">
                  Merch
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" to="/nasa-proj/space">
                  Astronomy Picture of the Day
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" to="/nasa-proj/contact">
                  Contact Us
                </Link>
              </li>
              <li className="menu__item">
                <GoogleTranslate />
              </li>
              <li className="menu__item">
                <Link className="menu__link" to="/nasa-proj/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
}

export default Menu;
