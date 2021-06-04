import React from "react";
import { graphql } from "gatsby";

// Assets
import Contianer from "../../components/container/container";
import Layout from "../../components/layout/layout";

// CSS
import * as styleComponents from "../../assets/styles/album.module.scss";

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "imagesGabou" } }) {
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
          {allImages.map((item) => (
            <img src={item.url} alt="" />
          ))}
        </section>
      </Contianer>
    </Layout>
  );
};

export default Album;
