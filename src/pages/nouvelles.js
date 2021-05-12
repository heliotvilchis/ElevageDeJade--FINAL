import * as React from "react";

// Components
import Layout from "../components/layout/layout";
import Container from "../components/container/container";

// CSS
import * as componentStyles from "../assets/styles/nouvelles.module.scss";

// markup
const NouvellesPage = () => {
  return (
    <Layout>
      <Container>
        <article>
          <h1>Nouvelles</h1>
          <section>
            <p>9 Septembre 2020</p>
            <p>
              Considérant la grande demande, pour un chiot ou visite,
              présentement je ne prendrai aucune réservation ni visite ne serons
              autorisé avant un avis contraire.
            </p>
          </section>
        </article>
      </Container>
    </Layout>
  );
};

export default NouvellesPage;
