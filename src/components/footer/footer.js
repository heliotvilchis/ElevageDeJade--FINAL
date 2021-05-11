import React from "react";

// CSS
import * as componentStyles from "./footer.module.scss";

// Components
import Container from "../container/container";
import Link from "../link/link";

// Markup
const Footer = () => {
  return (
    <div className={componentStyles.footer}>
      <Container>
        <Link to="https://heliotvilchis.com/">
          <span>© 2021 Heliot Vilchis. Tous&nbsp;droits&nbsp;réservés</span>
        </Link>
      </Container>
    </div>
  );
};

export default Footer;
