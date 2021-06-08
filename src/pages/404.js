import * as React from "react";

// Components
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <h2>404 - Page non trouvée </h2>
        <h1>
          Nous sommes désolés, nous n'avons pas pu trouver la page que vous
          cherchez!
        </h1>
        <h3>C'est peut-être parce que :</h3>
        <p>
          Le lien ne fonctionne pas correctement ou la page a été déplacée. Vous
          avez entré l'adresse de la page (URL) incorrectement.
        </p>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
