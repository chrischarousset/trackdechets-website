import * as React from "react";
import styled from "styled-components";
import { Layout } from "../Layout";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Typography } from "../Typography";
import { Container } from "../Container";
import { Section, SectionHeading } from "../Section";

const Grid = styled.div<{ items: number }>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${(props) => props.theme.spacing(1)};

  & + & {
    margin-top: ${(props) => props.theme.spacing(2)};
  }

  @media ${(props) => props.theme.breakpoints.up("medium")} {
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
      <Header />

      <Container>
        <Section>
          <SectionHeading>
            Déchets dangereux traçés dans Trackdéchets
          </SectionHeading>

          <Grid items={1}>
            <GridItem>
              <iframe
                src="https://metabase.trackdechets.beta.gouv.fr/public/question/82437964-44ee-43ae-8267-a5b521e815b4"
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
                src="https://metabase.trackdechets.beta.gouv.fr/public/question/fa7e2315-bbae-4cf6-ae0f-34cf4821c226"
                frameBorder="0"
                width="350"
                height="250"
                allowTransparency
              />
            </GridItem>
            <GridItem>
              <iframe
                src="https://metabase.trackdechets.beta.gouv.fr/public/question/f72b7a7a-3f75-4a46-839d-bffce3b87409"
                frameBorder="0"
                width="350"
                height="250"
                allowTransparency
              />
            </GridItem>
            <GridItem>
              <iframe
                src="https://metabase.trackdechets.beta.gouv.fr/public/question/657c9d7f-404f-40a2-9a74-fc808ceae95f"
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
                src="https://metabase.trackdechets.beta.gouv.fr/public/question/fc1df57e-d1c8-4150-a113-1f7bba5c1764"
                frameBorder="0"
                width="700"
                height="400"
                allowTransparency
              />
            </GridItem>
            <GridItem>
              <iframe
                src="https://metabase.trackdechets.beta.gouv.fr/public/question/d0ac5b40-b35e-4fa6-94f5-3b586ad8e349"
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
                src="https://metabase.trackdechets.beta.gouv.fr/public/question/15cf54b7-28a4-4099-b033-111341937d77"
                frameBorder="0"
                width="350"
                height="250"
                allowTransparency
              />
            </GridItem>
            <GridItem>
              <iframe
                src="https://metabase.trackdechets.beta.gouv.fr/public/question/774a988a-039c-4bd0-b74a-54f5dcf251cc"
                frameBorder="0"
                width="350"
                height="250"
                allowTransparency
              />
            </GridItem>
          </Grid>
        </Section>
      </Container>

      <Footer />
    </Layout>
  );
}
