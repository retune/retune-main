/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { eventPath, newsPath } = require('./src/lib/urls')
const mergeResultsIntoItems = require('./src/lib/mergeResultsIntoItems')
const isEventInPastOrFuture = require('./src/lib/isEventInPastOrFuture')
const { templateNameForEventType } = require('./src/lib/getType')

const template = type => `./src/templates/${type}.js`
const page = type => `./src/pages/${type}.js`

const createItemPage = (templatePath, createPage, createPath, node) => {
  const urlPath = createPath(node)
  const componentPath = path.resolve(templatePath)

  console.log(`CREATE: ${urlPath} -> ${componentPath}`)

  if (!componentPath) {
    return
  }

  createPage({
    path: urlPath,
    component: componentPath,
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
                startdate
                enddate
                title {
                  text
                }
                type
              }
            }
          }
        }

        posts: allPrismicPosts {
          edges {
            node {
              id
              data {
                title {
                  text
                }
              }
            }
          }
        }
      }
    `).then(result => {
      const events = mergeResultsIntoItems(result.data.events)
      const posts = mergeResultsIntoItems(result.data.posts)

      events.forEach(event => {
        let templatePath

        if (isEventInPastOrFuture(event) === 'future') {
          templatePath = template('event')
        } else {
          templatePath = page(templateNameForEventType(event.type))
        }

        createItemPage(templatePath, createPage, eventPath, event)
      })

      posts.forEach(post =>
        createItemPage(template('news'), createPage, newsPath, post)
      )

      resolve()
    })
  })
}
