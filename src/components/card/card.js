import React from "react";

// CSS
import * as styleComponents from "../card/card.module.scss";

// Images
import male from "../../assets/images/icons/male.svg";
import female from "../../assets/images/icons/female.svg";

function malefemale(params) {
  if (params === "m") {
    return <img className={styleComponents.icon} src={male} alt="" />;
  }
  if (params === "f") {
    return <img className={styleComponents.icon} src={female} alt="" />;
  }
}

// Markup
const Card = ({ image, dname, gender }) => {
  return (
    <div className={styleComponents.card}>
      <img src={image} alt="" />
      <div>
        <h4>{dname}</h4>
        {malefemale(gender)}
      </div>
    </div>
  );
};

export default Card;
