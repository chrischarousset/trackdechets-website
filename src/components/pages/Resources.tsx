import * as React from "react";
import styled, { css } from "styled-components";
import { Layout } from "../Layout";
import { Container } from "../Container";
import { Typography } from "../Typography";
import { Section } from "../Section";
import arrow from "../assets/arrow-right-line.svg";
import notification from "../assets/resources-notification.svg";
import questionMark from "../assets/resources-question.svg";
import media from "../assets/resources-media-setting.svg";
import mail from "../assets/mail-line.svg";
import mailBlue from "../assets/mail-line-blue.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Modal } from "../Modal";

const Halved = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${(props) => props.theme.spacing(4)};
  margin-top: 2rem;

  @media ${(props) => props.theme.breakpoints.up("large")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Third = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${(props) => props.theme.spacing(4)};
  margin-top: 2rem;

  @media ${(props) => props.theme.breakpoints.up("large")} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Quarter = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: ${(props) => props.theme.spacing(4)};
  margin-top: 2rem;

  & > div {
    margin: 0;
    padding: 0;
  }

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.up("large")} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

interface ButtonProps {
  Big?;
  Secondary?;
}

const buttonStyles = css<ButtonProps>`
  color: #ffffff;
  background-color: rgb(0, 0, 145);
  border: rgb(0, 0, 145) solid 2px;
  cursor: pointer;
  font-size: 14px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-color: rgb(0, 0, 110);
    border-color: rgb(0, 0, 110);
  }

  & img {
    height: 20px;
    margin: 0 5px;
    vertical-align: text-bottom;
    width: 20px;
  }

  ${(props) =>
    props.Secondary &&
    css`
      background-color: transparent;
      color: rgb(0, 0, 145);

      &:hover {
        background-color: #bbbbbb;
        border-color: rgb(0, 0, 110);
      }
    `}

  ${(props) =>
    props.Big &&
    css`
      font-size: 20px;
      padding: 15px;

      & img {
        height: 25px;
        width: 25px;
      }
    `}
`;

const ResourceButton = styled.button`
  ${buttonStyles}
`;

const ResourceLink = styled.a`
  ${buttonStyles}
`;

const kitFaqStyles = css`
  color: #1e1e1e;
  text-decoration: none;
  display: block;
  cursor: pointer;
  background-color: rgb(249, 248, 246);
  border-bottom: solid 4px #000091;
`;

const Kit = styled.a`
  ${kitFaqStyles};
  padding: 20px 0;
  margin: 20px 10px 0;
`;

const Faq = styled.a`
  ${kitFaqStyles};

  & > img {
    padding: 40px 50px;
    @media ${(props) => props.theme.breakpoints.down("medium")} {
      display: none;
    }
  }

  & > div {
    display: inline-block;
    padding-top: 17px;
    padding-right: 17px;
    width: calc(100% - 160px);
    vertical-align: top;
    @media ${(props) => props.theme.breakpoints.down("medium")} {
      padding-left: 17px;
      width: 100%;
    }
  }
`;

const ArrowedText = styled.span`
  & a,
  & a:visited {
    color: black;
  }

  & span:first-child {
    top: 6px;
    position: relative;
  }
`;

const PaddedTypography = styled(Typography)`
  @media ${(props) => props.theme.breakpoints.up("medium")} {
    padding-left: 100px;
  }
`;

const Welcome = styled(Halved)`
  & > img {
    @media ${(props) => props.theme.breakpoints.down("large")} {
      display: none;
    }
  }
`;

const carouselItems = [
  <ToKit
    image={media}
    title={"Présentation globale de"}
    text={"Trackdéchets"}
    link={
      "https://drive.google.com/file/d/11NYm6i1OotMmVi-gDDD1kGnKEvH2U3sE/view?usp=sharing"
    }
  />,
  <ToKit
    image={media}
    title={"Brochure"}
    text={"pour les collectivités"}
    link={
      "https://drive.google.com/file/d/1RLfOw7D8R3DgB8nEG3-CB7vsbFVp0jik/view?usp=sharing"
    }
  />,
  <ToKit
    image={media}
    title={"Brochure"}
    text={"pour les professionnels"}
    link={
      "https://drive.google.com/file/d/1yWCtVWF3l1kantFKuhdSRdplAHvANOZl/view?usp=sharing"
    }
  />,
  <ToKit
    image={media}
    title={"Méthode de déploiement"}
    text={"pour les professionnels"}
    link={
      "https://drive.google.com/file/d/1xFT0j2UetrG4ZTwpP5GaCvZpPwY14ktq/view?usp=sharing"
    }
  />,
  <ToKit
    image={media}
    title={"Flyer à imprimer"}
    text={"pour l'inscription d'un producteur"}
    link={
      "https://drive.google.com/file/d/1I6Cp3EnyzkPGnuMlFOTZHvFW8BwqHPA3/view?usp=sharing"
    }
  />,
  <ToKit
    image={media}
    title={"Flyer à imprimer"}
    text={"pour les producteurs de DASRI"}
    link={
      "https://drive.google.com/file/d/1DVrNN_eUFTdOn0GRvpkZdR-07kB3D690/view?usp=sharing"
    }
  />,
  <ToKit
    image={media}
    title={"Flyer à imprimer"}
    text={"pour les producteurs d'amiante"}
    link={
      "https://drive.google.com/file/d/1CYiy0wHr1VwFWBpSGo1HxQ_r8oZednYz/view?usp=sharing"
    }
  />,
  <ToKit
    image={media}
    title={"Mail d'information type"}
    text={"pour mon partenaire déchet"}
    link={
      "https://docs.google.com/document/d/1bam-BN64f95ooWCU64H761gUNUzmnIyn/edit?usp=sharing&ouid=117864328329818097926&rtpof=true&sd=true"
    }
  />,
  <ToKit
    image={media}
    title={"Mail d'information type"}
    text={"pour un producteur"}
    link={
      "https://docs.google.com/document/d/1lZjWzWZvmlRtvVhRIMyA_bKKH513Lmcv/edit?usp=sharing&ouid=117864328329818097926&rtpof=true&sd=true"
    }
  />,
  <ToKit
    image={media}
    title={"Dossier de presse"}
    text={"Trackdéchets"}
    link={
      "https://drive.google.com/file/d/18vYO25SYU-bak4zLKsPl948wWpNCTuqH/view?usp=sharing"
    }
  />,
  <ToKit
    image={media}
    title={"Dossier de presse"}
    text={"pour les transporteurs"}
    link={
      "https://drive.google.com/file/d/1cUwg08ewoiIdXHsxkW3U906T9dEQWqnX/view?usp=sharing"
    }
  />,
];

const carouselResponsiveConf = {
  0: {
    items: 1,
  },
  1024: {
    items: 3,
  },
};

export function ToArrowedText({ text }) {
  return (
    <ArrowedText>
      <span>
        <img src={arrow} alt="arrow" width="24" />
      </span>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </ArrowedText>
  );
}

export function ToFAQ({ question, text, link }) {
  return (
    <Faq href={link} target={"_blank"}>
      <img
        height={"140px"}
        width={"160px"}
        src={questionMark}
        alt={"Question"}
      />
      <div>
        <Typography bold dangerouslySetInnerHTML={{ __html: question }} />
        <Typography dangerouslySetInnerHTML={{ __html: text }} />
        <img src={arrow} alt="arrow" width="24" />
      </div>
    </Faq>
  );
}

export function ToKit({ image, title, text, link }) {
  return (
    <Kit href={link} target={"_blank"}>
      <img
        height={"80px"}
        width={"100%"}
        src={image}
        style={{ margin: "10px auto" }}
        alt={"Image Kit"}
      />
      <Typography
        bold
        centered={true}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Typography dangerouslySetInnerHTML={{ __html: text }} centered={true} />
    </Kit>
  );
}

export function EmbeddedVideo({ url, text }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(231,231,231)",
        borderBottom: "solid 4px #000091",
      }}
    >
      <iframe
        width={"100%"}
        height={"230px"}
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          padding: "6px 0",
          textAlign: "center",
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}

export function Resources() {
  const [isNLGeneralOpen, setIsNLGeneralOpen] = React.useState(false);
  const [isNLTechOpen, setIsNLTechOpen] = React.useState(false);

  return (
    <Layout>
      <Section>
        <Container>
          <Welcome>
            <div>
              <Typography variant="h1" gutterBottom>
                Bienvenue sur le guide d'information Trackdéchets
              </Typography>
              <PaddedTypography>
                Vous trouverez les réponses aux principales interrogations qui
                nous sont régulièrement partagées : <br />
                - Qu'est-ce que le service Trackdéchets ?<br />
                - Comment communiquer sur Trackdéchets à mes clients et
                prestataires ?<br />- Comment connecter mon logiciel métier à
                Trackdéchets ?
              </PaddedTypography>
            </div>
            <img
              width={"300px"}
              style={{ margin: "auto" }}
              src={notification}
              alt={"notifications"}
            />
          </Welcome>
        </Container>
      </Section>
      <Section>
        <Container>
          <Typography variant="h2" gutterBottom>
            Je découvre trackdéchets et souhaite comprendre comment ça
            fonctionne.
          </Typography>
          <Typography>Vos questions les plus fréquentes.</Typography>
          <Halved>
            <ToFAQ
              question="Qu’est-ce que Trackdéchets ?"
              text="Trackdéchets est un outil numérique qui vise à simplifier la traçabilité des déchets dangereux. "
              link="https://faq.trackdechets.fr/informations-generiques/les-fondamentaux/quest-ce-que-trackdechets"
            />
            <ToFAQ
              question="Est-ce que je suis concerné ?"
              text="Ce produit est à destination de tous les acteurs de la chaîne du déchet dangereux."
              link="https://faq.trackdechets.fr/informations-generales/qui-est-concerne-par-trackdechets"
            />
            <ToFAQ
              question="Est-ce que Trackdéchets est obligatoire ?"
              text="Oui, Trackdéchets est une plateforme étatique réglementaire."
              link="https://faq.trackdechets.fr/informations-generiques/les-fondamentaux/reglementation/qui-est-concerne-par-lobligatoriete-trackdechets"
            />
            <ToFAQ
              question="Comment s'inscire sur Trackdéchets ?"
              text="Il y a 2 cas de figures dans l'inscription à Trackdéchets."
              link="https://faq.trackdechets.fr/informations-generiques/sinscrire"
            />
            <ToFAQ
              question="J'utilise déjà un outil métier, comment se fait lien avec Trackdéchets ?"
              text="Trackdéchets vient s’interconnecter à votre outil existant pour permettre l’étape de dématérialisation."
              link="https://faq.trackdechets.fr/informations-generiques/les-fondamentaux/trackdechets-et-interconnexion-avec-des-outils-metier/interfacer-son-outil-metier-a-trackdechets"
            />
            <ToFAQ
              question="Quels sont les BSD pris en charge par la plateforme ?"
              text="Trackdéchets permet de tracer différents types de déchets."
              link="https://faq.trackdechets.fr/informations-generiques/les-fonctionnalites-de-trackdechets#quels-sont-les-bordereaux-de-suivi-des-dechets-bsd-dematerialises-dans-trackdechets"
            />
          </Halved>
          <Quarter>
            <div />
            <div />
            <div />
            <ResourceLink
              href={"https://faq.trackdechets.fr/"}
              target={"_blank"}
            >
              Consultez la foire aux questions
            </ResourceLink>
          </Quarter>
        </Container>
      </Section>
      <Section>
        <Container>
          <Typography variant="h2" gutterBottom>
            Je souhaite aller plus loin dans l’utilisation de Trackdéchets.
          </Typography>
          <Typography>Au coeur de Trackdéchets.</Typography>
          <Third>
            <EmbeddedVideo
              url={"https://www.youtube.com/embed/cqcOscJF34U"}
              text={
                "Producteur de déchets dangereux ? <br/> Formez-vous à Trackdéchets en moins de 10min ! "
              }
            />
            <EmbeddedVideo
              url={"https://www.youtube.com/embed/YmlKTv75rjk"}
              text={
                "Transporteurs ? <br/> Formez-vous en 10min à Trackdéchets ! "
              }
            />
            <EmbeddedVideo
              url={"https://www.youtube.com/embed/XvZN57lGk2s"}
              text={
                "Comment fonctionne la signature<br/>dématérialisée au moment de l'enlèvement ?"
              }
            />
          </Third>
          <Halved>
            <ToFAQ
              question="Est-ce qu'un prestataire peut préparer un BSD pour son client dans Trackdéchets ?"
              text="Tout acteur qui est indiqué sur le bordereau de suivi de déchet peut préparer un BSD."
              link="https://faq.trackdechets.fr/guide-dutilisation-pratique-de-trackdechets/les-fonctionnalites-principales-de-trackdechets/ledition-du-bsd-sur-trackdechets#qui-peut-preparer-un-brouillon-de-bsd-sur-trackdechets"
            />
            <ToFAQ
              question="Comment obtenir mon registre dans Trackdéchets ?"
              text="Le registre se met à jour automatiquement à partir du moment où le BSD acte l’enlèvement du déchet."
              link="https://faq.trackdechets.fr/guide-dutilisation-pratique-de-trackdechets/les-fonctionnalites-principales-de-trackdechets/le-registre"
            />
            <ToFAQ
              question="Comment tester Trackdéchets sans transférer de vrais BSD ?"
              text="Il existe un site de test dédié pour vous familiariser avec l'outil."
              link="https://faq.trackdechets.fr/informations-generiques/tester-sans-transferer-de-vrais-bsd-comment-faire"
            />
            <ToFAQ
              question="Est-ce que je peux identifier un éco-organisme sur un BSD dans Trackdéchets ?"
              text="Il existe effectivement une fonctionnalité pour intégrer les éco-organismes dans Trackdéchets."
              link="https://faq.trackdechets.fr/guide-dutilisation-pratique-de-trackdechets/les-eco-organismes-sur-trackdechets"
            />
          </Halved>
          <Quarter>
            <div />
            <div />
            <ResourceLink
              href={
                "https://www.youtube.com/channel/UClTyGa02yUsQ6fQGURHtY1w/videos"
              }
              target={"_blank"}
            >
              Consultez toutes les vidéos
            </ResourceLink>
            <ResourceLink
              href={"https://faq.trackdechets.fr/"}
              target={"_blank"}
            >
              Consultez la foire aux questions
            </ResourceLink>
          </Quarter>
        </Container>
      </Section>
      <Section>
        <Container>
          <Typography variant="h2" gutterBottom>
            Je souhaite informer mes clients ou prestataires
          </Typography>
          <Typography>
            Téléchargez les ressources dont vous avez besoin afin de faciliter
            la transition de vos prestataires ou clients vers Trackdéchets
          </Typography>
          {/*@ts-ignore*/}
          <AliceCarousel
            mouseTracking
            autoPlayInterval={2000}
            autoPlay={true}
            autoPlayStrategy={"all"}
            infinite={true}
            responsive={carouselResponsiveConf}
            items={carouselItems}
          />
          <Quarter>
            <div />
            <div />
            <div />
            <ResourceLink
              href={
                "https://faq.trackdechets.fr/informations-generiques/devenir-partenaires-embarquer-mes-clients"
              }
              target={"_blank"}
            >
              Consultez la rubrique dans la FAQ
            </ResourceLink>
          </Quarter>
        </Container>
      </Section>
      <Section>
        <Container>
          <Halved>
            <div>
              <Typography variant="h2" gutterBottom>
                Je veux suivre les actualités de Trackdéchets
              </Typography>
              <Typography>
                <ToArrowedText
                  text={
                    "Suivez Trackdéchets sur <a href='https://fr.linkedin.com/company/trackd%C3%A9chets-minist%C3%A8re-de-la-transition-%C3%A9cologique' target='_blank'>LinkedIn</a>"
                  }
                />
              </Typography>
              <ResourceButton
                Big
                style={{ marginTop: "20px" }}
                onClick={() => setIsNLGeneralOpen(true)}
              >
                S'inscrire à la newsletter Trackdéchets
                <img src={mail} height={"20px"} width={"20px"} alt={"Mail"} />
              </ResourceButton>
              {isNLGeneralOpen && (
                <Modal onClose={() => setIsNLGeneralOpen(false)}>
                  <iframe
                    src="https://0806de2d.sibforms.com/serve/MUIEAHIcZ4oB1dfXYhFNGM7yQk5C6WI7VeAg_3aHo1MLi16FEHfRbmqgqRT68gHZD0mupU4fgkJVq3HMjvVLBG1nwXwzWXItN1pmPvqibXfGkgarq9LolotXzLkfR46tOV5TtPf6FczlEac50NZEoM4s1ZhZUYpAItIwxWuITpAQT222iKZRLO0uzXMY2RmjNC9SFQdEDoyPrGKx"
                    frameBorder="0"
                    scrolling="auto"
                    allowFullScreen
                    style={{
                      width: "540px",
                      height: "700px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      maxWidth: "100%",
                    }}
                  />
                </Modal>
              )}
            </div>
            <div>
              <Typography variant="h2" gutterBottom>
                Je veux suivre les évolutions techniques et produit de
                Trackdéchets
              </Typography>
              <Typography>
                <ToArrowedText
                  text={
                    "Consultez <a href='https://trello.com/b/2pkc7bFg/trackd%C3%A9chets-roadmap-produit' target='_blank'>la feuille de route publique</a>"
                  }
                />
                <br />
                <ToArrowedText
                  text={
                    "Consultez <a href='https://developers.trackdechets.beta.gouv.fr/' target='_blank'>la documentation technique</a> dans l’espace developpeur"
                  }
                />
              </Typography>
              <ResourceButton
                style={{ marginTop: "20px" }}
                Big
                Secondary
                onClick={() => setIsNLTechOpen(true)}
              >
                S'inscrire à la newsletter Technique
                <img
                  src={mailBlue}
                  height={"20px"}
                  width={"20px"}
                  alt={"Mail"}
                />
              </ResourceButton>
              {isNLTechOpen && (
                <Modal onClose={() => setIsNLTechOpen(false)}>
                  <iframe
                    src="https://0806de2d.sibforms.com/serve/MUIEAHQwLI4DmWML854ZRqMf-Ifiaw4ag7SHXC0IEIbQIZ1IcPFLnmOXxyJ4laAju06C0tkavZ3ys2dtB5U1uJjb1grzODmz6h28p7hkypvWShtiCFLOAu6t4OwEC_rZLaCil0SMHjs7xo3Sg5kfo4VLt6TNwZdYh6qkeM8u6D6h_jp_5G_ASr7fnyZUtM_W4nTy51no65EcNRqj"
                    frameBorder="0"
                    scrolling="auto"
                    allowFullScreen
                    style={{
                      width: "540px",
                      height: "700px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      maxWidth: "100%",
                    }}
                  />
                </Modal>
              )}
            </div>
          </Halved>
        </Container>
      </Section>
    </Layout>
  );
}
