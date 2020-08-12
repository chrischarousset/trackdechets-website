import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    typography: {
      h1: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      h2: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      h3: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      body1: {
        fontSize: string;
        lineHeight: string;
      };
      body2: {
        fontSize: string;
        lineHeight: string;
      };
    };
    colors: {
      common: {
        focus: string;
        black: string;
        white: string;
      };
      primary: {
        contrastText: string;
        dark: string;
        main: string;
      };
      secondary: {
        contrastText: string;
        dark: string;
        main: string;
      };
      text: {
        main: string;
        light: string;
      };
      gray: {
        dark: string;
        main: string;
        light: string;
      };
    };
    spacing: (unit: number) => string;
    breakpoints: {
      up: (size: "medium") => string;
    };
  }
}
