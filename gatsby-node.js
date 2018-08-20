/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { eventPath } = require('./src/lib/urls')

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
      }
    `).then(result => {
      result.data.allEvent.edges.forEach(({ node }) => {
        createPage({
          path: eventPath({ id: node.id }),
          component: path.resolve(`./src/templates/event.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            id: node.id,
          },
        })
      })

      resolve()
    })
  })
}
