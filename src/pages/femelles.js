import React from "react";

// Assets
import Contianer from "../components/container/container";
import Chiens from "../components/chiens/chiens";
import Layout from "../components/layout/layout";

// Images
import f3 from "../assets/images/ti-blanche/1.webp";
import f5 from "../assets/images/tina-turner/1.jpg";
import f6 from "../assets/images/haley/1.webp";
import f7 from "../assets/images/rapsodie/1.jpg";
import f8 from "../assets/images/thunder/1.webp";
import f9 from "../assets/images/eska/1.webp";
import f10 from "../assets/images/gretta/1.webp";

// CSS
import * as styleComponents from "../assets/pagestyles/males.module.scss";

// Markup
const Males = () => {
  return (
    <Layout>
      <Contianer>
        <h1 className={styleComponents.males}>Nos Femelles</h1>

        <Chiens
          img={f3}
          dname="DeJade Renagade Gracious White"
          surname="( Ti-Blanche )"
          born="Date de naissance : le 15-01-2017"
          color="Couleur : blanche marquée sable-merle"
          aurl="/albums/ti-blanche"
          turl="/tests/ti-blanche"
          purl="/pedigree/ti-blanche"
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
          img={f5}
          dname="CH DeJade Just Call Me Tina Turner"
          born=""
          color="Couleur : sable et blanc facteur tri"
          aurl="/albums/tina-turner"
          turl="/tests/tina-turner"
          purl="/pedigree/tina-turner"
        >
          <p>
            <b>CEA :</b> N/P
          </p>
          <p>
            <b>CN :</b> N/N
          </p>
          <p>
            <b>DM :</b> N/N
          </p>
          <p>
            <b>DMS :</b> Risque Moyen
          </p>
          <p>
            <b>MDR1 :</b> N/N
          </p>
        </Chiens>
        <Chiens
          img={f6}
          dname="DeJade Renagane White Élégance"
          surname="( Haley )"
          aurl="/albums/haley"
          turl="/tests/haley"
          purl="/pedigree/haley"
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
          surname="( Queen )"
          undertext="Co-propriétaire Mme Christiane Forget "
          aurl="/albums/rhapsodie"
          turl="/tests/rhapsodie"
          purl="/pedigree/rhapsodie"
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
          undertext=""
          aurl="/albums/thunder"
          turl="/tests/thunder"
          purl="/pedigree/thunder"
        >
          <p>
            <b>Yeux :</b> normaux/porteurs
          </p>
          <p>
            <b>CN :</b> normal/normal
          </p>
          <p>
            <b>DM :</b> N/DM
          </p>
          <p>
            <b>MDR1 :</b> normal/mutant
          </p>
        </Chiens>
        <Chiens
          img={f9}
          dname="DeJade Grace Kelly"
          surname="( Eska )"
          undertext=""
          aurl="/albums/eska"
          turl="/tests/eska"
          purl="/pedigree/eska"
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
            <b>DMS :</b> Risque faible
          </p>
          <p>
            <b>MDR1 :</b> normal/normal
          </p>
        </Chiens>
        <Chiens
          img={f10}
          dname="Glasgowhill's Show Boat"
          surname="( Gretta )"
          born="Date de naissance : 14 /04/2020"
          color="Couleur : bleu-merle"
          undertext=""
          aurl="/albums/gretta"
          turl="/tests/gretta"
          purl="/pedigree/gretta"
        >
          <p>
            <b>Yeux :</b> affectés
          </p>
          <p>
            <b>CN :</b> à venir
          </p>
          <p>
            <b>DM :</b> à venir
          </p>
          <p>
            <b>DMS :</b> à venir
          </p>
          <p>
            <b>MDR1 :</b> à venir
          </p>
        </Chiens>
      </Contianer>
    </Layout>
  );
};

export default Males;
