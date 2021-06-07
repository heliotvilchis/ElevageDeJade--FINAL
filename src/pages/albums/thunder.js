import React from "react";
import { graphql } from "gatsby";

// Assets
import Contianer from "../../components/container/container";
import Layout from "../../components/layout/layout";

// CSS
import * as styleComponents from "../../assets/styles/album.module.scss";

var dogname = "DeJade Soft Breeze of Thunder";
var otherinfo = "";

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "imagesThunder" } }) {
      edges {
        node {
          publicURL
        }
      }
      totalCount
    }
  }
`;

// Markup
const Album = ({ data }) => {
  /*
    Create array allImages
    Populate the array with all the urls given by the querry
  */
  const allImages = [];

  for (let i = 0; i < data.allFile.totalCount; i++) {
    allImages[i] = { url: data.allFile.edges[i].node.publicURL };
    console.log(i);
  }

  return (
    <Layout>
      <Contianer>
        <section className={styleComponents.album}>
          <h1>{dogname}</h1>
          <p>{otherinfo}</p>
          <div className={styleComponents.grid}>
            {allImages.map((item) => (
              <img src={item.url} alt="" />
            ))}
          </div>
        </section>
      </Contianer>
    </Layout>
  );
};

export default Album;
