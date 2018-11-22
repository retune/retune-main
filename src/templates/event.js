import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import ItemPage from '../components/ItemPage'

import { eventPath } from '../lib/urls'
import mergeResultsIntoItems, {
  flattenNode,
} from '../lib/mergeResultsIntoItems'
import splitEventsIntoPastAndFuture from '../lib/splitEventsIntoPastAndFuture'

const EventPage = ({ location, data }) => {
  console.log('data', data, location.state)
  const event = { ...data.event, ...flattenNode(data.event.data) }
  const split =
    splitEventsIntoPastAndFuture(mergeResultsIntoItems(data.events)) || {}

  console.log('event', event)

  return (
    <ItemPage
      backTo={get(location, 'state.backTo', null)}
      url={eventPath(event)}
      item={event}
      related={split.future}
    />
  )
}

export const query = graphql`
  query($id: String!) {
    event: prismicEvents(id: { eq: $id }) {
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
        description {
          text
        }
        startdate
        ticketurl {
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
export default EventPage
