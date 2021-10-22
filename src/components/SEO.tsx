import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import trackdechets from "./assets/trackdechets.png";

export const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        url
      }
    }
  }
`;

export function SEO() {
  const {
    site: {
      siteMetadata: { title, description, url },
    },
  } = useStaticQuery(query);
  const image = new URL(trackdechets, url).href;

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "fr" }}
      meta={[
        {
          name: "title",
          property: "og:title",
          content: title,
        },
        {
          name: "description",
          property: "og:description",
          content: description,
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:image",
          content: image,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          "http-equiv": "Content-Security-Policy",
          content:
            "default-src 'self';base-uri 'self';font-src 'self' https: data:;frame-src youtube.com www.youtube.com analytics.trackdechets.beta.gouv.fr;img-src 'self' data:;object-src 'none';script-src 'self' 'unsafe-inline' stats.data.gouv.fr;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
        },
        {
          "http-equiv": "X-Content-Type-Options",
          content: "nosniff",
        },
        {
          "http-equiv": "X-XSS-Protection",
          content: "0",
        },
        {
          "http-equiv": "Strict-Transport-Security",
          content: "max-age=31536000",
        },
      ]}
    />
  );
}
