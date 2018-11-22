/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { eventPath, newsPath } = require('./src/lib/urls')
const mergeResultsIntoItems = require('./src/lib/mergeResultsIntoItems')

const createItemPage = (templateName, createPage, createPath) => node => {
  const urlPath = createPath(node)

  console.log('URL path', urlPath)

  createPage({
    path: urlPath,
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
        events: allPrismicEvents {
          edges {
            node {
              id
              data {
                title {
                  text
                }
                type
              }
            }
          }
        }

        # allPost {
        #   edges {
        #     node {
        #       id
        #       title
        #     }
        #   }
        # }
      }
    `).then(result => {
      const events = mergeResultsIntoItems(result.data.events)
      // const news = result.data.allPost.edges

      console.log(events)

      events.forEach(createItemPage('event', createPage, eventPath))
      // news.forEach(createItemPage('news', createPage, newsPath))

      resolve()
    })
  })
}
