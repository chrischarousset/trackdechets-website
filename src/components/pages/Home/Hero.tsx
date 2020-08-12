import React from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import { Container } from "../../Container";
import { Typography } from "../../Typography";
import { Section } from "../../Section";
import illustrationHero from "./assets/illustrationHero.png";

const HeroContainer = styled.div`
  @media ${(props) => props.theme.breakpoints.up("medium")} {
    background-image: linear-gradient(
      90deg,
      transparent 50%,
      ${(props) => props.theme.colors.gray.light} 50%
    );
  }
`;
const HeroInnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    text-align: left;
    flex-direction: row-reverse;
  }
`;
const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    padding-right: ${(props) => props.theme.spacing(1)};
  }
`;
const HeroHeading = styled(Typography).attrs({ as: "h1", variant: "h1" })`
  max-width: 26rem;
  margin-bottom: ${(props) => props.theme.spacing(4)};

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    margin-bottom: ${(props) => props.theme.spacing(12)};
  }
`;
const HeroAction = styled.div`
  text-align: center;
`;
const HeroIllustration = styled.div`
  padding: ${(props) => props.theme.spacing(4)};
  background-color: ${(props) => props.theme.colors.gray.light};
  margin-bottom: ${(props) => props.theme.spacing(2)};

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    margin-bottom: 0;
  }

  > img {
    display: block;
  }
`;

export function Hero() {
  return (
    <Section>
      <HeroContainer>
        <HeroInnerContainer>
          <HeroIllustration>
            <img src={illustrationHero} alt="" width="640" />
          </HeroIllustration>
          <HeroContent>
            <HeroHeading>
              Gérer la traçabilité des déchets en toute sécurité
            </HeroHeading>
            <HeroAction>
              <Button
                variant="secondary"
                size="large"
                as="a"
                href="https://app.trackdechets.beta.gouv.fr/signup"
              >
                Créer un compte
              </Button>
            </HeroAction>
          </HeroContent>
        </HeroInnerContainer>
      </HeroContainer>
    </Section>
  );
}
