import { createGlobalStyle } from "styled-components";
import "modern-normalize/modern-normalize.css";

import MarianneThinWoff2 from "./assets/Marianne-Thin.woff2";
import MarianneThinWoff from "./assets/Marianne-Thin.woff";
import MarianneLightWoff2 from "./assets/Marianne-Light.woff2";
import MarianneLightWoff from "./assets/Marianne-Light.woff";
import MarianneRegularWoff2 from "./assets/Marianne-Regular.woff2";
import MarianneRegularWoff from "./assets/Marianne-Regular.woff";
import MarianneMediumWoff2 from "./assets/Marianne-Medium.woff2";
import MarianneMediumWoff from "./assets/Marianne-Medium.woff";
import MarianneBoldWoff2 from "./assets/Marianne-Bold.woff2";
import MarianneBoldWoff from "./assets/Marianne-Bold.woff";
import MarianneExtraBoldWoff2 from "./assets/Marianne-ExtraBold.woff2";
import MarianneExtraBoldWoff from "./assets/Marianne-Bold.woff";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Marianne';
  src: url("${MarianneThinWoff2}") format("woff2"), url("${MarianneThinWoff}") format("woff");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Marianne';
  src: url("${MarianneLightWoff2}") format("woff2"), url("${MarianneLightWoff}") format("woff");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Marianne';
  src: url("${MarianneRegularWoff2}") format("woff2"), url("${MarianneRegularWoff}") format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Marianne';
  src: url("${MarianneMediumWoff2}") format("woff2"), url("${MarianneMediumWoff}") format("woff");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Marianne';
  src: url("${MarianneBoldWoff2}") format("woff2"), url("${MarianneBoldWoff}") format("woff");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Marianne';
  src: url("${MarianneExtraBoldWoff2}") format("woff2"), url("${MarianneExtraBoldWoff}") format("woff");
  font-weight: 900;
  font-style: normal;
}

html {
  font-size: 16px;
}

body {
  font-family: 'Marianne', sans-serif;
  font-size: ${(props) => props.theme.typography.body2.fontSize};
  line-height: ${(props) => props.theme.typography.body2.lineHeight};
  color: ${(props) => props.theme.colors.text.main};
}

img {
  max-width: 100%;
}
`;
