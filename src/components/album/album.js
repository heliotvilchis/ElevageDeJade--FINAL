import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function Album() {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={(data) => (
        <header>
          <h1>{data.allFile.totalCount}</h1>
          <img src={data.allFile.edges[0].node.publicURL} alt="" />
        </header>
      )}
    />
  );
}
