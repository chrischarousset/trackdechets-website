import * as React from "react";
import styled from "styled-components";
import { Layout } from "../Layout";
import { Container } from "../Container";
import { Section, SectionHeading } from "../Section";

const Grid = styled.div<{ items: number }>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${(props) => props.theme.spacing(1)};

  & + & {
    margin-top: ${(props) => props.theme.spacing(2)};
  }

  @media ${(props) => props.theme.breakpoints.up("large")} {
    grid-template-columns: repeat(${(props) => props.items}, 1fr);
  }
`;
const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Maintenance = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;

export function Stats() {
  return (
    <Layout>
      <Container>
        <Section>
          <SectionHeading>
            Déchets dangereux tracés dans Trackdéchets
          </SectionHeading>
          <iframe
                src="https://trackdechets-public-stats.osc-secnum-fr1.scalingo.io/"
                frameBorder="0"
                width="1000"
                height="3000"
                allowTransparency
              />
        </Section>
      </Container>
    </Layout>
  );
}
