import React from "react";

// Assets
import Contianer from "../components/container/container";
import Chiens from "../components/chiens/chiens";
import Layout from "../components/layout/layout";

// Images
import f1 from "../assets/images/india/1.jpg";
import f2 from "../assets/images/sweety/1.jpg";
import f3 from "../assets/images/renagade/1.webp";
import f4 from "../assets/images/soft-shiny/1.jpg";
import f5 from "../assets/images/gabou/1.jpg";
import f6 from "../assets/images/haley/1.jpg";
import f7 from "../assets/images/rapsodie/1.jpg";
import f8 from "../assets/images/thunder/1.jpg";

// CSS
import * as styleComponents from "../assets/pagestyles/males.module.scss";

// Markup
const Males = () => {
  return (
    <Layout>
      <Contianer>
        <h1 className={styleComponents.males}>Nos Femelles</h1>
        <Chiens
          img={f1}
          dname="CH DeJade Star Of Cassy"
          surname="( India )"
          undertext=""
          born=""
          color="Couleur : bleu-Merle"
          aurl="/albums/india"
          turl="/tests/india"
          purl="/pedigree/india"
        >
          <p>
            <b>Yeux :</b> affectés
          </p>
          <p>
            <b>CN : </b> normal/normal
          </p>
          <p>
            <b>DM :</b> normal/normal
          </p>
          <p>
            <b>MDR1 :</b> normal/mutant
          </p>
        </Chiens>
        <Chiens
          img={f2}
          dname="DeJade Sweet Rhapsodie in Blue "
          surname="( Sweety )"
          born=""
          color="Couleur : bleu-merle"
          aurl="/albums/sweety"
          turl="/tests/sweety"
          purl="/pedigree/sweety"
        >
          <p>
            <b>Yeux :</b> cerf normal, possible non-porteur
          </p>
          <p>
            <b>CN :</b> N/N
          </p>
          <p>
            <b>DM :</b> N/N
          </p>
          <p>
            <b>MDR1 :</b> mutant/mutant
          </p>
        </Chiens>
        <Chiens
          img={f3}
          dname="DeJade Renagade Gracious White"
          surname="( Ti-Blanche )"
          born="Date de naissance : le 15-01-2017"
          color="Couleur : blanche marquée sable-merle"
          aurl="/albums/silver-dream"
          turl="/tests/silver-dream"
          purl="/pedigree/silver-dream"
        >
          <p>
            <b>Yeux :</b> normaux
          </p>
          <p>
            <b>CN :</b> normal/normal
          </p>
          <p>
            <b>DM :</b> N/DM
          </p>
          <p>
            <b>MDR1 :</b> M/M
          </p>
        </Chiens>
        <Chiens
          img={f4}
          dname="DeJade Soft Shiny"
          color="Couleur : sable-merle"
          aurl="/albums/aiko"
          purl="/pedigree/aiko"
        >
          <p>
            <b>Yeux :</b> normaux, non-porteurs
          </p>
          <p>
            <b>CN : </b> normal/normal
          </p>
          <p>
            <b>DM :</b> normal/normal
          </p>
          <p>
            <b>MDR1 :</b> normal/normal
          </p>
        </Chiens>
        <Chiens
          img={f5}
          dname="DeJade Just Call Me Tina Turner"
          born=""
          color="Couleur : sable et blanc facteur tri"
          aurl="/albums/gabou"
          turl="/tests/gabou"
          purl="/pedigree/gabou"
        >
          <p>
            <b>Yeux :</b> normaux /porteurs (cerf)
          </p>
          <p>
            <b>CN :</b> à venir
          </p>
          <p>
            <b>DM :</b> à venir
          </p>
          <p>
            <b>MDR1 :</b> à venir
          </p>
        </Chiens>
        <Chiens
          img={f6}
          dname="DeJade Renagane White Élégance"
          surname="( Haley )"
          aurl="/albums/silver-dream"
          turl="/tests/silver-dream"
          purl="/pedigree/silver-dream"
        >
          <p>
            <b>Yeux :</b> normaux/normaux
          </p>
          <p>
            <b>CN :</b> normal/normal
          </p>
          <p>
            <b>DM :</b> normal/normal
          </p>
          <p>
            <b>DMS :</b> Risque faible
          </p>
          <p>
            <b>MDR1 :</b> normal/normal
          </p>
        </Chiens>
        <Chiens
          img={f7}
          dname="DeJade Bohemian Rhapsodie"
          undertext="Co-propriétaire Mme Christiane Forget "
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
            <b>MDR1 :</b> normal/mutant
          </p>
        </Chiens>
        <Chiens
          img={f8}
          dname="DeJade Soft Breeze of Thunder"
          undertext="Co-propriétaire Mme Christiane Forget "
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
            <b>MDR1 :</b> normal/mutant
          </p>
        </Chiens>
      </Contianer>
    </Layout>
  );
};

export default Males;
