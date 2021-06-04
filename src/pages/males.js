import React from "react";

// Assets
import Contianer from "../components/container/container";
import Chiens from "../components/chiens/chiens";
import Layout from "../components/layout/layout";

// Images
import m1 from "../assets/images/aiko/1.webp";

// CSS
import * as styleComponents from "../assets/pagestyles/males.module.scss";

// Markup
const Males = () => {
  return (
    <Layout>
      <Contianer>
        <h1 className={styleComponents.males}>Nos Mâles</h1>
        <Chiens
          img={m1}
          dname="DeJade Dream in Black Gold ( Aiko )"
          undertext="Co-Propriété avec Mme Bélanger"
          born="Né le 4 juin 2020"
          color="Couleur: Tricolore"
          aurl="/albums/aiko"
        >
          <p>
            <b>Yeux :</b> normaux, possible non-porteurs
          </p>
          <p>
            <b>CN : </b> Normal/normal
          </p>
          <p>
            <b>Yeux :</b> normaux, possible non-porteurs
          </p>
          <p>
            <b>Yeux :</b> normaux, possible non-porteurs
          </p>
          <p>
            <b>Yeux :</b> normaux, possible non-porteurs
          </p>
        </Chiens>
      </Contianer>
    </Layout>
  );
};

export default Males;
