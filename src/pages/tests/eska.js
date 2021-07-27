import React from "react";

// Componets
import Container from "../../components/container/container";
import Layout from "../../components/layout/layout";

//CSS
import * as styleComponets from "../../assets/styles/tests.module.scss";

// Images
//import tests from "../../assets/tests/eska.jpg";

// Markup
const Tests = () => {
  return (
    <Layout>
      <Container>
        <div className={styleComponets.tests}>
          {/*
          <img src={tests} alt="" />
          */}
          <h1>Disponible bientôt</h1>
        </div>
      </Container>
    </Layout>
  );
};

export default Tests;
