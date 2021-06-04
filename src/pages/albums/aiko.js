import React from "react";
import { graphql } from "gatsby";

// Assets
import Contianer from "../../components/container/container";
import Layout from "../../components/layout/layout";

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "imagesHere" } }) {
      edges {
        node {
          id
          absolutePath
          relativePath
          publicURL
        }
      }
      totalCount
    }
  }
`;

function renderImages({ data }) {
  return <img src={data.allFile.edges[0].node.publicURL} alt="" />;
}

// Markup
const Album = ({ data }) => {
  return (
    <Layout>
      <Contianer>
        <h1>the album</h1>
        <p>{data.allFile.edges[0].node.relativePath}</p>
        <img src={data.allFile.edges[0].node.publicURL} alt="" />
        <p>Total images : {data.allFile.totalCount}</p>
        {renderImages}
      </Contianer>
    </Layout>
  );
};

export default Album;
