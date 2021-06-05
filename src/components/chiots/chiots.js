import React from "react";

// Images
import m from "../../assets/images/icons/male.svg";
import f from "../../assets/images/icons/female.svg";

// CSS
import * as styleComponents from "../chiots/chiots.module.scss";

// Markup
const Chiots = ({ date, infos, nomm, nomf, imgm, imgf }) => {
  return (
    <section className={styleComponents.chiots}>
      <h2>{date}</h2>
      <p>{infos}</p>
      <div className={styleComponents.flex}>
        <div className={styleComponents.half}>
          <img className={styleComponents.dogimg} src={imgm} alt="" />
          <h3>
            {nomm}
            <img className={styleComponents.icon} src={m} alt="" />
          </h3>
        </div>
        <div className={styleComponents.half}>
          <img className={styleComponents.dogimg} src={imgf} alt="" />
          <h3>
            {nomf}
            <img className={styleComponents.icon} src={f} alt="" />
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Chiots;
