import * as React from "react";
import styled, { css } from "styled-components";

const ButtonIcon = styled.span<{ position: "start" | "end" }>`
  display: inline-block;
  vertical-align: text-top;

  ${(props) => {
    switch (props.position) {
      case "start":
        return css`
          margin-right: ${props.theme.spacing(1)};
        `;
      case "end":
      default:
        return css`
          margin-left: ${props.theme.spacing(1)};
        `;
    }
  }}
`;

interface ButtonContainerProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "large" | "normal";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  font: inherit;
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
  padding: 0;
  text-decoration: none;

  display: inline-block;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  position: relative;

  &:focus::before {
    content: "";
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    border: 2px solid ${(props) => props.theme.colors.common.focus};
    pointer-events: none;
  }

  ${(props) => {
    switch (props.variant) {
      case "ghost":
        return css`
          color: ${props.theme.colors.primary.main};
          background-color: transparent;
          border-color: ${props.theme.colors.primary.main};

          &:hover {
            background-color: rgba(0, 0, 0, 0.05);
          }
        `;
      case "secondary":
        return css`
          color: ${props.theme.colors.secondary.contrastText};
          background-color: ${props.theme.colors.secondary.main};

          &:hover {
            background-color: ${props.theme.colors.secondary.dark};
          }
        `;
      case "primary":
      default:
        return css`
          color: ${props.theme.colors.primary.contrastText};
          background-color: ${props.theme.colors.primary.main};

          &:hover {
            background-color: ${props.theme.colors.primary.dark};
          }
        `;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case "large":
        return css`
          font-size: ${props.theme.typography.body1.fontSize};
          padding: 0.8rem 2rem;
        `;
      case "normal":
      default:
        return css`
          padding: 0.6rem 0.8rem;
        `;
    }
  }}
`;

interface ButtonProps extends ButtonContainerProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {startIcon && <ButtonIcon position="start">{startIcon}</ButtonIcon>}
      {children}
      {endIcon && <ButtonIcon position="end">{endIcon}</ButtonIcon>}
    </ButtonContainer>
  );
}
