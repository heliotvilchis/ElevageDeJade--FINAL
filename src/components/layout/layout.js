import React from "react";

//CSS
import * as styleComponents from "./layout.module.scss";

// COMPONENTS
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";

// Markup
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <main className={styleComponents.main}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
