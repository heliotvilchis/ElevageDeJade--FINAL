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
          <ul>
            <li>PS Pure For Sable (pure sable)</li>
            <li>TRI Tricolor (tricolore)</li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

export default Futurs;
