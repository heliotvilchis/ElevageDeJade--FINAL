import React from "react";

// CSS
import * as styleComponents from "../chiens/chiens.module.scss";

// Markup
const Chiens = ({ img, dname, undertext, born, color, children }) => {
  return (
    <div className={styleComponents.chiens}>
      <img src={img} alt="" />
      <div className={styleComponents.data}>
        <h2>{dname}</h2>
        <p>{undertext}</p>
        <p>{children}</p>
        <p>{born}</p>
        <p>{color}</p>
        <button>Album</button>
        <button>Tests</button>
        <button>Pedigree</button>
      </div>
    </div>
  );
};

export default Chiens;
