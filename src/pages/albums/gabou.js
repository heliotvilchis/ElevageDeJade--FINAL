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

function images2(params) {
  return <h2>hello</h2>;
}

const test = [{ name: "first" }, { name: "second" }];

test[2] = { name: "tree" };

// Markup
const Album = ({ data }) => {
  return (
    <Layout>
      <Contianer>
        <h1>{data.allFile.totalCount}</h1>
        <p>{data.allFile.edges[0].node.publicURL}</p>
        {images()}
        {images2()}
        {test.map((item) => (
          <p>{item.name}</p>
        ))}
      </Contianer>
    </Layout>
  );
};

export default Album;
