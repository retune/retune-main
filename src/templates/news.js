import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import ItemPage from '../components/ItemPage'

import { newsPath } from '../lib/urls'
import mergeResultsIntoItems, {
  flattenNode,
} from '../lib/mergeResultsIntoItems'
import splitEventsIntoPastAndFuture from '../lib/splitEventsIntoPastAndFuture'

const NewsPage = ({ location, data }) => {
  console.log(data)
  const post = { ...data.post, ...flattenNode(data.post.data) }
  const split =
    splitEventsIntoPastAndFuture(mergeResultsIntoItems(data.events)) || {}

  console.log('post', post)

  return (
    <ItemPage
      backTo={get(location, 'state.backTo', null)}
      url={newsPath(post)}
      item={post}
      related={split.future}
    />
  )
}

export const query = graphql`
  query($id: String!) {
    post: prismicPosts(id: { eq: $id }) {
      id
      data {
        publisheddate
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
        mainimage {
          localFile {
            publicURL
            ...fluidImage
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
              text
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
