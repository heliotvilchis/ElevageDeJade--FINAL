import React from "react";

// CSS
import * as componentStyles from "./navbar.module.scss";

// Components
import Container from "../container/container";
import Link from "../link/link";

// Data
import navbarItems from "../../data/nav.json";

// Assets
import logo from "../../assets/images/logo.svg";
import close from "../../assets/images/icons/close.svg";
import menu from "../../assets/images/icons/menu.svg";

// Functions

function closenav() {
  document.getElementById("mobilenav").style.display = "none";
  document.getElementById("btnnavclose").style.display = "none";
  document.getElementById("btnnavopen").style.display = "inline";
}

function opennav() {
  document.getElementById("mobilenav").style.display = "inline";
  document.getElementById("btnnavclose").style.display = "inline";
  document.getElementById("btnnavopen").style.display = "none";
}
// Markup
const NavBar = () => {
  return (
    <div className={componentStyles.navbar}>
      <Container>
        <header>
          <div className={componentStyles.navbarIcon}>
            <Link to="/">
              <img src={logo} alt="Élevage de Jade" />
              Élevage de Jade
            </Link>
          </div>
          <nav className={componentStyles.deskmenu}>
            <ul>
              {navbarItems.map((item) => (
                <li key={item.name}>
                  <Link to="/">{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            id="btnnavopen"
            className={componentStyles.btnnavopen}
            onClick={opennav}
          >
            <img src={menu} alt="menu" />
          </button>
          <button
            id="btnnavclose"
            className={componentStyles.btnnavclose}
            onClick={closenav}
          >
            <img src={close} alt="close" />
          </button>
        </header>
        <div id="mobilenav" className={componentStyles.mobilenav}>
          <nav>
            <ul>
              {navbarItems.map((item) => (
                <li key={item.name}>
                  <Link to="/">{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
