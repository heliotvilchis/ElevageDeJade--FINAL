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
              <img src={logo} alt="Élevage de Jade" />
              Élevage de Jade
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
        </header>
      </Container>
    </div>
  );
};

export default NavBar;
