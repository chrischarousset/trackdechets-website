import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const IncidentBannerContainer = styled.div`
  padding: 1rem;
  background-color: #ffe7a0;
`;

export const query = graphql`
  query Incident {
    site {
      siteMetadata {
        incident
      }
    }
  }
`;

export function IncidentBanner() {
  const {
    site: {
      siteMetadata: { incident },
    },
  } = useStaticQuery(query);

  if (incident) {
    return (
      <IncidentBannerContainer dangerouslySetInnerHTML={{ __html: incident }} />
    );
  }

  return null;
}
