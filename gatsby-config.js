const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Trackdéchets | La traçabilité des déchets en toute sécurité",
    description:
      "Trackdéchets a vocation à simplifier la gestion de vos déchets dangereux au quotidien : 0 papier, traçabilité en temps réel, informations regroupées sur un outil unique, vérification des prestataires.",
    url:
      process.env.NODE_ENV === "production"
        ? "https://trackdechets.beta.gouv.fr/"
        : "http://localhost:8000",
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
  ],
};
