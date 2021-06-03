import React from "react";

// Components
import Contianer from "../components/container/container";
import ChampionsCard from "../components/champions-card/champions-card";
import Layout from "../components/layout/layout";

//CSS
import * as styleComponents from "../assets/styles/champions.module.scss";

//images

// Markup
const Champions = () => {
  return (
    <Layout>
      <Contianer>
        <div className={styleComponents.championspage}>
          <h1>Nos Champions</h1>
          <ChampionsCard image="none" dname="test" undertext="test text" />
        </div>
      </Contianer>
    </Layout>
  );
};

export default Champions;
