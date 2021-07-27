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
import hank from "../assets/images/hank/1.webp";
import tiBlanche from "../assets/images/ti-blanche/1.webp";
import shiny from "../assets/images/soft-shiny/1.jpg";
import rhapsodie from "../assets/images/sweety/1.jpg";
import tinaTurner from "../assets/images/tina-turner/1.jpg";
import aiko from "../assets/images/aiko/1.webp";
import haley from "../assets/images/haley/1.webp";
import silverDream from "../assets/images/silver-dream/1.jpg";
import thunder from "../assets/images/thunder/1.webp";

//Chiots Hank Ti-Blanche
import ht1 from "../assets/images/all-chiots/Hank-TiBlanche/IMG3007.webp";
import ht2 from "../assets/images/all-chiots/Hank-TiBlanche/IMG3008.webp";
import ht3 from "../assets/images/all-chiots/Hank-TiBlanche/IMG3010.webp";
import ht4 from "../assets/images/all-chiots/Hank-TiBlanche/IMG3011.webp";
import ht5 from "../assets/images/all-chiots/Hank-TiBlanche/IMG3012.webp";
import ht6 from "../assets/images/all-chiots/Hank-TiBlanche/IMG3013.webp";
import ht7 from "../assets/images/all-chiots/Hank-TiBlanche/IMG3014.webp";
import ht8 from "../assets/images/all-chiots/Hank-TiBlanche/IMG3015.webp";

//Chiots Gabou Shiny
import gs1 from "../assets/images/all-chiots/Gabou-Shiny/IMG2997.webp";
import gs2 from "../assets/images/all-chiots/Gabou-Shiny/IMG2998.webp";
import gs3 from "../assets/images/all-chiots/Gabou-Shiny/IMG2999.webp";
import gs4 from "../assets/images/all-chiots/Gabou-Shiny/IMG3000.webp";
import gs5 from "../assets/images/all-chiots/Gabou-Shiny/IMG3001.webp";
import gs6 from "../assets/images/all-chiots/Gabou-Shiny/IMG3002.webp";
import gs7 from "../assets/images/all-chiots/Gabou-Shiny/IMG3003.webp";
import gs8 from "../assets/images/all-chiots/Gabou-Shiny/IMG3004.webp";
import gs9 from "../assets/images/all-chiots/Gabou-Shiny/IMG3005.webp";
import gs10 from "../assets/images/all-chiots/Gabou-Shiny/IMG3006.webp";

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
                  Le prix de mes chiots est de 1800$ enregistré
                  non-reproducteur, pour toutes les couleurs.
                </p>
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
            date="Accouplement fait du 26 au 30 avril"
            infos="Gestation confirmée. Naissances prévues fin juin"
            imgm={hank}
            nomm="Gr.CH.Cover's Run Just Call Me Hank"
            imgf={tiBlanche}
            nomf="DeJade Gracious White ( Ti-Blance )"
          />
          <h3 className={styleComponents.center}>nés le 28 juin</h3>
          <Bebes front={ht1} back={ht2}>
            <p>
              <b>Femelle sable et blanc réservée Mme Renaud</b>
            </p>
          </Bebes>
          <Bebes front={ht3} back={ht4}>
            <p>
              <b>Femelle sable et blanc réservée Mme Lavoie</b>
            </p>
          </Bebes>
          <Bebes front={ht5} back={ht6}>
            <p>
              <b>Mâle tricolore réservé</b>
            </p>
          </Bebes>
          <Bebes front={ht7} back={ht8}>
            <p>
              <b>Femelle Blanche marquée sable réservée Mme Daneau</b>
            </p>
          </Bebes>

          <ChiotsComp
            date="Accouplement fait le 26 avril"
            infos="Couleurs des chiots à naître: sable, sable-merle, bleu-merle, tricolore."
            infos2="Gestation confirmée. Naissances prévues fin juin"
            imgm={gabou}
            nomm="CH.DeJade Soft Dream in Gold ( Gabou )"
            imgf={shiny}
            nomf="DeJade Soft Shiny"
          />
          <h3 className={styleComponents.center}>
            Photos des chiots à l'âge de 3 semaines
          </h3>
          <Bebes front={gs1} back={gs2}>
            <p>
              <b>Mâle tricolore réservé</b>
            </p>
          </Bebes>
          <Bebes front={gs3} back={gs4}>
            <p>
              <b>Mâle sable-merle réservé</b>
            </p>
          </Bebes>
          <Bebes front={gs5} back={gs6}>
            <p>
              <b>Mâle sable-merle réservé Mme Cloutier</b>
            </p>
          </Bebes>
          <Bebes front={gs7} back={gs8}>
            <p>
              <b>Mâle sable réservé</b>
            </p>
          </Bebes>
          <Bebes front={gs9} back={gs10}>
            <p>
              <b>Mâle sable réservé M.Mongrain</b>
            </p>
          </Bebes>

          <ChiotsComp
            date="Accouplement prévu en août 2021"
            infos=""
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
