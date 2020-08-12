import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../Layout";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Container } from "../Container";
import { Button } from "../Button";
import { Section, SectionHeading } from "../Section";

export function NotFound() {
  return (
    <Layout>
      <Header />

      <Container>
        <Section>
          <SectionHeading>Cette page est introuvable.</SectionHeading>

          <Button as={Link} to="/">
            Retour à l'accueil
          </Button>
        </Section>
      </Container>

      <Footer />
    </Layout>
  );
}
