import * as React from "react";
import styled from "styled-components";
import { Layout } from "../Layout";
import { Container } from "../Container";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { Section, SectionHeading } from "../Section";
import { List, ListItem } from "../List";

const BecomePartnerQuestions = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${(props) => props.theme.spacing(8)};

  @media ${(props) => props.theme.breakpoints.up("large")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PartnersLogos = styled.div`
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
  logos: Array<{ name: string; publicURL: string }>;
}

export function Partners({ logos }: PartnersProps) {
  return (
    <Layout>
      <Section>
        <Container>
          <SectionHeading>Nos partenaires actuels</SectionHeading>
          <PartnersLogos>
            {logos.map(({ name, publicURL }, index) => (
              <PartnersLogosItem key={index}>
                <img src={publicURL} alt={name} />
              </PartnersLogosItem>
            ))}
          </PartnersLogos>
        </Container>
      </Section>
      <Section>
        <Container>
          <Typography as="h1" variant="h1" gutterBottom centered>
            Le Partenariat avec Trackdéchets
          </Typography>
          <Typography gutterBottom>
            Trackdéchets est un outil de la Fabrique Numérique du MTES soutenu
            par la direction générale de la prévention des risques (DGPR).
          </Typography>
          <Typography gutterBottom>
            Le produit Trackdéchets, évolue de manière régulière pour
            s'enrichir. La dématérialisation de la traçabilité de bout en bout
            est déjà possible techniquement, permettant d'anticiper les
            évolutions réglementaires en cours.
          </Typography>
          <Typography>
            Ce partenariat acte l’engagement fort d’entreprises dans la démarche
            d’amélioration, de test et de déploiement de Trackdéchets. A ce
            titre, les organisations partenaires référencées sur cette page,
            seront soutenues par la DGPR en cas de contrôle du transporteur et
            comprend toute la phase de tests et de montée en puissance de
            Trackdéchets, jusqu'à l'évolution juridique.
          </Typography>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading>Devenir partenaire</SectionHeading>

          <BecomePartnerQuestions>
            <div>
              <Typography variant="h3" gutterBottom>
                Pourquoi devenir partenaire ?
              </Typography>
              <List>
                <ListItem>
                  Vous serez mis en visibilité à travers les diverses
                  communications de Trackdéchets (page partenaires, newsletter,
                  présentations, réseaux sociaux)
                </ListItem>
                <ListItem>
                  Vous pourrez bénéficier d’un accompagnement dédié par l’équipe
                  de Trackdéchets afin de déployer facilement la plateforme à
                  votre réseau (clients, prestataires, partenaires).
                </ListItem>
                <ListItem>
                  Vous pourrez participer à des ateliers exclusifs sur le
                  produit à travers notre comité produit restreint.
                </ListItem>
              </List>
            </div>

            <div>
              <Typography variant="h3" gutterBottom>
                Quels engagements ?
              </Typography>
              <Typography variant="h4" gutterBottom>
                Vous avez un ERP/ SaaS, vous allez utiliser Trackdéchets par
                API&nbsp;?
              </Typography>
              <List>
                <ListItem>
                  Votre outil doit être connecté à l’API Trackdéchets.
                </ListItem>
                <ListItem>
                  Vous devez avoir démarré la phase pilote avec des partenaires
                  de test.
                </ListItem>
              </List>
              <Typography variant="h4" gutterBottom>
                Vous utilisez Trackdéchets en propre, par l’interface ?
              </Typography>
              <List>
                <ListItem>
                  Vous devez avoir informé les acteurs (clients, prestataires)
                  sur vos chaînes de traçabilité.
                </ListItem>
                <ListItem>
                  Vous devez avoir commencé à faire circuler des BSD
                  dématérialisés sur une chaîne de test.
                </ListItem>
              </List>
            </div>
          </BecomePartnerQuestions>
          <Typography variant="emphasis" centered>
            Dans tous les cas, pour être partenaire de Trackdéchets, des
            bordereaux dématérialisés doivent circuler&nbsp;!
          </Typography>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading>Envie de devenir partenaire ?</SectionHeading>
          <ContactButtonContainer>
            <Button
              as="a"
              href="mailto:emmanuel.flahaut@developpement-durable.gouv.fr"
              variant="secondary"
              size="large"
            >
              Contactez-nous !
            </Button>
          </ContactButtonContainer>
        </Container>
      </Section>
    </Layout>
  );
}
