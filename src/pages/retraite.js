import React from "react";
import styled from "styled-components";

// Componets
import Container from "../components/container/container";
import Card from "../components/card/card";
import Layout from "../components/layout/layout";

//Images
import softmagic from "../assets/images/retraites/softmagicgolddust.jpg";
import heaven from "../assets/images/retraites/blueheaven.jpg";
import pearl from "../assets/images/retraites/pearl.jpg";
import benjamin from "../assets/images/retraites/benjamin.jpg";
import glasgowhill from "../assets/images/retraites/glasgowhill.jpg";
import gina from "../assets/images/retraites/gina.jpg";
import mooglie from "../assets/images/retraites/mooglie.jpg";
import beaublond from "../assets/images/retraites/beaublond.jpg";
import bluespott from "../assets/images/retraites/bluespott.jpg";
import dolcea from "../assets/images/retraites/dolcea.jpg";
import kujo from "../assets/images/retraites/kujo.jpg";
import sammy from "../assets/images/retraites/sammy.jpg";
import simbad from "../assets/images/retraites/simbad.jpg";
import charm from "../assets/images/retraites/charm.jpg";
import blue from "../assets/images/retraites/blue.jpg";
import bicket from "../assets/images/retraites/bicket.jpg";
import maude from "../assets/images/retraites/maude.jpg";
import bluestar from "../assets/images/retraites/bluestar.jpg";
import maya from "../assets/images/retraites/maya.jpg";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const TopTitle = styled.div`
  text-align: center;
`;

// Markup
const Futurs = () => {
  return (
    <Layout>
      <Container>
        <TopTitle>
          <h1>Nos chiens retraités</h1>
        </TopTitle>
        <CardContainer>
          <Card
            image={softmagic}
            dname="Bo, CH DeJade Soft Magic Gold Dust n/e "
            gender="m"
          />
          <Card
            image={heaven}
            dname="DeJade Magic Blue Heaven n/e (Heaven)"
            gender="m"
          />
          <Card
            image={pearl}
            dname="DeJade Simply Pearl Enchantée n/e (Pearl)"
            gender="f"
          />
          <Card
            image={benjamin}
            dname="CH. Milas DeJade New Star (Benjamin)"
            gender="m"
          />
          <Card
            image={glasgowhill}
            dname="CH. Glasgowhill Simply DeJade"
            gender="m"
          />
          <Card
            image={gina}
            dname="Codybear's DeJade Georgina n/e (Gina)"
            gender="f"
          />
          <Card image={mooglie} dname="Mooglie DeJade" gender="f" />
          <Card
            image={beaublond}
            dname="Beau-Blond Marquis DeJade"
            gender="m"
          />
          <Card image={bluespott} dname="Blue-Spott DeJade" gender="m" />
          <Card image={dolcea} dname="DeJade Dolcea n/e" gender="f" />
          <Card
            image={kujo}
            dname="Can,Fcc, CH. Constelation Kujo"
            gender="m"
          />
          <Card
            image={sammy}
            dname="CH. Collection DeJade Sammy boy"
            gender="m"
          />
          <Card image={simbad} dname="CH. Simbad DeJade" gender="m" />
          <Card
            image={charm}
            dname="Ch.Harvesthill True Blue Charm ( Sapphire )"
            gender="f"
          />
          <Card image={blue} dname="DeJade Rhapsodie in Blue n/e" gender="f" />
          <Card image={maya} dname="Codybear DeJade Maza Maya" gender="f" />
          <Card
            image={bicket}
            dname="Can. CH. CD,RE,CGN DeJade Imagine a Star (Bicket)"
            gender="f"
          />
          <Card
            image={maude}
            dname="DeJade Flirt In The Romance n/e (Maude) "
            gender="f"
          />
          <Card
            image={bluestar}
            dname="CH DeJade Imagine A Blue Star"
            gender="f"
          />
        </CardContainer>
      </Container>
    </Layout>
  );
};

export default Futurs;
