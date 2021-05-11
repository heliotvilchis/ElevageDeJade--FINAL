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

// Markup
const NavBar = () => {
  return (
    <div className={componentStyles.navbar}>
      <Container>
        <header>
          <div className={componentStyles.navbarIcon}>
            <Link to="/">
              <img src={logo} alt="Web Longueuil logo" />
            </Link>
          </div>
          <nav>
            <ul>
              {navbarItems.map((item) => (
                <li key={item.name}>
                  <Link to="/">{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className={componentStyles.navbarEndBtns}>
            <li>
              <Link to="/">Start free trial</Link>
            </li>
            <li>
              <Link to="/" className={componentStyles.navbarButton}>
                Log in
              </Link>
            </li>
          </ul>
        </header>
      </Container>
    </div>
  );
};

export default NavBar;
