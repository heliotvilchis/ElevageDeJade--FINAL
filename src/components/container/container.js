import React from "react";

//CSS
import * as containerStyles from "../container/container.module.scss";

// Markup
const Container = ({ children }) => {
  return <div className={containerStyles.container}>{children}</div>;
};

export default Container;
