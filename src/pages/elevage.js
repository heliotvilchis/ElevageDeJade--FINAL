import React from "react";
import styled from "styled-components";

// Components
import Container from "../components/container/container";
import Card from "../components/card/card";
import Layout from "../components/layout/layout";

// Images
import i1 from "../assets/images/gabou/1.jpg";
import i3 from "../assets/images/tina-turner/1.jpg";
import i5 from "../assets/images/renagade/1.webp";
import i7 from "../assets/images/silver-dream/1.jpg";
import i8 from "../assets/images/haley/1.webp";
import i9 from "../assets/images/aiko/1.webp";
import i10 from "../assets/images/rapsodie/1.jpg";
import thunder from "../assets/images/thunder/1.webp";
import bentley from "../assets/images/bentley/1.webp";
import eska from "../assets/images/eska/1.webp";
import gretta from "../assets/images/gretta/1.webp";

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
        <p>
          Tous mes chiens ont un caractère doux, affectueux, protecteur, d'une
          grande sensibilité d'une finesse incomparable, ce sont de joyeux et
          fidèles compagnons de tous les jours, avec leurs habitudes de vie. Ils
          adorent leurs promenades, ou ils peuvent laisser allez leur énergie et
          leur plaisir de jouer.
        </p>
        <p>Voici une brève présentation de mes chiens.</p>
        <p>
          Je vous invite à visiter la page des mâles et femelles pour plus
          d'informations sur chacun des chiens et plus de photos.
        </p>
        <CardContainer>
          <Card
            image={gretta}
            dname="Glasgowhill's Show Boat( Gretta )"
            gender="f"
          />
          <Card
            image={i1}
            dname="CH. DeJade Soft Dream in Gold (Gabou)"
            gender="m"
          />

          <Card image={i3} dname="DeJade Just Call Me Tina Turner" gender="f" />

          <Card image={i5} dname="DeJade Renagade Gracious White" gender="f" />

          <Card image={i7} dname="CH. DeJade Soft Silver Dream" gender="m" />
          <Card
            image={i8}
            dname="DeJade Renagane White Élégance (Haley)"
            gender="f"
          />
          <Card
            image={i9}
            dname="DeJade Dream in Black Gold (Aiko)"
            gender="f"
            undertext="Co-Propriété avec Mme Bélanger"
          />
          <Card
            image={i10}
            dname="DeJade Bohemian Rhapsodie (Queen)"
            gender="f"
            undertext="Co-Propriété avec Mme Christiane Forget"
          />
          <Card
            image={thunder}
            dname="DeJade Soft Breeze of Thunder"
            gender="f"
            undertext=""
          />
          <Card
            image={bentley}
            dname="Glasgowhill's DeJade Bentley"
            gender="m"
          />
          {/* <Card image={eska} dname="DeJade Grace Kelly ( Eska )" gender="f" /> */}
        </CardContainer>
      </Container>
    </Layout>
  );
};
export default Elevage;
