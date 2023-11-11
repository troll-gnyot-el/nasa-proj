import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
// import Logo from "./planet.png";
import Label from "../Label/Label";
function Menu(headerStyle) {
  return (
    <header id="header" className={"header " + headerStyle}>
      <div className="menu-container header__container">
        {/*<a href="src/components/Menu#" className="logo">*/}
          {/*<img className="logo__img" src={Logo} alt="Logo" />*/}
          <Label/>
        {/*</a>*/}
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
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
