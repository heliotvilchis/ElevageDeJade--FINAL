import * as React from "react";
import { Link } from "gatsby";

// Components
import Container from "../components/container/container";
import Layout from "../components/layout/layout";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

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
