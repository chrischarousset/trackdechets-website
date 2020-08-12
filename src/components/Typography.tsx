import styled, { css } from "styled-components";

export const Typography = styled.p<{
  variant?: "h1" | "h2" | "h3" | "body1" | "body2";
  gutterBottom?: boolean;
  color?: "inherit" | "muted";
}>`
  margin: 0 0 ${(props) => (props.gutterBottom ? props.theme.spacing(1) : 0)} 0;

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

  ${(props) => {
    switch (props.variant) {
      case "h1":
        return css`
          color: ${props.theme.colors.primary.main};
          font-size: ${props.theme.typography.h1.fontSize};
          line-height: ${props.theme.typography.h1.lineHeight};
          font-weight: ${props.theme.typography.h1.fontWeight};
        `;
      case "h2":
        return css`
          color: ${props.theme.colors.primary.main};
          font-size: ${props.theme.typography.h2.fontSize};
          line-height: ${props.theme.typography.h2.lineHeight};
          font-weight: ${props.theme.typography.h2.fontWeight};
        `;
      case "h3":
        return css`
          font-size: ${props.theme.typography.h3.fontSize};
          line-height: ${props.theme.typography.h3.lineHeight};
          font-weight: ${props.theme.typography.h3.fontWeight};
        `;
      case "body1":
        return css`
          font-size: ${props.theme.typography.body1.fontSize};
          line-height: ${props.theme.typography.body1.lineHeight};
        `;
      case "body2":
      default:
        return css`
          font-size: ${props.theme.typography.body2.fontSize};
          line-height: ${props.theme.typography.body2.lineHeight};
        `;
    }
  }}
`;
