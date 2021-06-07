import React from "react";

// Componets
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

//CSS
import * as styledCompoents from "../assets/pagestyles/futurs.module.scss";

//Images
import tests from "../assets/tests/gabou.webp";

// Markup
const Futurs = () => {
  return (
    <Layout>
      <Container>
        <div className={styledCompoents.futurs}>
          <h1>Santé</h1>
          <p>
            Tous les chiens de l'élevage sont testés ADN concernant certaines
            maladies pouvant affecter le colley, tous les tests génétiques sont
            effectués chez Animal Génétics en Floride.
          </p>
          <img src={tests} alt="" />
        </div>
      </Container>
    </Layout>
  );
};

export default Futurs;
