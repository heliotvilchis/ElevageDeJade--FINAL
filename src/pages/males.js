import React from "react";

// Assets
import Contianer from "../components/container/container";
import Chiens from "../components/chiens/chiens";
import Layout from "../components/layout/layout";

// Images
import m1 from "../assets/images/aiko/1.webp";
import m2 from "../assets/images/gabou/1.jpg";
import m3 from "../assets/images/silver-dream/1.jpg";

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
          color="Couleur : tricolore"
          aurl="/albums/aiko"
          turl="/tests/aiko"
          purl="/pedigree/aiko"
        >
          <p>
            <b>Yeux :</b> normaux, possible non-porteurs
          </p>
          <p>
            <b>CN : </b> normal/normal
          </p>
          <p>
            <b>DM :</b> normal/normal
          </p>
          <p>
            <b>MDR1 :</b> normal/mutant ou N/N
          </p>
          <p>
            <b>DMS :</b> Tests à venir
          </p>
        </Chiens>
        <Chiens
          img={m2}
          dname="CH. DeJade Soft Dream in Gold ( Gabou )"
          born="Né le 11 août 2015"
          color="Couleur : sable et blanc, facteur blanc"
          aurl="/albums/gabou"
          turl="/tests/gabou"
          purl="/pedigree/gabou"
        >
          <p>
            <b>Yeux :</b> normaux
          </p>
          <p>
            <b>CN :</b> normal/normal
          </p>
          <p>
            <b>Myélopathie dégénérative :</b> normal/normal
          </p>
          <p>
            <b>MDR1 :</b> normal/normal
          </p>
        </Chiens>
        <Chiens
          img={m3}
          dname="CH. DeJade Soft Silver Dream"
          aurl="/albums/silver-dream"
          turl="/tests/silver-dream"
          purl="/pedigree/silver-dream"
        >
          <p>
            <b>Yeux :</b> normaux/porteurs
          </p>
          <p>
            <b>CN :</b> normal/normal
          </p>
          <p>
            <b>DM :</b> normal/normal
          </p>
          <p>
            <b>MDR1 :</b> normal/normal
          </p>
        </Chiens>
      </Contianer>
    </Layout>
  );
};

export default Males;
