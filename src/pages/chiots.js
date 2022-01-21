import React from "react";

// Components
import Container from "../components/container/container";
import ChiotsComp from "../components/chiots/chiots";
import Link from "../components/link/link";
//import Image from "../components/image/image";
import Bebes from "../components/chiots/bebes";
import Layout from "../components/layout/layout";

// CSS
import * as styleComponents from "../assets/pagestyles/chiots.module.scss";

//images
import gabou from "../assets/images/gabou/1.jpg";
import tiBlanche from "../assets/images/ti-blanche/1.webp";
import tinaTurner from "../assets/images/tina-turner/1.jpg";
import aiko from "../assets/images/aiko/1.webp";
import haley from "../assets/images/haley/1.webp";
import silverDream from "../assets/images/silver-dream/1.jpg";
import Bentley from "../assets/images/bentley/1.webp";
import gretta from "../assets/images/gretta/1.webp";
import softShiny from "../assets/images/soft-shiny/1.jpg";
import p3132 from "../assets/images/aiko-haley/3132.webp";

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
                <p>
                  Tous mes chiots sont garantis pour 2 ans sur les tares
                  héréditaires.
                </p>
                <p>
                  Ils sont tous vaccinés, vermifugés, micropucés, enregistrés au
                  Club Canin Canadien.
                </p>
              </b>
            </div>
            <h2>
              <b>Aucune réservation avant 2022</b>
            </h2>
          </div>
          <ChiotsComp
            date="Accouplements faits du 15 au 16 novembre"
            infos="1 chiot né le 17/01/2022"
            infos2=""
            imgm={aiko}
            nomm="DeJade Dream in Black Gold ( Aïko )"
            imgf={haley}
            nomf="DeJade White Elegance ( Haley )"
          />
          <h2>Mâle tricolore, réservé</h2>
          <img style={{ width: "100%" }} src={p3132} alt="" />
          <ChiotsComp
            date="Accouplement à venir 2022"
            infos=""
            infos2=""
            imgm={Bentley}
            nomm="Glasgowhill's DeJade Bentley ( Bentley )"
            imgf={tiBlanche}
            nomf="DeJade Gracious White ( Ti-Blanche )"
          />
          <ChiotsComp
            date="Accouplements prévus juin - juillet 2022"
            infos=""
            infos2=""
            imgm={gabou}
            nomm="CH. DeJade Soft Dream in Gold ( Gabou )"
            imgf={gretta}
            nomf="Glasgowhill's Show Boat ( Gretta )"
          />
          <ChiotsComp
            date="Accouplement prévu février 2022"
            infos=""
            infos2=""
            imgm={Bentley}
            nomm="Glasgowhill's DeJade Bentley ( Bentley )"
            imgf={softShiny}
            nomf="DeJade Soft Shiny"
          />
          <ChiotsComp
            date="Accouplement prévu juin - juillet 2022"
            infos=""
            infos2=""
            imgm={silverDream}
            nomm="GCH. DeJade Soft Silver Dream"
            imgf={tinaTurner}
            nomf="CH. DeJade Just Call Me Tina Turner"
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
