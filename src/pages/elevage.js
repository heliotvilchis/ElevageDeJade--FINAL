import React from "react";
import styled from "styled-components";

// Components
import Container from "../components/container/container";
import Layout from "../components/layout/layout";
import Card from "../components/card/card";

// Images
import i1 from "../assets/images/gabou/1.jpg";
import i2 from "../assets/images/rapsodie/1.jpg";
import i3 from "../assets/images/tina-turner/1.webp";
import i4 from "../assets/images/india/1.jpg";
import i5 from "../assets/images/renagade/1.webp";
import i6 from "../assets/images/soft-shiny/1.jpg";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

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
        <CardContainer>
          <Card
            image={i1}
            dname="CH. DeJade Soft Dream in Gold (Gabou)"
            gender="m"
          />
          <Card
            image={i2}
            dname="DeJade Sweet Rhapsodie in Blue (Sweety)"
            gender="f"
          />
          <Card image={i3} dname="DeJade Just Call Me Tina Turner" gender="f" />
          <Card
            image={i4}
            dname="CH. DeJade Star Of Cassy (India)"
            gender="f"
          />
          <Card image={i5} dname="DeJade Renagade Gracious White" gender="f" />
          <Card image={i6} dname="DeJade Soft Shiny" gender="f" />
        </CardContainer>
      </Container>
    </Layout>
  );
};
export default Elevage;
