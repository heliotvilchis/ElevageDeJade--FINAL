import React from "react";

// Componets
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

import DogColors from "../components/dogColors/dogColors";

//CSS
import * as styledCompoents from "../assets/pagestyles/couleurs.module.scss";

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
          <DogColors
            first="ps"
            second="ps"
            ch1="ps"
            ch2=""
            ch3=""
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="ps"
            second="tri"
            ch1="ts"
            ch2=""
            ch3=""
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="ps"
            second="ts"
            ch1="ps"
            ch2="ts"
            ch3=""
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="ts"
            second="tri"
            ch1="ts"
            ch2="tri"
            ch3=""
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="ts"
            second="ts"
            ch1="ps"
            ch2="ts"
            ch3="tri"
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="tri"
            second="tri"
            ch1="tri"
            ch2=""
            ch3=""
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="bm"
            second="tri"
            ch1="bm"
            ch2="tri"
            ch3=""
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="bm"
            second="bm"
            ch1="bm"
            ch2="tri"
            ch3="wm"
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="bm"
            second="ts"
            ch1="ts"
            ch2="bm"
            ch3="tsm"
            ch4="tri"
            ch5=""
            ch6=""
          />
          <DogColors
            first="bm"
            second="ps"
            ch1="ts"
            ch2="tri"
            ch3=""
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="wm"
            second="tri"
            ch1="bm"
            ch2=""
            ch3=""
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="tsm"
            second="tri"
            ch1="tsm"
            ch2="bm"
            ch3="ts"
            ch4="tri"
            ch5=""
            ch6=""
          />
          <DogColors
            first="tsm"
            second="ts"
            ch1="ts"
            ch2="tsm"
            ch3="bm"
            ch4="tri"
            ch5="psm"
            ch6="ps"
          />
          <DogColors
            first="tsm"
            second="ps"
            ch1="ps"
            ch2="psm"
            ch3="ts"
            ch4="tsm"
            ch5=""
            ch6=""
          />
          <DogColors
            first="psm"
            second="tri"
            ch1="tsm"
            ch2="ts"
            ch3=""
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="white1"
            second="white2"
            ch1="white1"
            ch2=""
            ch3=""
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="wf1"
            second="wf1"
            ch1="white1"
            ch2="wf1"
            ch3="nonwf1"
            ch4=""
            ch5=""
            ch6=""
          />
          <DogColors
            first="wfbm"
            second="white2"
            ch1="white4"
            ch2="white2"
            ch3="wf2"
            ch4="wf1"
            ch5=""
            ch6=""
          />
          <DogColors
            first="white2"
            second="nonwf2"
            ch1="wf3"
            ch2=""
            ch3=""
            ch4=""
            ch5=""
            ch6=""
          />
        </div>
      </Container>
    </Layout>
  );
};

export default Futurs;
