import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Layout, Container, Section, HASTRoot, HASTNode } from "../components";

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
      <TemplateMarkdownPageContainer>
        <Container>
          <HASTNode node={htmlAst} />
        </Container>
      </TemplateMarkdownPageContainer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query GetPageContent($url: String!) {
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      htmlAst
    }
  }
`;
