import React from "react";

// Componets
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

//CSS
import * as styledCompoents from "../assets/pagestyles/futurs.module.scss";

//Images

// Markup
const Futurs = () => {
  return (
    <Layout>
      <Container>
        <div className={styledCompoents.futurs}>
          <h1>Nos futurs reproducteurs</h1>
          <p>Ti-Blanche</p>
          <p>DeJade Renagade Gracious White </p>
        </div>
      </Container>
    </Layout>
  );
};

export default Futurs;
