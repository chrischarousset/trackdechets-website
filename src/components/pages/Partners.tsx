import * as React from "react";
import styled from "styled-components";
import { Layout } from "../Layout";
import { Container } from "../Container";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { Section, SectionHeading } from "../Section";

const SaasPartnersLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${(props) => props.theme.spacing(4)};

  @media ${(props) => props.theme.breakpoints.up("large")} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const OtherPartnersLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${(props) => props.theme.spacing(4)};

  @media ${(props) => props.theme.breakpoints.up("large")} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
const PartnersLogosItem = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const ContactButtonContainer = styled.div`
  text-align: center;
`;

interface PartnersProps {
  saasLogos: Array<{ name: string; publicURL: string }>;
  otherLogos: Array<{ name: string; publicURL: string }>;
}

export function Partners({ saasLogos, otherLogos }: PartnersProps) {
  return (
    <Layout>
      <Section>
        <Container>
          <Typography as="h1" variant="h1" gutterBottom centered>
            Éditeurs de logiciels partenaires
          </Typography>
          <Container>
            <Typography gutterBottom variant="body1">
              Ces solutions privées sont connectées à Trackdéchets par API.
              <br />
              Cela permet d'utiliser leur logiciel métier tout en transmettant
              automatiquement les données réglementaires à Trackdéchets, sans
              double saisie.
            </Typography>
          </Container>

          <SaasPartnersLogos>
            {saasLogos.map(({ name, publicURL }, index) => (
              <PartnersLogosItem key={index}>
                <img src={publicURL} alt={name} />
              </PartnersLogosItem>
            ))}
          </SaasPartnersLogos>
        </Container>
        <Container>
          <Typography gutterBottom variant="body1">
            Vous éditez un logiciel dont la connexion technique avec
            Trackdéchets est opérationelle ?<br />
            N'hésitez pas à nous écrire pour demander à être visible en tant que
            partenaire de la plateforme.
          </Typography>
        </Container>

        <Container>
          <ContactButtonContainer>
            <Button
              as="a"
              href="mailto:contact@trackdechets.beta.gouv.fr"
              variant="secondary"
              size="large"
            >
              Contactez-nous !
            </Button>
          </ContactButtonContainer>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading>Autres partenaires historiques</SectionHeading>
          <Typography gutterBottom variant="body1">
            Depuis 2018, ces professionnels des déchets ou producteurs ont
            contribué à co-constuire la plateforme pour développer des
            fonctionalités fidèles aux pratiques du terrain.
          </Typography>
          <OtherPartnersLogos>
            {otherLogos.map(({ name, publicURL }, index) => (
              <PartnersLogosItem key={index}>
                <img src={publicURL} alt={name} />
              </PartnersLogosItem>
            ))}
          </OtherPartnersLogos>
        </Container>
      </Section>
    </Layout>
  );
}
