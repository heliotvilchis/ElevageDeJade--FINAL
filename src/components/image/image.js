import React from "react";

import * as styledComponets from "../image/image.module.scss";

// Markup
const Image = ({ source, alttext }) => {
  return <img id={styledComponets.image} src={source} alt={alttext} />;
};

export default Image;
