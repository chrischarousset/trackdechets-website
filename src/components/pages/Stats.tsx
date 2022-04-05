import * as React from "react";
import styled from "styled-components";
import { Layout } from "../Layout";
import { Container } from "../Container";
import { Section, SectionHeading } from "../Section";

const Iframe = styled.iframe`
  display: flex;
  margin: auto;
  background-color: transparent;
`;

export function Stats() {
  return (
    <Layout>
      <Container>
        <Section>
          <SectionHeading>
            Déchets dangereux tracés dans Trackdéchets
          </SectionHeading>
          <Iframe
            src="https://statistiques.trackdechets.beta.gouv.fr"
            frameBorder="0"
            width="1200"
            height="3000"
            allowTransparency
          />
        </Section>
      </Container>
    </Layout>
  );
}
