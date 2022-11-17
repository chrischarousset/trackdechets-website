import styled, { css } from "styled-components";

export const Typography = styled.p<{
  bold?;
  variant?: "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "emphasis";
  gutterBottom?: boolean;
  centered?: boolean;
  color?: "inherit" | "muted";
}>`
  margin: 0 0 ${(props) => (props.gutterBottom ? props.theme.spacing(1) : 0)} 0;

  text-align: ${(props) => (props.centered ? "center" : "left")};

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}

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
          margin-bottom: ${props.theme.typography.h1.marginBottom};
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
      case "h4":
        return css`
          font-size: ${props.theme.typography.h4.fontSize};
          line-height: ${props.theme.typography.h4.lineHeight};
          font-weight: ${props.theme.typography.h4.fontWeight};
          margin-top: ${props.theme.typography.h4.marginTop};
        `;
      case "emphasis":
        return css`
          font-size: ${props.theme.typography.emphasis.fontSize * 2};
          line-height: ${props.theme.typography.emphasis.lineHeight};
          font-style: ${props.theme.typography.emphasis.fontStyle};
          margin-top: ${props.theme.typography.emphasis.marginTop};
        `;
      case "body1":
        return css`
          font-size: ${props.theme.typography.body1.fontSize};
          line-height: ${props.theme.typography.body1.lineHeight};
          width: ${props.theme.typography.body1.width}};
          margin: ${props.theme.typography.body1.margin}};
        `;
      case "body3":
        return css`
          font-size: ${props.theme.typography.body3.fontSize};
          line-height: ${props.theme.typography.body3.lineHeight};
          width: ${props.theme.typography.body3.width}};
          margin: ${props.theme.typography.body3.margin}};
        `;
      case "body2":
      default:
        return css`
          font-size: ${props.theme.typography.body2.fontSize};
          line-height: ${props.theme.typography.body2.lineHeight};
        `;
    }
  }};
`;
