import React from "react";

// Components
import Container from "../components/container/container";
import ChiotsComp from "../components/chiots/chiots";
import Link from "../components/link/link";
//import Image from "../components/image/image";
//import Bebes from "../components/chiots/bebes";
import Layout from "../components/layout/layout";

// CSS
import * as styleComponents from "../assets/pagestyles/chiots.module.scss";

//images
import gabou from "../assets/images/gabou/1.jpg";
import tiBlanche from "../assets/images/ti-blanche/1.webp";
import rhapsodie from "../assets/images/sweety/1.jpg";
import tinaTurner from "../assets/images/tina-turner/1.jpg";
import aiko from "../assets/images/aiko/1.webp";
import haley from "../assets/images/haley/1.webp";
import silverDream from "../assets/images/silver-dream/1.jpg";
import thunder from "../assets/images/thunder/1.webp";

// Markup
const Chiots = () => {
  return (
    <div>
      <Layout>
        <Container>
          <div className={styleComponents.chiots}>
            <h1>Nos Chiots</h1>
            <div className={styleComponents.price}>
              <b>
                <p>
                  Le prix de mes chiots est de 2000$ enregistré
                  non-reproducteur, pour toutes les couleurs.
                </p>
                <p>Aucune réservation ne sera prise pour le moment</p>
                <p>
                  Pour un chiot non reproducteur un accord de non reproduction
                  est rempli et signé et vous avez l'obligation de me faire
                  parvenir la preuve de sa stérilisation vers l'âge de 8 mois
                  maximum.
                </p>
                <p>
                  Pour une réservation un montant de 400$ non remboursable est
                  exigé pour un chiot non reproducteur ou un adulte stérilisé.
                </p>
                <p>Nous nous réservons le droit de refuser une vente.</p>
                <p>Jeunes ou adulte de disponible à l'occasion</p>
                <p>
                  Pour vôtre chien ou chiot je demande une cour clôturée ou un
                  enclos d'un minimum de 8' x 8'.
                </p>
              </b>
            </div>
            <h2>
              <b>Aucune réservation avant 2022</b>
            </h2>
          </div>

          <ChiotsComp
            date="Accouplements faits du 3 au 7 septembre"
            infos="Gestation à confirmer"
            infos2=""
            imgm={gabou}
            nomm="CH.DeJade Soft Dream in Gold ( Gabou )"
            imgf={rhapsodie}
            nomf="DeJade Sweet Rhapsodie in Blue
            ( Sweety )"
          />
          <ChiotsComp
            date="Accouplement à venir fin 2021"
            infos=""
            infos2=""
            imgm={gabou}
            nomm="CH. DeJade Soft Dream in Gold ( Gabou )"
            imgf={tinaTurner}
            nomf="DeJade Just Call me Tina Turner"
          />
          <ChiotsComp
            date="Accouplement à venir 2022"
            infos=""
            infos2=""
            imgm={aiko}
            nomm="DeJade Dream in Black Gold ( Aïko )"
            imgf={haley}
            nomf="DeJade White Elegance ( Haley )"
          />
          <ChiotsComp
            date="Accouplement à venir 2022"
            infos=""
            infos2=""
            imgm={silverDream}
            nomm="Ch.DeJade Soft Silver Dream"
            imgf={thunder}
            nomf="DeJade Soft Breeze of Thunder"
          />
          <ChiotsComp
            date="Accouplement à venir 2022"
            infos=""
            infos2=""
            imgm={aiko}
            nomm="DeJade Dream in Black Gold ( Aïko )"
            imgf={tiBlanche}
            nomf="DeJade Gracious White ( Ti-Blanche )"
          />
          <h2>Tous les chiots de ces portées auront les yeux normaux</h2>
          <div className={styleComponents.contact}>
            <Link to="mailto:info@elevagedejade.com">
              info@elevagedejade.com
            </Link>
            <Link to="tel:+14183253285">418-325-3285</Link>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Chiots;
