import React from "react";

import Container from "../components/container/container";
import Layout from "../components/layout/layout";

import rec from "../assets/images/nouvelles/rec.webp";
// Markup
const Reco = () => {
  return (
    <Layout>
      <Container>
        <h1>Reconnaissances</h1>
        <img src={rec} alt="" style={{ width: "100%" }} />
      </Container>
    </Layout>
  );
};

export default Reco;
