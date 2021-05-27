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

export function Stats() {
  return (
    <Layout>
      <Container>
        <Section>
          <SectionHeading>
            Déchets dangereux traçés dans Trackdéchets
          </SectionHeading>

          <Grid items={1}>
            <GridItem>
              <iframe
                src="https://analytics.trackdechets.beta.gouv.fr/public/question/7d4e0e4b-d86a-46ae-b3df-20912b75b6ab"
                frameBorder="0"
                width="800"
                height="400"
                allowTransparency
              />
            </GridItem>
          </Grid>

          <Grid items={1}>
            <GridItem>
              <iframe
                src="https://analytics.trackdechets.beta.gouv.fr/public/question/3c57f70c-fc58-452e-81f1-33dcaa14166d"
                frameBorder="0"
                width="800"
                height="400"
                allowTransparency
              />
            </GridItem>
          </Grid>

          <Grid items={3}>
            <GridItem>
              <iframe
                src="https://analytics.trackdechets.beta.gouv.fr/public/question/09d175d6-8b38-42f4-9097-dc753d360217"
                frameBorder="0"
                width="350"
                height="250"
                allowTransparency
              />
            </GridItem>
            <GridItem>
              <iframe
                src="https://analytics.trackdechets.beta.gouv.fr/public/question/73664387-3c43-4b38-8b16-4d1d7f71a50c"
                frameBorder="0"
                width="350"
                height="250"
                allowTransparency
              />
            </GridItem>
            <GridItem>
              <iframe
                src="https://analytics.trackdechets.beta.gouv.fr/public/question/750cfc72-6549-48f0-9483-5c9d449d60b1"
                frameBorder="0"
                width="350"
                height="250"
                allowTransparency
              />
            </GridItem>
          </Grid>
        </Section>

        <Section>
          <SectionHeading>
            Les utilisateurs et partenaires de Trackdéchets
          </SectionHeading>

          <Grid items={2}>
            <GridItem>
              <iframe
                src="https://analytics.trackdechets.beta.gouv.fr/public/question/312b9159-cab7-4a6e-90ff-de04287f4d8a"
                frameBorder="0"
                width="700"
                height="400"
                allowTransparency
              />
            </GridItem>
            <GridItem>
              <iframe
                src="https://analytics.trackdechets.beta.gouv.fr/public/question/7fc8a525-95c3-48e0-becb-6bb5668a2868"
                frameBorder="0"
                width="350"
                height="400"
                allowTransparency
              />
            </GridItem>
          </Grid>
        </Section>

        <Section>
          <SectionHeading>
            Sécurisation écosystème déchets dangeureux
          </SectionHeading>

          <Grid items={2}>
            <GridItem>
              <iframe
                src="https://analytics.trackdechets.beta.gouv.fr/public/question/4eb75bba-f3fe-4617-9038-9eec6b0e1d51"
                frameBorder="0"
                width="350"
                height="250"
                allowTransparency
              />
            </GridItem>
            <GridItem>
              <iframe
                src="https://analytics.trackdechets.beta.gouv.fr/public/question/b8497611-62b7-4cd5-a82e-fbcbf6348ee2"
                frameBorder="0"
                width="350"
                height="250"
                allowTransparency
              />
            </GridItem>
          </Grid>
        </Section>
      </Container>
    </Layout>
  );
}
