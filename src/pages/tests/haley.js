import React from "react";

// Componets
import Container from "../../components/container/container";
import Layout from "../../components/layout/layout";

//CSS
import * as styleComponets from "../../assets/styles/tests.module.scss";

// Images

// Markup
const Tests = () => {
  return (
    <Layout>
      <Container>
        <div className={styleComponets.tests}>
          <h1>Non disponible</h1>
        </div>
      </Container>
    </Layout>
  );
};

export default Tests;
