import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import ItemPage from '../components/ItemPage'

import { eventPath } from '../lib/urls'
import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'
import splitEventsIntoPastAndFuture from '../lib/splitEventsIntoPastAndFuture'

const EventPage = ({ location, data }) => {
  const split =
    splitEventsIntoPastAndFuture(mergeResultsIntoItems(data.events)) || {}
  console.log('data', data, location.state)

  return (
    <ItemPage
      backTo={get(location, 'state.backTo', null)}
      url={eventPath(data.event)}
      item={data.event}
      related={split.future}
    />
  )
}
/*
export const query = graphql`
  query($id: String!) {
    event(id: { eq: $id }) {
      id
      type
      title
      subtitle
      summary
      description
      startdate
      ticketURL
      mainImages {
        localFile {
          publicURL
          ...fluidImage
        }
      }
    }

    events: allEvent(limit: 5, sort: { fields: [startdate], order: DESC }) {
      edges {
        node {
          id
          type
          title
          subtitle
          summary
          startdate
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
*/
export default EventPage
