import React from "react";

// Componets
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

//CSS
import * as styledCompoents from "../assets/pagestyles/couleurs.module.scss";

//Images
import plus from "../assets/images/couleurs/plus.svg";
import equal from "../assets/images/couleurs/equal.svg";
import ps from "../assets/images/couleurs/ps.svg";
import tri from "../assets/images/couleurs/tri.svg";
import ts from "../assets/images/couleurs/ts.svg";

// Markup
const Futurs = () => {
  return (
    <Layout>
      <Container>
        <div className={styledCompoents.colors}>
          <h1>Charte des couleurs</h1>
          <div className={styledCompoents.legend}>
            <h2>Légende :</h2>
            <p>
              <big>
                <b>PS : </b>
              </big>
              Pure For Sable (pure sable)
            </p>
            <p>
              <big>
                <b>TRI : </b>
              </big>
              Tricolor (tricolore)
            </p>
            <p>
              <big>
                <b>TS : </b>
              </big>
              Tri-Factored Sable (sable facteur tricolore)
            </p>
            <p>
              <big>
                <b>BM : </b>
              </big>
              Blue Merle (bleu merle)
            </p>
            <p>
              <big>
                <b>TSM : </b>
              </big>
              Tri-Factored Sable Merle (sable merle facteur tricolore)
            </p>
            <p>
              <big>
                <b>WM : </b>
              </big>
              White Merle (merle blanc)
            </p>
            <p>
              <big>
                <b>PSM : </b>
              </big>
              Pure for Sable, Sable Merle (pure sable merle)
            </p>
            <p>
              <big>
                <b>Wf : </b>
              </big>
              White Factored (facteur blanc)
            </p>
            <p>
              <big>
                <b>WfBM : </b>
              </big>
              White Factored Blue Merle (bleu merle facteur blanc)
            </p>
            <p>
              <big>
                <b>Non : </b>
              </big>
              Non White Factored (non facteur blanc)
            </p>
            <p>
              <big>
                <b>Blanc marqué : </b>
              </big>
              soit bleue-merle,sable, tricolore ou sable-merle
            </p>
          </div>
          <div className={styledCompoents.line}>
            <div className={styledCompoents.icon}>
              <img src={ps} alt="" />
              <p>PS</p>
            </div>
            <img src={plus} alt="" />
            <div className={styledCompoents.icon}>
              <img src={ps} alt="" />
              <p>PS</p>
            </div>
            <img src={equal} alt="" />
            <div className={styledCompoents.icon}>
              <img src={ps} alt="" />
              <p>PS</p>
            </div>
          </div>
          <div className={styledCompoents.line}>
            <div className={styledCompoents.icon}>
              <img src={ps} alt="" />
              <p>PS</p>
            </div>
            <img src={plus} alt="" />
            <div className={styledCompoents.icon}>
              <img src={tri} alt="" />
              <p>TRI</p>
            </div>
            <img src={equal} alt="" />
            <div className={styledCompoents.icon}>
              <img src={ts} alt="" />
              <p>TS</p>
            </div>
          </div>
          <div className={styledCompoents.line}>
            <div className={styledCompoents.icon}>
              <img src={ps} alt="" />
              <p>PS</p>
            </div>
            <img src={plus} alt="" />
            <div className={styledCompoents.icon}>
              <img src={ts} alt="" />
              <p>TS</p>
            </div>
            <img src={equal} alt="" />
            <div className={styledCompoents.icon}>
              <img src={ps} alt="" />
              <p>PS</p>
            </div>
            <div className={styledCompoents.icon}>
              <img src={ts} alt="" />
              <p>TS</p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Futurs;
