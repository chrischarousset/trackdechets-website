import React from "react";
import styled from "styled-components";
import { Header } from "../../Header";
import { Layout } from "../../Layout";
import { Footer } from "../../Footer";
import { Container } from "../../Container";
import { Typography } from "../../Typography";
import { Button } from "../../Button";
import { Section, SectionHeading } from "../../Section";
import { List, ListItem } from "../../List";

const BecomePartnerQuestions = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${(props) => props.theme.spacing(8)};

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PartnersLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${(props) => props.theme.spacing(4)};

  @media ${(props) => props.theme.breakpoints.up("medium")} {
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
      <Header />
      <Section>
        <Container>
          <Typography as="h1" variant="h1" gutterBottom>
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
                Quels engagements ?
              </Typography>
              <List>
                <ListItem>
                  La chaine des BSD que vous gérez est 100% dématérialisée.
                </ListItem>
                <ListItem>
                  Votre outil de gestion des BSD (ERP, etc.) est connecté à
                  l'API de Trackdéchets.
                </ListItem>
                <ListItem>
                  Vous invitez vos clients et partenaires à devenir utilisateurs
                  de Trackdéchets, en utilisant les supports et documents mis à
                  votre disposition.
                </ListItem>
                <ListItem>
                  Vous vérifiez et validez les données de la "fiche entreprise".
                </ListItem>
              </List>
            </div>

            <div>
              <Typography variant="h3" gutterBottom>
                Quels bénéfices ?
              </Typography>
              <List>
                <ListItem>
                  Mise en visibilité lors des diverses communication
                  Trackdéchets (newsletter, présentations) et via le
                  référencement sur le site Trackdéchets via la page
                  "Partenaires".
                </ListItem>
                <ListItem>
                  Appui de la DGPR pendant la phase de transition (contrôle
                  routiers des BSD).
                </ListItem>
                <ListItem>
                  Participation à des ateliers exclusifs sur le produit à
                  travers notre comité produit restreint.
                </ListItem>
                <ListItem>
                  Accès à des informations privilégiées sur l'avancement et les
                  évolutions autour du produit.
                </ListItem>
              </List>
            </div>
          </BecomePartnerQuestions>
        </Container>
      </Section>
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
      <Footer />
    </Layout>
  );
}
