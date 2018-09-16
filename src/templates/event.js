import React from 'react'
import { graphql } from 'gatsby'

import ItemPage from '../components/ItemPage'

import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'
import splitEventsIntoPastAndFuture from '../lib/splitEventsIntoPastAndFuture'

const EventPage = ({ data }) => {
  const split =
    splitEventsIntoPastAndFuture(mergeResultsIntoItems(data.events)) || {}
  console.log('data', data)
  return <ItemPage item={data.event} related={split.future} />
}

export const query = graphql`
  query($id: String!) {
    event(id: { eq: $id }) {
      id
      type
      title
      subtitle
      summary
      description
      startDate
      ticketURL
      mainImages {
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

export default EventPage
