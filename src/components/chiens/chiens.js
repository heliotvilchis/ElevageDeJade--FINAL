import React from "react";

// CSS
import * as styleComponents from "../chiens/chiens.module.scss";

// Markup
const Chiens = ({
  img,
  dname,
  surname,
  undertext,
  born,
  color,
  children,
  aurl,
  turl,
  purl,
}) => {
  return (
    <div className={styleComponents.chiens}>
      <img src={img} alt="" />
      <div className={styleComponents.data}>
        <h2>{dname}</h2>
        <h2 className={styleComponents.surname}>{surname}</h2>
        <p>{undertext}</p>
        <p>{born}</p>
        <p>{color}</p>
        <h3>Test ADN</h3>
        <ul>{children}</ul>
        <div className={styleComponents.btns}>
          <a href={aurl}>
            <button>Album</button>
          </a>
          <a href={turl}>
            <button>Tests</button>
          </a>
          <a href={purl}>
            <button>Pedigree</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Chiens;
