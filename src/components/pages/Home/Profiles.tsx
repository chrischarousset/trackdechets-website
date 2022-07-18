import * as React from "react";
import styled from "styled-components";
import { Container } from "../../Container";
import { Typography } from "../../Typography";
import { List, ListItem } from "../../List";
import { Section, SectionHeading } from "../../Section";
import illustrationProducer from "./assets/illustrationProducer.svg";
import illustrationCollector from "./assets/illustrationCollector.svg";
import illustrationTransporter from "./assets/illustrationTransporter.svg";

const ProfilesItem = styled.article`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing(6)};

  &:last-child {
    margin-bottom: 0;
  }

  @media ${(props) => props.theme.breakpoints.up("large")} {
    margin-bottom: ${(props) => props.theme.spacing(12)};

    &::before,
    &::after {
      content: "";
      flex: 1;
    }

    &:nth-child(even) > * {
      flex-direction: row-reverse;
    }

    &:nth-child(odd)::after {
      background-color: ${(props) => props.theme.colors.gray.light};
    }

    &:nth-child(even)::before {
      background-color: ${(props) => props.theme.colors.gray.light};
    }
  }
`;
const ProfilesItemInner = styled(Container)`
  @media ${(props) => props.theme.breakpoints.up("large")} {
    display: flex;
    align-items: center;
    padding: 0;
  }
`;
const ProfilesItemContent = styled.div`
  flex: 1;
  padding: ${(props) => props.theme.spacing(4)};
  background-color: ${(props) => props.theme.colors.gray.light};
`;
const ProfilesItemList = styled(List)`
  margin-bottom: ${(props) => props.theme.spacing(2)};

  &:last-child {
    margin-bottom 0;
  }
`;
const ProfilesItemIllustration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing(4)};

  @media ${(props) => props.theme.breakpoints.up("large")} {
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export function Profiles() {
  return (
    <Section>
      <Container>
        <SectionHeading>
          En quoi je suis concerné(e) par Trackdéchets ?
        </SectionHeading>
      </Container>
      <ProfilesItem>
        <ProfilesItemInner>
          <ProfilesItemIllustration>
            <img src={illustrationProducer} alt="" width="250" />
          </ProfilesItemIllustration>
          <ProfilesItemContent>
            <Typography variant="h3" gutterBottom>
              <strong>Producteur</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Qu’est-ce que je peux faire avec Trackdéchets ?</strong>
            </Typography>
            <ProfilesItemList color="muted">
              <ListItem>
                Je peux éditer moi-même ou co-éditer mes Bordereaux de Suivi de
                Déchets (BSD)
              </ListItem>
              <ListItem>
                Je peux signer l’enlèvement de mes déchets de manière
                dématérialisée
              </ListItem>
              <ListItem>
                Je peux suivre tous mes BSD en temps réel dans un tableau de
                bord unique
              </ListItem>
              <ListItem>
                Je dispose d’un registre réglementaire automatiquement à jour
                incluant tous mes BSD, quels que soient mes prestataires
              </ListItem>
              <ListItem>
                Je peux vérifier les autorisations réglementaires de mes
                prestataires déchets
              </ListItem>
            </ProfilesItemList>

            <Typography variant="body1" gutterBottom>
              <strong>En quoi ça simplifie mes pratiques ?</strong>
            </Typography>
            <ProfilesItemList color="muted">
              <ListItem>
                Plus besoin de papier à préparer, transmettre, archiver
              </ListItem>
              <ListItem>Fini les relances à mes prestataires</ListItem>
              <ListItem>
                Plus besoin d’archivage et de compilation pour consolider mon
                registre réglementaire Sécurité/ transparence sur les
                prestataires avec qui je travaille
              </ListItem>
            </ProfilesItemList>
          </ProfilesItemContent>
        </ProfilesItemInner>
      </ProfilesItem>
      <ProfilesItem>
        <ProfilesItemInner>
          <ProfilesItemIllustration>
            <img src={illustrationCollector} alt="" width="250" />
          </ProfilesItemIllustration>
          <ProfilesItemContent>
            <Typography variant="h3" gutterBottom>
              <strong>Professionnel des déchets</strong>
            </Typography>

            <Typography variant="body1" gutterBottom>
              <strong>Qu’est-ce que je peux faire avec Trackdéchets ?</strong>
            </Typography>
            <ProfilesItemList color="muted">
              <ListItem>
                Je peux connecter mon outil / mon ERP à Trackdéchets afin de
                recevoir et transmettre les informations de traçabilité en temps
                réel
              </ListItem>
              <ListItem>
                Je peux faire signer mes BSD de façon dématérialisée par mes
                clients et transporteurs
              </ListItem>
              <ListItem>
                Je peux éditer des Bordereaux de Suivi pour mes clients (si je
                n’ai pas déjà un outil pour le faire)
              </ListItem>
            </ProfilesItemList>

            <Typography variant="body1" gutterBottom>
              <strong>En quoi ça simplifie mes pratiques ?</strong>
            </Typography>
            <ProfilesItemList color="muted">
              <ListItem>
                Plus besoin de papier à préparer, transmettre, archiver
              </ListItem>
              <ListItem>
                Plus besoin de m’adapter aux différentes pratiques de mes
                clients et partenaires pour gérer mes BSD
              </ListItem>
              <ListItem>
                Plus besoin de retourner les BSD à mes clients qui sont informés
                au fil de l'eau de l'état de leurs déchets
              </ListItem>
            </ProfilesItemList>
          </ProfilesItemContent>
        </ProfilesItemInner>
      </ProfilesItem>
      <ProfilesItem>
        <ProfilesItemInner>
          <ProfilesItemIllustration>
            <img src={illustrationTransporter} alt="" width="250" />
          </ProfilesItemIllustration>
          <ProfilesItemContent>
            <Typography variant="h3" gutterBottom>
              <strong>Transporteur de déchets</strong>
            </Typography>

            <Typography variant="body1" gutterBottom>
              <strong>Qu’est-ce que je peux faire avec Trackdéchets ?</strong>
            </Typography>
            <ProfilesItemList color="muted">
              <ListItem>
                Je peux signer l’enlèvement du déchet sur site de façon
                dématérialisée
              </ListItem>
              <ListItem>
                Je peux avoir une vue d’ensemble sur mes collectes en cours ou à
                venir dans un tableau de bord unique
              </ListItem>
              <ListItem>
                Je peux télécharger un registre réglementaire automatiquement à
                jour incluant tous mes BSD, quels que soient mes clients
              </ListItem>
              <ListItem>
                Je peux générer des bordereaux de suivi de déchets pour mes
                clients
              </ListItem>
            </ProfilesItemList>

            <Typography variant="body1" gutterBottom>
              <strong>En quoi ça simplifie mes pratiques ?</strong>
            </Typography>
            <ProfilesItemList color="muted">
              <ListItem>
                Plus besoin de papier à préparer, transmettre, archiver
              </ListItem>
              <ListItem>
                Plus besoin de présenter un BSD papier en cas de contrôle
                routier
              </ListItem>
            </ProfilesItemList>
          </ProfilesItemContent>
        </ProfilesItemInner>
      </ProfilesItem>
    </Section>
  );
}
