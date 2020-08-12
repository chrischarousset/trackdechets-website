const path = require("path");

async function createPages({ actions, graphql, reporter }) {
  const { createPage } = actions;
  const { errors, data } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
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
      path: node.frontmatter.path,
      component: path.resolve("src", "templates", "TemplateMarkdownPage.tsx"),
      context: {
        path: node.frontmatter.path,
      },
    });
  });
}

module.exports = {
  createPages,
};
