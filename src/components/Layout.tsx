import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants";
import { SEO } from "./SEO";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { IncidentBanner } from "./IncidentBanner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <GlobalStyle />
      <IncidentBanner />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
