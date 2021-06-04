import React from "react";
import { graphql } from "gatsby";

// Assets
import Contianer from "../../components/container/container";
//import AlbumComp from "../../components/album/album";
import Layout from "../../components/layout/layout";

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

function images() {
  let x = 0;
  var y = [];
  while (x < 3) {
    y[x] = <h1>test {x}</h1>;
    x++;
  }
  let z = y[1];
  return <h1>{z}</h1>;
}

// Markup
const Album = ({ data }) => {
  return (
    <Layout>
      <Contianer>
        <h1>{data.allFile.totalCount}</h1>
        {images()}
      </Contianer>
    </Layout>
  );
};

export default Album;
