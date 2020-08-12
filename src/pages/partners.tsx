import * as React from "react";
import { graphql } from "gatsby";
import { Partners } from "../components/pages";

interface PagePartnersLogos {
  data: {
    allFile: {
      edges: Array<{
        node: {
          name: string;
          publicURL: string;
        };
      }>;
    };
  };
}

export default function PagePartners({
  data: {
    allFile: { edges },
  },
}: PagePartnersLogos) {
  return <Partners logos={edges.map((edge) => edge.node)} />;
}

export const pageQuery = graphql`
  query GetPartnersLogos {
    allFile(
      filter: { sourceInstanceName: { eq: "partners-logos" } }
      sort: { fields: changeTime }
    ) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`;
