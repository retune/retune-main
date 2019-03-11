import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import ItemPage from '../components/ItemPage'

import { eventPath } from '../lib/urls'
import mergeResultsIntoItems, {
  flattenNode,
} from '../lib/mergeResultsIntoItems'

const EventPage = ({ location, data }) => {
  const event = { ...data.event, ...flattenNode(data.event.data) }
  const related = mergeResultsIntoItems(data.events)

  return (
    <ItemPage
      backTo={get(location, 'state.backTo', null)}
      url={eventPath(event)}
      item={event}
      related={related}
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
          html
        }
        description {
          html
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
              html
            }
            startdate
            #starttime
            enddate
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
