import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
// import Logo from "./planet.png";
import Label from "../Label/Label";
function Menu(headerStyle) {
  return (
    <header id="header" className={"header " + headerStyle}>
      <div className="menu-container header__container">
        <a href="src/components/Menu#" className="logo">
          {/*<img className="logo__img" src={Logo} alt="Logo" />*/}
          <Label/>
        </a>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <Link className="menu__link" to="/">
                Home
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/space">
                Space news
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/shop">
                Merch
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
