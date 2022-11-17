import * as React from "react";
import { graphql } from "gatsby";
import { Partners } from "../components/pages";

interface PagePartnersLogos {
  data: {
    saas: {
      edges: Array<{
        node: {
          name: string;
          publicURL: string;
        };
      }>;
    };
    others: {
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
    saas: { edges: saasEdges },
    others: { edges: othersEdges },
  },
}: PagePartnersLogos) {
  return (
    <Partners
      saasLogos={saasEdges.map((edge) => edge.node)}
      otherLogos={othersEdges.map((edge) => edge.node)}
    />
  );
}

export const pageQuery = graphql`
  query GetPartnersLogos {
    saas: allFile(
      filter: { sourceInstanceName: { eq: "saas-partners-logos" } }
      sort: { fields: changeTime }
    ) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
    others: allFile(
      filter: { sourceInstanceName: { eq: "other-partners-logos" } }
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
