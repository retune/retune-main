import React from 'react'
import { graphql } from 'gatsby'
import map from 'lodash/map'

import findEventsByIds from '../lib/findEventsByIds'
import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'

import Intro from '../components/Intro'
import Latest from '../components/Latest'
import Layout from '../components/Layout'
import Promo from '../components/Promo'
import Featured from '../components/Featured'
import Quotes from '../components/Quotes'
import EventArchive from '../components/EventArchive'

const IndexPage = ({ data }) => {
  const events = mergeResultsIntoItems(data.events)
  const featuredIds = map(data.homepage.values.featured, 'id')
  const featuredEvents = findEventsByIds(events, featuredIds)
  const quotes = mergeResultsIntoItems(data.quotes)

  return (
    <Layout>
      <Intro />
      <Latest items={events} />
      {data.homepage.values.showPromo && (
        <Promo url={data.homepage.values.promoURL} />
      )}
      <Featured events={featuredEvents} />
      <Quotes quotes={quotes} />
      <EventArchive events={events} />
    </Layout>
  )
}

export const query = graphql`
  {
    homepage: region(name: { eq: "homepage" }) {
      values {
        showPromo
        promoURL
        featured {
          id: _id
        }
      }
    }
    events: allEvent {
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
          mainImage {
            localFile {
              publicURL
            }
          }
        }
      }
    }
    quotes: allQuote {
      edges {
        node {
          id
          text
          name
          position
        }
      }
    }
  }
`

export default IndexPage
