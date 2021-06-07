import React from "react";

// Componets
import Container from "../components/container/container";
import Link from "../components/link/link";
import Layout from "../components/layout/layout";

//Images
import permis from "../assets/images/permis.jpg";

//CSS
import * as styledComponets from "../assets/pagestyles/contact.module.scss";

// Markup
const Contact = () => {
  return (
    <Layout>
      <Container>
        <div className={styledComponets.contact}>
          <h1>Contactez-nous!</h1>
          <p>
            Bienvenue à Élevage DeJade pour une visite sur rendez-vous. Les
            dimanches sauf exception seront dédiés à ma famille.
          </p>
          <Link to="mailto:info@elevagedejade.com">
            <p className={styledComponets.link}>info@elevagedejade.com</p>
          </Link>
          <Link to="tel:4183253285">
            <p className={styledComponets.link}>418 325-3285</p>
          </Link>
          <p>Sainte-Anne-de-la-Pérade</p>
          <p>Québec, Canada</p>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175368.33823949718!2d-72.34675471997805!3d46.62418816471937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc7a174e80af189%3A0x45153c396279948e!2sSainte-Anne-de-la-P%C3%A9rade%2C%20QC!5e0!3m2!1sen!2sca!4v1595879418112!5m2!1sen!2sca"
            allowfullscreen=""
            aria-hidden="false"
            frameborder="0"
          ></iframe>
          <img src={permis} alt="" />
        </div>
      </Container>
    </Layout>
  );
};

export default Contact;
