import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import {
  Header,
  Layout,
  Footer,
  Container,
  Section,
  HASTRoot,
  HASTNode,
} from "../components";

const TemplateMarkdownPageContainer = styled(Section)`
  h1 {
    margin-top: 0;
    margin-bottom: ${(props) => props.theme.spacing(4)};
  }

  h2,
  h3 {
    margin-top: ${(props) => props.theme.spacing(4)};
    margin-bottom: ${(props) => props.theme.spacing(2)};
  }

  p,
  ul {
    margin-bottom: ${(props) => props.theme.spacing(1)};
  }
`;

interface TemplateMarkdownPageProps {
  data: {
    markdownRemark: {
      htmlAst: HASTRoot;
    };
  };
}

export default function TemplateMarkdownPage({
  data: {
    markdownRemark: { htmlAst },
  },
}: TemplateMarkdownPageProps) {
  return (
    <Layout>
      <Header />

      <TemplateMarkdownPageContainer>
        <Container>
          <HASTNode node={htmlAst} />
        </Container>
      </TemplateMarkdownPageContainer>

      <Footer />
    </Layout>
  );
}

export const pageQuery = graphql`
  query GetPageContent($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
    }
  }
`;
