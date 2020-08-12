import styled, { css } from "styled-components";

export const List = styled.ul<{ color?: "inherit" | "muted" }>`
  margin: 0;
  padding: 0 0 0 ${(props) => props.theme.spacing(3)};

  ${(props) => {
    switch (props.color) {
      case "muted":
        return css`
          color: ${props.theme.colors.text.light};
        `;
      case "inherit":
      default:
        return css`
          color: inherit;
        `;
    }
  }}
`;
export const ListItem = styled.li`
  margin-bottom: ${(props) => props.theme.spacing(1)};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const UnstyledList = styled(List)`
  list-style: none;
  padding: 0;
`;
export const UnstyledListItem = styled(ListItem)``;

export const InlineList = styled(UnstyledList)`
  display: flex;
`;
export const InlineListItem = styled(UnstyledListItem)`
  padding-right: ${(props) => props.theme.spacing(2)};

  &:last-child {
    padding-right: 0;
  }
`;
