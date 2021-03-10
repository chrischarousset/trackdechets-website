const path = require("path");
const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://trackdechets.beta.gouv.fr/"
    : "http://localhost:8000";

module.exports = {
  siteMetadata: {
    title: "Trackdéchets | La traçabilité des déchets en toute sécurité",
    description:
      "Trackdéchets a vocation à simplifier la gestion de vos déchets dangereux au quotidien : 0 papier, traçabilité en temps réel, informations regroupées sur un outil unique, vérification des prestataires.",
    url: siteUrl,
    incident:
      "L'API et l'application cliente Trackdéchets sont actuellement indisponibles suite à un incident majeur chez notre hébergeur OVH. Nous faisons tout notre possible pour rétablir la situation au plus vite.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: path.join(__dirname, "content", "pages"),
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `partners-logos`,
        path: path.join(__dirname, "content", "partners"),
      },
    },
    {
      // by default this plugin doesn't track anything when NODE_ENV !== "production"
      // https://www.gatsbyjs.com/plugins/gatsby-plugin-matomo/
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "83",
        matomoUrl: "https://stats.data.gouv.fr/",
        siteUrl,
      },
    },
  ],
};
