import * as React from "react";
import styled from "styled-components";
import { Layout } from "../Layout";
import { Container } from "../Container";
import { Typography } from "../Typography";
import { Section } from "../Section";
import arrow from "../assets/arrow-right-line.svg";
import notification from "../assets/resources-notification.svg";
import questionMark from "../assets/resources-question.svg";
import media from "../assets/resources-media-setting.svg";
import mail from "../assets/mail-line.svg";
import styles from "./resources.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Modal } from "../Modal";

const Halved = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${(props) => props.theme.spacing(4)};
  margin-top: 2rem;

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Quarter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${(props) => props.theme.spacing(4)};
  margin-top: 2rem;

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Third = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${(props) => props.theme.spacing(4)};
  margin-top: 2rem;

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const carouselItems = [
  <Kit
    image={media}
    title={"Présentation de"}
    text={"Trackdéchets"}
    link={
      "https://drive.google.com/file/d/1CsPwe17qpRY9KciPTuQOt3ABR8IDJCGg/view?usp=sharing"
    }
  />,
  <Kit
    image={media}
    title={"Kit de communication"}
    text={"à destination des collectivités"}
    link={
      "https://drive.google.com/file/d/1uqRmYNhjBabTBAqLLdXd316bnkUdvIEI/view?usp=sharing"
    }
  />,
  <Kit
    image={media}
    title={"Kit de communication"}
    text={"à destination des producteurs"}
    link={
      "https://drive.google.com/file/d/1gW6j1obgTawhS-gm0Hi98QyUW7WACTRz/view?usp=sharing"
    }
  />,
  <Kit
    image={media}
    title={"Kit de communication"}
    text={"à destination des professionnels"}
    link={
      "https://drive.google.com/file/d/1V_V4U3c0EFSbudxo3S-EL8nU3v-vuoIM/view?usp=sharing"
    }
  />,
  <Kit
    image={media}
    title={"Kit de communication"}
    text={"à destination des transporteurs"}
    link={
      "https://drive.google.com/file/d/1oSBOVlIdxEDxOH3duAii6ijngdYNP5fm/view?usp=sharing"
    }
  />,
  <Kit
    image={media}
    title={"Méthode de déploiement"}
    text={"à destination des collecteurs"}
    link={
      "https://drive.google.com/file/d/1xFT0j2UetrG4ZTwpP5GaCvZpPwY14ktq/view?usp=sharing"
    }
  />,
  <Kit
    image={media}
    title={"Flyer"}
    text={"à destination des producteurs"}
    link={
      "https://drive.google.com/file/d/1sNz35lFHqVmKKQnOja41VIgxUYQa2JET/view?usp=sharing"
    }
  />,
  <Kit
    image={media}
    title={"Mail d'information type"}
    text={"pour mon partenaire"}
    link={
      "https://drive.google.com/file/d/1bam-BN64f95ooWCU64H761gUNUzmnIyn/view?usp=sharing"
    }
  />,
  <Kit
    image={media}
    title={"Mail d'information type"}
    text={"pour mon client"}
    link={
      "https://drive.google.com/file/d/1lZjWzWZvmlRtvVhRIMyA_bKKH513Lmcv/view?usp=sharing"
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

export function ArrowedText({ text }) {
  return (
    <span className={styles.arrowedText}>
      <span style={{ top: "6px", position: "relative" }}>
        <img src={arrow} alt="arrow" width="24" />
      </span>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </span>
  );
}

export function FAQ({ question, text, link }) {
  return (
    <div
      style={{
        cursor: "pointer",
        backgroundColor: "rgb(249,248,246)",
        borderBottom: "solid 4px #000091",
      }}
      onClick={() => window.open(link, "_blank")}
    >
      <img
        height={"140px"}
        width={"160px"}
        src={questionMark}
        style={{ padding: "40px 50px" }}
        alt={"Question"}
      />
      <div
        style={{
          display: "inline-block",
          paddingTop: "17px",
          width: "calc(100% - 160px)",
          verticalAlign: "top",
        }}
      >
        <Typography
          style={{ fontWeight: "bold" }}
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <Typography dangerouslySetInnerHTML={{ __html: text }} />
        <img src={arrow} alt="arrow" width="24" />
      </div>
    </div>
  );
}

export function Kit({ image, title, text, link }) {
  return (
    <div
      style={{
        padding: "20px 0",
        cursor: "pointer",
        backgroundColor: "rgb(249,248,246)",
        borderBottom: "solid 4px #000091",
      }}
      onClick={() => window.open(link, "_blank")}
    >
      <img
        height={"80px"}
        width={"100%"}
        src={image}
        style={{ margin: "10px auto" }}
        alt={"Image Kit"}
      />
      <Typography
        style={{ fontWeight: "bold" }}
        centered={true}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Typography dangerouslySetInnerHTML={{ __html: text }} centered={true} />
    </div>
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
          <Halved>
            <div>
              <Typography variant="h1" gutterBottom>
                Bienvenue sur le guide d'information Trackdéchets
              </Typography>
              <Typography style={{ paddingLeft: "100px" }}>
                Vous trouverez les réponses aux principales interrogations qui
                nous sont régulièrement partagées : <br />
                - Qu'est-ce que le service Trackdéchets ?<br />
                - Comment communiquer sur Trackdéchets à mes clients et
                prestataires ?<br />- Comment connecter mon logiciel métier à
                Trackdéchets ?
              </Typography>
            </div>
            <img
              width={"300px"}
              style={{ margin: "auto" }}
              src={notification}
              alt={"notifications"}
            />
          </Halved>
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
            <FAQ
              question="Qu’est-ce que Trackdéchets ?"
              text="Trackdéchets est un outil numérique qui vise à simplifier la traçabilité des déchets dangereux. "
              link="https://faq.trackdechets.fr/informations-generiques/trackdechets-pourquoi-pour-qui-par-qui-comment#quest-ce-que-trackdechets"
            />
            <FAQ
              question="Est-ce que je suis concerné ?"
              text="Ce produit est à destination de tous les acteurs de la chaîne du déchet dangereux."
              link="https://faq.trackdechets.fr/informations-generiques/trackdechets-pourquoi-pour-qui-par-qui-comment#trackdechets-sadresse-a-qui"
            />
            <FAQ
              question="Est-ce que Trackdéchets est obligatoire ?"
              text="Oui, Trackdéchets est une plateforme étatique réglementaire."
              link="https://faq.trackdechets.fr/informations-generiques/trackdechets-pourquoi-pour-qui-par-qui-comment#est-ce-que-trackdechets-est-obligatoire"
            />
            <FAQ
              question="Comment s'inscire sur Trackdéchets ?"
              text="Il y a 2 cas de figures dans l'inscription à Trackdéchets."
              link="https://faq.trackdechets.fr/guide-dutilisation-pratique-de-trackdechets/creation-de-compte-sur-trackdechets#quelle-est-la-procedure-pour-sinscrire-sur-trackdechets"
            />
            <FAQ
              question="J'utilise déjà un outil métier, comment se fait lien avec Trackdéchets ?"
              text="Trackdéchets vient s’interconnecter à votre outil existant pour permettre l’étape de dématérialisation."
              link="https://faq.trackdechets.fr/informations-generiques/trackdechets-et-interconnexion-avec-des-outils-metier/pourquoi-utiliser-trackdechets-si-jai-deja-un-outil-metier"
            />
            <FAQ
              question="Quels sont les BSD pris en charge par la plateforme ?"
              text="Trackdéchets permet de tracer différents types de déchets."
              link="https://faq.trackdechets.fr/informations-generiques/les-fonctionnalites-de-trackdechets#quels-sont-les-bordereaux-de-suivi-des-dechets-bsd-dematerialises-dans-trackdechets"
            />
          </Halved>
          <Quarter>
            <div />
            <div />
            <div />
            <a
              className={styles.resourceButton}
              href={"https://faq.trackdechets.fr/"}
              target={"_blank"}
            >
              Consultez la foire aux questions
            </a>
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
              url={"https://www.youtube.com/embed/XvZN57lGk2s"}
              text={
                "Comment fonctionne la signature<br/>dématérialisée au moment de l'enlèvement ?"
              }
            />
            <EmbeddedVideo
              url={"https://www.youtube.com/embed/xmSEisrTTHs"}
              text={"Comment savoir si<br/>un prestataire est inscrit ?"}
            />
            <EmbeddedVideo
              url={"https://www.youtube.com/embed/qBfl1zymtrM"}
              text={"Quel document présenter<br/>en cas de contrôle routier ?"}
            />
          </Third>
          <Halved>
            <FAQ
              question="Est-ce qu'un prestataire peut préparer un BSD pour son client dans Trackdéchets ?"
              text="Tout acteur qui est indiqué sur le bordereau de suivi de déchet peut préparer un BSD."
              link="https://faq.trackdechets.fr/guide-dutilisation-pratique-de-trackdechets/les-fonctionnalites-principales-de-trackdechets/ledition-du-bsd-sur-trackdechets#qui-peut-preparer-un-brouillon-de-bsd-sur-trackdechets"
            />
            <FAQ
              question="Comment obtenir mon registre dans Trackdéchets ?"
              text="Le registre se met à jour automatiquement à partir du moment où le BSD acte l’enlèvement du déchet."
              link="https://faq.trackdechets.fr/guide-dutilisation-pratique-de-trackdechets/les-fonctionnalites-principales-de-trackdechets/le-registre"
            />
            <FAQ
              question="Comment tester Trackdéchets sans transférer de vrais BSD ?"
              text="Il existe un site de test dédié pour vous familiariser avec l'outil."
              link="https://faq.trackdechets.fr/informations-generiques/tester-sans-transferer-de-vrais-bsd-comment-faire"
            />
            <FAQ
              question="Est-ce que je peux identifier un éco-organisme sur un BSD dans Trackdéchets ?"
              text="Il existe effectivement une fonctionnalité pour intégrer les éco-organismes dans Trackdéchets."
              link="https://faq.trackdechets.fr/guide-dutilisation-pratique-de-trackdechets/les-eco-organismes-sur-trackdechets"
            />
          </Halved>
          <Quarter>
            <div />
            <div />
            <a
              className={styles.resourceButton}
              href={
                "https://www.youtube.com/channel/UClTyGa02yUsQ6fQGURHtY1w/videos"
              }
              target={"_blank"}
            >
              Consultez toutes les vidéos
            </a>
            <a
              className={styles.resourceButton}
              href={"https://faq.trackdechets.fr/"}
              target={"_blank"}
            >
              Consultez la foire aux questions
            </a>
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
            <a
              className={styles.resourceButton}
              href={
                "https://faq.trackdechets.fr/informations-generiques/devenir-partenaires-embarquer-mes-clients"
              }
              target={"_blank"}
            >
              Consultez la rubrique dans la FAQ
            </a>
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
                <ArrowedText
                  text={
                    "Suivez TrackDéchets sur <a href='https://fr.linkedin.com/company/trackd%C3%A9chets-minist%C3%A8re-de-la-transition-%C3%A9cologique' target='_blank'>LinkedIn</a>"
                  }
                />
              </Typography>
            </div>
            <div>
              <Typography variant="h2" gutterBottom>
                Je veux suivre les évolutions techniques et produit de
                Trackdéchets
              </Typography>
              <Typography>
                <ArrowedText
                  text={
                    "Consultez <a href='https://trello.com/b/2pkc7bFg/trackd%C3%A9chets-roadmap-produit' target='_blank'>la feuille de route publique</a>"
                  }
                />
                <br />
                <ArrowedText
                  text={
                    "Consultez <a href='https://developers.trackdechets.beta.gouv.fr/' target='_blank'>la documentation technique</a> dans l’espace developpeur"
                  }
                />
              </Typography>
            </div>
          </Halved>
          <Halved>
            <a
              className={`${styles.resourceButton} ${styles.big}`}
              onClick={() => setIsNLGeneralOpen(true)}
            >
              S'inscrire à la newsletter Trackdéchets
              <img src={mail} height={"20px"} width={"20px"} alt={"Mail"} />
            </a>
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
            <a
              className={`${styles.resourceButton} ${styles.big}`}
              onClick={() => setIsNLTechOpen(true)}
            >
              S'inscrire à la newsletter Technique
              <img src={mail} height={"20px"} width={"20px"} alt={"Mail"} />
            </a>
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
          </Halved>
        </Container>
      </Section>
    </Layout>
  );
}
