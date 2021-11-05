import React from "react";
import * as styledCompoents from "./dogcolors.module.scss";

//Images
import plus from "../../assets/images/couleurs/plus.svg";
import equal from "../../assets/images/couleurs/equal.svg";
import ps from "../../assets/images/couleurs/ps.svg";
import tri from "../../assets/images/couleurs/tri.svg";
import ts from "../../assets/images/couleurs/ts.svg";
import bm from "../../assets/images/couleurs/bm.svg";
import wm from "../../assets/images/couleurs/wm.svg";
import tsm from "../../assets/images/couleurs/tsm.svg";

// Markup
const DogColors = ({ first, second, ch1, ch2, ch3, ch4, ch5, ch6 }) => {
  function imageName(params) {
    if (params === "ps") {
      return ps;
    }
    if (params === "tri") {
      return tri;
    }
    if (params === "ts") {
      return ts;
    }
    if (params === "bm") {
      return bm;
    }
    if (params === "wm") {
      return wm;
    }
    if (params === "tsm") {
      return tsm;
    }
  }

  if (ch2 === "") {
    var dontExist2 = { display: "none" };
  }
  if (ch3 === "") {
    var dontExist3 = { display: "none" };
  }
  if (ch4 === "") {
    var dontExist4 = { display: "none" };
  }
  if (ch5 === "") {
    var dontExist5 = { display: "none" };
  }
  if (ch6 === "") {
    var dontExist6 = { display: "none" };
  }

  return (
    <div className={styledCompoents.line}>
      <div className={styledCompoents.parents}>
        <div className={styledCompoents.icon}>
          <img src={imageName(first)} alt={first} />
          <p>{first}</p>
        </div>
        <img src={plus} alt="plus" className={styledCompoents.plus} />
        <div className={styledCompoents.icon}>
          <img src={imageName(second)} alt={second} />
          <p>{second}</p>
        </div>
      </div>
      <div className={styledCompoents.equal}>
        <img src={equal} alt="equal" />
      </div>
      <div className={styledCompoents.babys}>
        <div className={styledCompoents.icon}>
          <img src={imageName(ch1)} alt={ch1} />
          <p>{ch1}</p>
        </div>
        <div className={styledCompoents.icon} style={dontExist2}>
          <img src={imageName(ch2)} alt={ch2} />
          <p>{ch2}</p>
        </div>
        <div className={styledCompoents.icon} style={dontExist3}>
          <img src={imageName(ch3)} alt={ch3} />
          <p>{ch3}</p>
        </div>
        <div className={styledCompoents.icon} style={dontExist4}>
          <img src={imageName(ch4)} alt={ch4} />
          <p>{ch4}</p>
        </div>
        <div className={styledCompoents.icon} style={dontExist5}>
          <img src={imageName(ch5)} alt={ch5} />
          <p>{ch5}</p>
        </div>
        <div className={styledCompoents.icon} style={dontExist6}>
          <img src={imageName(ch6)} alt={ch6} />
          <p>{ch6}</p>
        </div>
      </div>
    </div>
  );
};

export default DogColors;
