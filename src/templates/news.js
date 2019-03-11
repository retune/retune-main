import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import ItemPage from '../components/ItemPage'

import { newsPath } from '../lib/urls'
import mergeResultsIntoItems, {
  flattenNode,
} from '../lib/mergeResultsIntoItems'

const NewsPage = ({ location, data }) => {
  const post = { ...data.post, ...flattenNode(data.post.data) }
  const related = mergeResultsIntoItems(data.events)

  return (
    <ItemPage
      backTo={get(location, 'state.backTo', null)}
      url={newsPath(post)}
      item={post}
      related={related}
    />
  )
}

export const query = graphql`
  query($id: String!) {
    post: prismicPosts(id: { eq: $id }) {
      id
      data {
        publisheddate
        sortdate
        title {
          text
        }
        subtitle {
          text
        }
        summary {
          text
        }
        body {
          text
        }
        mainimages {
          image {
            localFile {
              publicURL
              ...fluidImage
            }
          }
        }
      }
    }

    events: allPrismicEvents(
      limit: 5
      sort: { fields: [data___startdate], order: DESC }
    ) {
      edges {
        node {
          id
          data {
            type
            title {
              text
            }
            subtitle {
              text
            }
            summary {
              html
            }
            startdate
            #starttime
            #enddate
            #endtime
            ticketurl {
              url
            }
            externalurl {
              url
            }
            mainimages {
              image {
                localFile {
                  publicURL
                  ...fluidImage
                }
              }
            }
          }
        }
      }
    }
  }
`

export default NewsPage
