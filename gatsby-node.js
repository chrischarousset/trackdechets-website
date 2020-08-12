const path = require("path");

async function createPages({ actions, graphql, reporter }) {
  const { createPage } = actions;
  const { errors, data } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              url
            }
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.url,
      component: path.resolve("src", "templates", "TemplateMarkdownPage.tsx"),
      context: {
        url: node.frontmatter.url,
      },
    });
  });
}

module.exports = {
  createPages,
};
