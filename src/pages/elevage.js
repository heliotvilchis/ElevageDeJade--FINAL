import React from "react";

// Components
import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Card from "../components/card/card";

// Images
import i1 from "../assets/images/gabou/1.jpg";

// Markup
const Elevage = () => {
  return (
    <Layout>
      <Container>
        <h2>
          Tous mes chiens ont un caractère doux, affectueux, protecteur, d'une
          grande sensibilité d'une finesse incomparable, ce sont de joyeux et
          fidèles compagnons de tous les jours, avec leurs habitudes de vie. Ils
          adorent leurs promenades, ou ils peuvent laisser allez leur énergie et
          leur plaisir de jouer.
        </h2>
        <p>Voici une brève présentation de mes chiens.</p>
        <p>
          Je vous invite à visiter la page des mâles et femelles pour plus
          d'informations sur chacun des chiens et plus de photos.
        </p>
        <Card
          image={i1}
          dname="CH. DeJade Soft Dream in Gold (Gabou)"
          gender="m"
        />
        <Card
          image={i1}
          dname="DeJade Sweet Rhapsodie in Blue (Sweety)"
          gender="f"
        />
      </Container>
    </Layout>
  );
};
export default Elevage;
