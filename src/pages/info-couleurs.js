import React from "react";

// Componets
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

//CSS
import * as styledCompoents from "../assets/pagestyles/futurs.module.scss";

//Images

// Markup
const Futurs = () => {
  return (
    <Layout>
      <Container>
        <div className={styledCompoents.futurs}>
          <h1>Charte des couleurs</h1>
          <p>Légende:</p>
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
              <b>PS : </b>
            </big>
            Pure For Sable (pure sable)
          </p>
          <p>
            <big>
              <b>PS : </b>
            </big>
            Pure For Sable (pure sable)
          </p>
          <p>
            <big>
              <b>PS : </b>
            </big>
            Pure For Sable (pure sable)
          </p>
          <p>
            <big>
              <b>PS : </b>
            </big>
            Pure For Sable (pure sable)
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default Futurs;
