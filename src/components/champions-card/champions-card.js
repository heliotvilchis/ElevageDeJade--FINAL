import React from "react";

// CSS
import * as styleComponents from "../champions-card/champions-card.module.scss";

// Markup
const Card = ({ image, dname, undertext }) => {
  return (
    <div className={styleComponents.card}>
      <img className={styleComponents.mainpic} src={image} alt="" />
      <div>
        <h4>{dname}</h4>
        <p>{undertext}</p>
      </div>
    </div>
  );
};

export default Card;
