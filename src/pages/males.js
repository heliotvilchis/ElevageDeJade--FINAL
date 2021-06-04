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
        <h1>Nos Mâles</h1>
        <Chiens
          img={m1}
          dname="DeJade Dream in Black Gold (Aiko)"
          undertext="Co-Propriété avec Mme Bélanger"
          born="Né le 4 juin 2020"
          color="Couleur: Tricolore"
        >
          <p></p>
          <p> </p>
          <p>Tests ADN</p>
        </Chiens>
      </Contianer>
    </Layout>
  );
};

export default Males;
