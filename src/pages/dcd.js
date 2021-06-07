import React from "react";

// Componets
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

//CSS
import * as styledCompoents from "../assets/pagestyles/dcd.module.scss";

//Images
import arno from "../assets/images/dcd/arno.jpg";
import bella from "../assets/images/dcd/bella.jpg";
import cantia from "../assets/images/dcd/cantia.jpg";
import denim from "../assets/images/dcd/denim.jpg";
import misty from "../assets/images/dcd/misty.jpg";
import rhapsodie from "../assets/images/dcd/rhapsodie.jpg";
import sweek from "../assets/images/dcd/sweek.jpg";

// Markup
const Futurs = () => {
  return (
    <Layout>
      <Container>
        <div className={styledCompoents.dcd}>
          <h1>Partis pour un monde meilleur</h1>
          <img src={misty} alt="" />
          <p>CH DeJade Flirt Mystery</p>
          <p>(Misty)</p>

          <img src={arno} alt="" />
          <p>CH.Can,FCC, Constelation Kujo ( Arno ) 2015</p>

          <img src={rhapsodie} alt="" />
          <p>
            L'emblème de mon site DeJade Rhapsodie in Blue est décédée lundi le
            8 décembre, nous avons été tellement affectés perdre une si belle
            femelle qui avait tant de coeur au ventre capable de tout donner ne
            demandant qu'un peu d'attention ,chienne magnifique qui n'a pas eue
            la vie facile après avoir subie un accident qui lui avait fracturé
            le bassin à l'âge de 6 mois, elle était née pour le show, mais son
            rêve c'est arrêté là
          </p>
          <p>
            Elle perpétuera la beauté de la race et de son image avec Ch. DeJade
            A New Rhapsodie et DEJade Sweet Rhapsodie in Blue.
          </p>
          <p>Maintenant repose en paix tu seras toujours dans nos coeurs.</p>

          <img src={bella} alt="" />
          <p>DeJade Simply Bella Blackie </p>
          <p>12/03/2010 - 13/07/2013</p>

          <img src={cantia} alt="" />
          <p>Canthia DeJade femelle tricolore </p>
          <p>décédée le 3/02/2008</p>

          <img src={denim} alt="" />
          <p>CH Codybear's Denim'n Lace n/e (Blanca)</p>
          <p>Décédée le 26/12/08 d'un stupide accident.</p>

          <img src={sweek} alt="" />
          <p>CH Lakeview's Sweet Expectation (USA) n/e n/c </p>
        </div>
      </Container>
    </Layout>
  );
};

export default Futurs;
