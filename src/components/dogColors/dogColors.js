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
import psm from "../../assets/images/couleurs/psm.svg";
import nonwf1 from "../../assets/images/couleurs/nonwf1.svg";
import nonwf2 from "../../assets/images/couleurs/nonwf2.svg";
import wf1 from "../../assets/images/couleurs/wf1.svg";
import wf2 from "../../assets/images/couleurs/wf2.svg";
import wf3 from "../../assets/images/couleurs/wf3.svg";
import wfbm from "../../assets/images/couleurs/wfbm.svg";
import white1 from "../../assets/images/couleurs/white1.svg";
import white2 from "../../assets/images/couleurs/white2.svg";
import white3 from "../../assets/images/couleurs/white3.svg";
import white4 from "../../assets/images/couleurs/white4.svg";

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
    if (params === "psm") {
      return psm;
    }
    if (params === "nonwf1") {
      return nonwf1;
    }
    if (params === "nonwf2") {
      return nonwf2;
    }
    if (params === "wf1") {
      return wf1;
    }
    if (params === "wf2") {
      return wf2;
    }
    if (params === "wf3") {
      return wf3;
    }
    if (params === "wfbm") {
      return wfbm;
    }
    if (params === "white1") {
      return white1;
    }
    if (params === "white2") {
      return white2;
    }
    if (params === "white3") {
      return white3;
    }
    if (params === "white4") {
      return white4;
    }
  }

  //change name
  function changename(params) {
    if (
      params === "white1" ||
      params === "white2" ||
      params === "white3" ||
      params === "white4"
    ) {
      return "white";
    }
    if (params === "wf1" || params === "wf2" || params === "wf3") {
      return "wf";
    }
    if (params === "nonwf1" || params === "nonwf2") {
      return "non wf";
    } else {
      return params;
    }
  }

  //change display or not
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
          <p>{changename(first)}</p>
        </div>
        <img src={plus} alt="plus" className={styledCompoents.plus} />
        <div className={styledCompoents.icon}>
          <img src={imageName(second)} alt={second} />
          <p>{changename(second)}</p>
        </div>
      </div>
      <div className={styledCompoents.equal}>
        <img src={equal} alt="equal" />
      </div>
      <div className={styledCompoents.babys}>
        <div className={styledCompoents.icon}>
          <img src={imageName(ch1)} alt={ch1} />
          <p>{changename(ch1)}</p>
        </div>
        <div className={styledCompoents.icon} style={dontExist2}>
          <img src={imageName(ch2)} alt={ch2} />
          <p>{changename(ch2)}</p>
        </div>
        <div className={styledCompoents.icon} style={dontExist3}>
          <img src={imageName(ch3)} alt={ch3} />
          <p>{changename(ch3)}</p>
        </div>
        <div className={styledCompoents.icon} style={dontExist4}>
          <img src={imageName(ch4)} alt={ch4} />
          <p>{changename(ch4)}</p>
        </div>
        <div className={styledCompoents.icon} style={dontExist5}>
          <img src={imageName(ch5)} alt={ch5} />
          <p>{changename(ch5)}</p>
        </div>
        <div className={styledCompoents.icon} style={dontExist6}>
          <img src={imageName(ch6)} alt={ch6} />
          <p>{changename(ch6)}</p>
        </div>
      </div>
    </div>
  );
};

export default DogColors;
