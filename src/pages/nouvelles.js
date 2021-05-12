import * as React from "react";

// Components
import Layout from "../components/layout/layout";
import Container from "../components/container/container";

// CSS
import * as componentStyles from "../assets/styles/nouvelles.module.scss";

// markup
const NouvellesPage = () => {
  return (
    <Layout>
      <Container>
        <h1>Nouvelles</h1>
      </Container>
    </Layout>
  );
};

export default NouvellesPage;
