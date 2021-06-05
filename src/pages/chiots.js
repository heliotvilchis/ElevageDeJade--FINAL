import React from "react";

import Container from "../components/container/container";
import Layout from "../components/layout/layout";

// CSS
import * as styleComponents from "../assets/pagestyles/chiots.module.scss";

// Markup
const Chiots = () => {
  return (
    <div>
      <Layout>
        <Container>
          <div className={styleComponents.chiots}>
            <h1>Nos Chiots</h1>
            <div className={styleComponents.price}>
              <p>
                Le prix de mes chiots est de 1800$ enregistré non-reproducteur,
                pour toutes les couleurs.
              </p>
              <p>
                Pour un chiot non reproducteur un accord de non reproduction est
                rempli et signé et vous avez l'obligation de me faire parvenir
                la preuve de sa stérilisation vers l'âge de 8 mois maximum.
              </p>
              <p>
                Pour une réservation un montant de 400$ non remboursable est
                exigé pour un chiot non reproducteur ou un adulte stérilisé.
              </p>
              <p>Nous nous réservons le droit de refuser une vente.</p>
              <p>Jeunes ou adulte de disponible à l'occasion</p>
              <p>
                Pour vôtre chien ou chiot je demande une cour clôturée ou un
                enclos d'un minimum de 8' x 8'.
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Chiots;
