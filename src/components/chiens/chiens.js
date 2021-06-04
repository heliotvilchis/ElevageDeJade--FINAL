import React from "react";

// CSS
import * as styleComponents from "../chiens/chiens.module.scss";

// Markup
const Chiens = ({ dname, undertext, img, children }) => {
  return (
    <div className={styleComponents.chiens}>
      <img src={img} alt="" />
      <h3>{dname}</h3>
      <p>{undertext}</p>
      <p>{children}</p>
      <button>Album</button>
      <button>Tests</button>
      <button>Pedigree</button>
    </div>
  );
};

export default Chiens;
