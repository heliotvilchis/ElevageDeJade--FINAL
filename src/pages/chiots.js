import React from "react";

// Components
import Container from "../components/container/container";
import ChiotsComp from "../components/chiots/chiots";
import Link from "../components/link/link";
import Layout from "../components/layout/layout";

// CSS
import * as styleComponents from "../assets/pagestyles/chiots.module.scss";

//images
import gabou from "../assets/images/gabou/1.jpg";
import india from "../assets/images/india/1.jpg";
import hank from "../assets/images/hank/1.webp";
import tiBlanche from "../assets/images/renagade/1.webp";
import shiny from "../assets/images/soft-shiny/1.jpg";
import rhapsodie from "../assets/images/rapsodie/1.jpg";

// Markup
const Chiots = () => {
  return (
    <div>
      <Layout>
        <Container>
          <div className={styleComponents.chiots}>
            <h1>Nos Chiots</h1>
            <div className={styleComponents.price}>
              <p>
                Le prix de mes chiots est de 1800$ enregistré non-reproducteur,
                pour toutes les couleurs.
              </p>
              <p>
                Pour un chiot non reproducteur un accord de non reproduction est
                rempli et signé et vous avez l'obligation de me faire parvenir
                la preuve de sa stérilisation vers l'âge de 8 mois maximum.
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
            </div>
          </div>
          <ChiotsComp
            date="Accouplements faits les 12 et 13 mai"
            infos="Gestation à confirmer"
            imgm={gabou}
            nomm="CH.DeJade Soft Dream in Gold ( Gabou )"
            imgf={india}
            nomf="CH.DeJade Star of Cassy ( India )"
          />
          <ChiotsComp
            date="Accouplements faits du 26 au 30 avril"
            infos="Gestations confirmées. Naissances prévues fin juin"
            imgm={hank}
            nomm="Gr.CH.Cover's Run Just Call Me Hank"
            imgf={tiBlanche}
            nomf="DeJade Gracious White ( Ti-Blance )"
          />
          <ChiotsComp
            date="Accouplement fait le 26 avril"
            infos="Couleurs des chiots à naître: sable, sable-merle, bleu-merle, tricolore."
            infos2="Gestations confirmées. Naissances prévues fin juin"
            imgm={gabou}
            nomm="CH.DeJade Soft Dream in Gold ( Gabou )"
            imgf={shiny}
            nomf="DeJade Soft Shiny"
          />
          <ChiotsComp
            date="Accouplement prévu en août 2021"
            infos=""
            infos2=""
            imgm={gabou}
            nomm="CH.DeJade Soft Dream in Gold ( Gabou )"
            imgf={rhapsodie}
            nomf="DeJade Sweet Rhapsodie in Blue"
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
