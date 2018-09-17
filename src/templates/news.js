import React from 'react'
import { graphql } from 'gatsby'

import ItemPage from '../components/ItemPage'

import { newsPath } from '../lib/urls'
import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'
import splitEventsIntoPastAndFuture from '../lib/splitEventsIntoPastAndFuture'

const NewsPage = ({ data }) => {
  console.log(data)
  const split =
    splitEventsIntoPastAndFuture(mergeResultsIntoItems(data.events)) || {}
  return (
    <ItemPage
      url={newsPath({ id: data.post.id })}
      item={data.post}
      related={split.future}
    />
  )
}

export const query = graphql`
  query($id: String!) {
    post(id: { eq: $id }) {
      id
      publishedDate
      title
      subtitle
      summary
      body
      mainImage {
        localFile {
          publicURL
          ...fluidImage
        }
      }
    }

    events: allEvent(limit: 5, sort: { fields: [startDate], order: DESC }) {
      edges {
        node {
          id
          type
          title
          subtitle
          summary
          startDate
          startTime
          endDate
          endTime
          ticketURL
          externalURL
          mainImages {
            localFile {
              publicURL
              ...fluidImage
            }
          }
        }
      }
    }
  }
`

export default NewsPage
