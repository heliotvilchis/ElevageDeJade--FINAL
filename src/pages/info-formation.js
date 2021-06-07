import React from "react";

// Componets
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

//CSS
import * as styledCompoents from "../assets/pagestyles/futurs.module.scss";

//Images
import dip from "../assets/images/diplome.jpg";

// Markup
const Futurs = () => {
  return (
    <Layout>
      <Container>
        <div className={styledCompoents.futurs}>
          <h1>Formations</h1>
          <img src={dip} alt="" />
        </div>
      </Container>
    </Layout>
  );
};

export default Futurs;
