import React from "react";

// CSS
import * as componentStyles from "./footer.module.scss";

// Components
import Container from "../container/container";

// Markup
const Footer = ({ children }) => {
  return (
    <div className={componentStyles.footer}>
      <Container>
        <h1>footer</h1>
        {children}
      </Container>
    </div>
  );
};

export default Footer;
