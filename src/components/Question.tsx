import styled from "styled-components";
import { Typography } from "./Typography";

export const Question = styled.article``;

export const QuestionQuestion = styled(Typography).attrs({
  variant: "h3",
})`
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const QuestionAnswer = styled(Typography).attrs({
  variant: "body1",
  color: "muted",
})`
  margin-bottom: ${(props) => props.theme.spacing(1)};

  &:last-child {
    margin-bottom: 0;
  }

  @media ${(props) => props.theme.breakpoints.up("large")} {
    padding-left: ${(props) => props.theme.spacing(8)};
  }
`;
