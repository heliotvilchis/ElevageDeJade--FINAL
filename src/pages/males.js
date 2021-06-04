import React from "react";

// Assets
import Contianer from "../components/container/container";
import Chiens from "../components/chiens/chiens";
import Layout from "../components/layout/layout";

// Images
import m1 from "../assets/images/aiko/1.webp";

// Markup
const Males = () => {
  return (
    <Layout>
      <Contianer>
        <h1>males</h1>
        <Chiens
          img={m1}
          dname="DeJade Dream in Black Gold (Aiko)"
          undertext="Co-Propriété avec Mme Bélanger"
        >
          <p>test</p>
        </Chiens>
      </Contianer>
    </Layout>
  );
};

export default Males;
