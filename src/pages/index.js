import React from 'react'
import { graphql } from 'gatsby'
import map from 'lodash/map'

import findEventsByIds from '../lib/findEventsByIds'
import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'
import splitEventsIntoPastAndFuture from '../lib/splitEventsIntoPastAndFuture'
import sortItems from '../lib/sortItems'

import Intro from '../components/Intro'
import Latest from '../components/Latest'
import Layout from '../components/Layout'
import NowCast from '../components/NowCast'
import Promo from '../components/Promo'
import Featured from '../components/Featured'
import Quotes from '../components/Quotes'
import EventArchive from '../components/EventArchive'

import styles from './index.module.css'

const IndexPage = ({ data }) => {
  const events = mergeResultsIntoItems(data.events)
  const split = splitEventsIntoPastAndFuture(events)
  const featuredIds = map(data.homepage.featured, 'id')
  const featuredEvents = findEventsByIds(events, featuredIds)
  const quotes = mergeResultsIntoItems(data.quotes)
  const posts = mergeResultsIntoItems(data.posts)
  const latest = sortItems([...split.future, ...posts])

  return (
    <Layout pageTitle={<NowCast />}>
      <Intro />
      <Latest
        className={styles.latest}
        innerClassName={styles.latestInner}
        items={latest}
      />
      {data.homepage.showPromo && <Promo url={data.homepage.promoURL} />}
      <Featured events={featuredEvents} />
      <Quotes quotes={quotes} />
      <EventArchive events={split.past} />
    </Layout>
  )
}

export const query = graphql`
  {
    homepage: startpage {
      showPromo
      promoURL
      featured {
        id
      }
    }

    posts: allPost {
      edges {
        node {
          id
          publishedDate
          title
          subtitle
          summary
          mainImage {
            localFile {
              publicURL
              ...fluidImage
            }
          }
        }
      }
    }

    events: allEvent(sort: { fields: [startDate], order: DESC }) {
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
