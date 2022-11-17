import React from "react";
import styled from "styled-components";
import { Container } from "../../Container";
import { Link } from "../../Link";
import { Question, QuestionQuestion, QuestionAnswer } from "../../Question";
import { Section, SectionHeading } from "../../Section";
import illustrationFAQ from "./assets/illustrationFAQ.svg";

const FAQQuestions = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${(props) => props.theme.spacing(8)};

  @media ${(props) => props.theme.breakpoints.up("large")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export function FAQ() {
  return (
    <Section>
      <Container>
        <SectionHeading>Ce qu'il faut savoir sur Trackdéchets</SectionHeading>
        <FAQQuestions>
          <Question>
            <QuestionQuestion>
              Où en est l’outil Trackdéchets ?<br />
              Est-il obligatoire?
            </QuestionQuestion>
            <QuestionAnswer>
              Trackdéchets est un outil numérique gratuit, développé par le
              Ministère de la Transition Ecologique, sous un format innovant
              d'amélioration continue par la donnée et les usages.
            </QuestionAnswer>
            <QuestionAnswer>
              Le décret 2021-321, issu de la Loi Economie Circulaire, impose la
              dématérialisation de la traçabilité des déchets dangereux et/ou
              contenant des POP.
            </QuestionAnswer>
            <QuestionAnswer>
              Les arrêtés ministériels du 21 décembre 2021 relatif à la
              traçabilité des{" "}
              <Link href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044571389">
                déchets dangereux
              </Link>{" "}
              et des{" "}
              <Link href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044571414">
                déchets d'amiante
              </Link>{" "}
              fixent les dispositions règlementaires pour l'usage de la
              plateforme et rendent obligatoire la traçabilité dématérialisée
              pour les déchets concernés (dangereux et amiante) depuis le 1er
              janvier 2022.
            </QuestionAnswer>
          </Question>
          <Question>
            <QuestionQuestion>
              Est-ce que je peux l’utiliser même si j’ai déjà un outil de
              gestion des déchets ?
            </QuestionQuestion>
            <QuestionAnswer>
              Oui, Trackdéchets est un outil de traçabilité et non un outil de
              gestion des déchets (pas de facturation, bon de commande, etc.) :
              ce sont des outils complémentaires.
            </QuestionAnswer>
            <QuestionAnswer>
              Si vous avez un outil, vous pourrez le connecter à la plateforme
              grâce à l’API Trackdéchets. Pour en savoir plus consultez{" "}
              <Link href="https://developers.trackdechets.beta.gouv.fr/">
                la documentation Développeur
              </Link>
              .
            </QuestionAnswer>
          </Question>
          <Question>
            <QuestionQuestion>
              Qui est concerné par Trackdéchets ?
            </QuestionQuestion>
            <QuestionAnswer>
              Tous les acteurs présents sur une chaîne de traçabilité sont
              concernés par Trackdéchets, car la mission de cette plateforme est
              notamment de garantir la circulation de l’information de
              traçabilité d’un bout à l’autre de la chaîne.
            </QuestionAnswer>
          </Question>
          <Question>
            <QuestionQuestion>
              D’autres questions sur Trackdéchets ?<br />
              <Link href="https://faq.trackdechets.fr/">
                Consultez notre FAQ.
              </Link>
            </QuestionQuestion>
            <img src={illustrationFAQ} alt="Faq" loading="lazy" />
          </Question>
        </FAQQuestions>
      </Container>
    </Section>
  );
}
