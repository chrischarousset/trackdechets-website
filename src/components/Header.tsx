import * as React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "gatsby";
import { RiAccountCircleLine } from "react-icons/ri";
import { InlineList, InlineListItem } from "./List";
import { Link } from "./Link";
import { Button } from "./Button";
import trackdechets from "./assets/trackdechets.png";
import mte from "./assets/mte.svg";

const HeaderContainer = styled.header`
  padding: ${(props) => props.theme.spacing(1)} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.dark};
`;
const HeaderInnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.spacing(2)};
`;
const HeaderLogos = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: ${(props) => props.theme.spacing(2)};
  }

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    flex: 1;
  }
`;
const HeaderNav = styled.nav`
  > * {
    margin-bottom: ${(props) => props.theme.spacing(1)};

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    display: flex;
    align-items: center;

    > * {
      margin-bottom: 0;
      margin-right: ${(props) => props.theme.spacing(2)};

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
const HeaderNavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <HeaderLogos>
          <img
            src={mte}
            alt="Ministère de la Transition Écologique"
            width="80"
          />
          <Link as={RouterLink} to="/">
            <img src={trackdechets} alt="Trackdéchets" width="80" />
          </Link>
        </HeaderLogos>
        <HeaderNav>
          <InlineList>
            <InlineListItem>
              <HeaderNavLink as={RouterLink} to="/resources">
                Ressources
              </HeaderNavLink>
            </InlineListItem>
            <InlineListItem>
              <HeaderNavLink href="https://developers.trackdechets.beta.gouv.fr/">
                Développeurs
              </HeaderNavLink>
            </InlineListItem>
            <InlineListItem>
              <HeaderNavLink as={RouterLink} to="/partners">
                Partenaires
              </HeaderNavLink>
            </InlineListItem>
          </InlineList>
          <InlineList>
            <InlineListItem>
              <Button
                variant="ghost"
                as="a"
                href="https://app.trackdechets.beta.gouv.fr/signup"
              >
                Créer un compte
              </Button>
            </InlineListItem>
            <InlineListItem>
              <Button
                as="a"
                href="https://app.trackdechets.beta.gouv.fr/login"
                endIcon={<RiAccountCircleLine />}
              >
                Se connecter
              </Button>
            </InlineListItem>
          </InlineList>
        </HeaderNav>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
}
