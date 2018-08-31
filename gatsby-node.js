/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { eventPath, newsPath } = require('./src/lib/urls')

const createItemPage = (templateName, createPage, createPath) => ({ node }) => {
  createPage({
    path: createPath({ id: node.id }),
    component: path.resolve(`./src/templates/${templateName}.js`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      id: node.id,
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allEvent {
          edges {
            node {
              id
            }
          }
        }

        allPost {
          edges {
            node {
              id
            }
          }
        }
      }
    `).then(result => {
      const events = result.data.allEvent.edges
      const news = result.data.allPost.edges

      events.forEach(createItemPage('event', createPage, eventPath))
      news.forEach(createItemPage('news', createPage, newsPath))

      resolve()
    })
  })
}
