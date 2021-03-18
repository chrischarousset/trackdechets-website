import { DefaultTheme } from "styled-components";

const breakpoints = {
  medium: "60rem",
};

export const theme: DefaultTheme = {
  typography: {
    h1: {
      fontSize: "2rem",
      lineHeight: "1.25",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5rem",
      lineHeight: "1.25",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight: "1.6",
      fontWeight: "normal",
    },
    h4: {
      fontSize: "1rem",
      lineHeight: "1.5",
      fontWeight: "bold",
      marginTop: "1rem",
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: "1.6",
    },
    body2: {
      fontSize: "1rem",
      lineHeight: "1.6",
    },
    emphasis: {
      fontSize: "1rem",
      lineHeight: "1.6",
      fontStyle: "italic",
      marginTop: "1rem",
    },
  },
  colors: {
    common: {
      focus: "#549bfe",
      black: "#060606",
      white: "#fff",
    },
    primary: {
      contrastText: "#fff",
      dark: "#000075",
      main: "#000092",
    },
    secondary: {
      contrastText: "#fff",
      dark: "#cb0005",
      main: "#e20007",
    },
    text: {
      main: "#1E1E1E",
      light: "#383838",
    },
    gray: {
      dark: "#979797",
      main: "#CECECE",
      light: "#F0F0F0",
    },
  },
  spacing: (unit: number) => `${unit * 0.5}rem`,
  breakpoints: {
    up: (size: "medium") => `(min-width: ${breakpoints[size]})`,
  },
};
