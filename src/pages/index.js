import * as React from "react";

// Components
import Layout from "../components/layout/layout";
import Container from "../components/container/container";
import Link from "../components/link/link";

// CSS
import * as componentStyles from "../assets/styles/index.module.scss";

// Assets
import imagetop from "../assets/images/indextop.jpg";
import brunc from "../assets/images/icons/brundcircle.svg";
import greenc from "../assets/images/icons/greendcircle.svg";
import purplec from "../assets/images/icons/purpledcircle.svg";
import camera from "../assets/images/icons/camera-with-flash.png";
import dog from "../assets/images/icons/dog.png";
import earth from "../assets/images/icons/earth-globe-americas.png";
import envelope from "../assets/images/icons/envelope.png";
import calendar from "../assets/images/icons/tear-off-calendar.png";
import telephone from "../assets/images/icons/telephone-receiver.png";
import hearts from "../assets/images/icons/two-hearts.png";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <img
        className={componentStyles.topimage}
        src={imagetop}
        alt="chien colley élevage Jade Québec"
      />
      <Container>
        <article>
          <p>
            <b>Élevage DeJade</b> a débuté par l'amour du colley et pour l'amour
            du colley. Par l'amour, car lorsque j'ai eue mon premier qui était
            un mâle tricolore, je suis tombée en amour avec cette race. Quelle
            finesse de caractère, quelle intelligence, ce chien comprend sans
            lui parler devine nos états d'âme et fait tout pour nous plaire, il
            peut-être enjoué à l'écoute des ordres à recevoir ou tout simplement
            d'un calme déconcertant.
          </p>
          <p>
            Pour l'amour de la race là a vraiment débuté l'élevage pour
            conserver cette magnifique prestance, ce regard tendre et
            intelligent, cette force malgré l'élégance de la démarche, cette
            robe somptueuse, quelle merveille.
          </p>
          <p>
            Le but de l'élevage DeJade est de faire connaître aux gens cette
            race en produisant des chiens en santé, intelligent et affectueux,
            répondant aux critères de la race.
          </p>
          <p>
            Maintenant que mon troupeau de brebis a diminué de beaucoup, j'ai du
            temps de plus à accorder à mes colleys, donc pour les compétitions
            de conformation d'obéissance et qui sait d'agilité et même de
            herding.
          </p>
        </article>
        <article>
          <Link to="/">
            <section className={componentStyles.dotlink1}>
              <img src={brunc} alt="Green double circle" />
              <h2>Chiots Disponibles</h2>
            </section>
          </Link>

          <Link to="/">
            <section className={componentStyles.dotlink2}>
              <img src={greenc} alt="Green double circle" />
              <h2>Notre Élevage</h2>
            </section>
          </Link>
          <Link to="/">
            <section className={componentStyles.dotlink3}>
              <img src={purplec} alt="Green double circle" />
              <h2>Nos Champions</h2>
            </section>
          </Link>
        </article>
      </Container>
      <article className={componentStyles.njn}>
        <section className={componentStyles.nj}>
          <Container>
            <h2>Nous Joindre</h2>
            <Link>
              <img src={telephone} alt="red phone emoji" />
              <p>418 325-3285</p>
            </Link>
            <Link>
              <img src={envelope} alt="red phone emoji" />
              <p>info@elevagedejade.com</p>
            </Link>

            <Link>
              <img src={earth} alt="red phone emoji" />
              <p>Sainte-Anne-de-la-Pérade Québec, Canada</p>
            </Link>
            <div className={componentStyles.visites}>
              <img src={calendar} alt="red phone emoji" />
              <p>
                <b>Les visites se font uniquement sur rendez-vous</b>
              </p>
            </div>
          </Container>
        </section>
        <section className={componentStyles.nu}>
          <Container>
            <h2>Nouvelles</h2>
            <Link>
              <img src={camera} alt="red phone emoji" />
              <p>This is a new</p>
            </Link>
            <Link>
              <img src={camera} alt="red phone emoji" />
              <p>This is a new</p>
            </Link>
            <Link>
              <img src={camera} alt="red phone emoji" />
              <p>This is a new</p>
            </Link>
            <Link>
              <img src={camera} alt="red phone emoji" />
              <p>This is a new</p>
            </Link>
            <Link>
              <img src={camera} alt="red phone emoji" />
              <p>This is a new</p>
            </Link>
          </Container>
        </section>
      </article>
    </Layout>
  );
};

export default IndexPage;
