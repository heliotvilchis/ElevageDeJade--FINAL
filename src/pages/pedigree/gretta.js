import React from "react";

// Componets
import Container from "../../components/container/container";
import Layout from "../../components/layout/layout";

//CSS
import * as styleComponets from "../../assets/styles/pedigree.module.scss";

// Data
import ped from "../../data/ped-gretta.json";

function pedmap(params) {
  return (
    <React.Fragment>
      {params.map((item) => (
        <div className={styleComponets.nametag}>
          <small>{item.link}</small>
          <p>{item.name}</p>
        </div>
      ))}
    </React.Fragment>
  );
}

// Markup
const Pedigree = () => {
  return (
    <Layout>
      <Container>
        <div className={styleComponets.pedigree}>
          {ped.map((item) => (
            <h1>{item.name}</h1>
          ))}
          <h4>Parents</h4>
          <h4>Grands-Parents</h4>
          <h4>Arrières Grands-Parents</h4>
          <h4>Arrières-Arrières Grands-Parents</h4>

          {ped.map((item) => (
            <React.Fragment>{pedmap(item.parents)}</React.Fragment>
          ))}

          {ped.map((item) => (
            <React.Fragment>{pedmap(item.grandsParents)}</React.Fragment>
          ))}

          {ped.map((item) => (
            <React.Fragment>{pedmap(item.arGrandsParents)}</React.Fragment>
          ))}

          {ped.map((item) => (
            <React.Fragment>{pedmap(item.arArGrandsParents)}</React.Fragment>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Pedigree;
