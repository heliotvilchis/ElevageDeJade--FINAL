import React from "react";

// Componets
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

//CSS
import * as styledCompoents from "../assets/pagestyles/futurs.module.scss";

//Images
import f2 from "../assets/images/ti-blanche/2.jpg";
import f3 from "../assets/images/ti-blanche/3.jpg";

// Markup
const Futurs = () => {
  return (
    <Layout>
      <Container>
        <div className={styledCompoents.futurs}>
          <h1>Nos futurs reproducteurs</h1>
          <p>Ti-Blanche</p>
          <p>DeJade Renagade Gracious White </p>
          <img src={f2} alt="" />
          <img src={f3} alt="" />
        </div>
      </Container>
    </Layout>
  );
};

export default Futurs;
