import React from "react";
import styled from "styled-components";
import { Container } from "../../Container";
import { Typography } from "../../Typography";
import badgeArrows from "./assets/badgeArrows.svg";
import badgeShield from "./assets/badgeShield.svg";

const BadgesContainer = styled.section`
  padding: ${(props) => props.theme.spacing(4)} 0;
  background-color: ${(props) => props.theme.colors.gray.main};
`;
const BadgesInnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }
`;
const BadgeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 22rem;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing(4)};

  &:last-child {
    margin-bottom: 0;
  }

  @media ${(props) => props.theme.breakpoints.up("medium")} {
    margin-bottom: 0;
  }
`;
const BadgeItemCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  background-color: ${(props) => props.theme.colors.common.white};
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export function Badges() {
  return (
    <BadgesContainer>
      <BadgesInnerContainer>
        <BadgeItem>
          <BadgeItemCircle>
            <img src={badgeArrows} alt="" width="90" />
          </BadgeItemCircle>
          <Typography variant="h3">
            Simplifier la traçabilité des déchets en temps réel
          </Typography>
        </BadgeItem>
        <BadgeItem>
          <BadgeItemCircle>
            <img src={badgeShield} alt="" width="90" />
          </BadgeItemCircle>
          <Typography variant="h3">
            Apporter de la transparence et de la fiabilité dans la filière
            déchets
          </Typography>
        </BadgeItem>
      </BadgesInnerContainer>
    </BadgesContainer>
  );
}
