import React from "react";

//CSS
import "../layout/layout.module.scss";

// COMPONENTS
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";

// Markup
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
