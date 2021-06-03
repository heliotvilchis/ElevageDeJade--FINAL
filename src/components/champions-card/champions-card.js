import React from "react";

// CSS
import * as styleComponents from "../champions-card/champions-card.module.scss";

// Markup
const Card = ({ image, dname, children }) => {
  return (
    <div className={styleComponents.card}>
      <img className={styleComponents.mainpic} src={image} alt="" />
      <div>
        <h3>{dname}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Card;
