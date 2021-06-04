import React from "react";

// Assets
import Contianer from "../components/container/container";
import Chiens from "../components/chiens/chiens";
import Layout from "../components/layout/layout";

// Markup
const Males = () => {
  return (
    <Layout>
      <Contianer>
        <h1>males</h1>
        <Chiens></Chiens>
      </Contianer>
    </Layout>
  );
};

export default Males;
