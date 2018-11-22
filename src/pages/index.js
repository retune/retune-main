import React from 'react'
import { graphql } from 'gatsby'
import map from 'lodash/map'
import get from 'lodash/get'

import findEventsByIds from '../lib/findEventsByIds'
import mergeResultsIntoItems, {
  flattenNode,
} from '../lib/mergeResultsIntoItems'
import splitEventsIntoPastAndFuture from '../lib/splitEventsIntoPastAndFuture'
import sortItems from '../lib/sortItems'

import Intro from '../components/Intro'
import Latest from '../components/Latest'
import Layout from '../components/Layout'
import NowCast from '../components/NowCast'
// import Promo from '../components/Promo'
import Featured from '../components/Featured'
import Quotes from '../components/Quotes'
import EventArchive from '../components/EventArchive'

import styles from './index.module.css'

const IndexPage = ({ data }) => {
  const events = mergeResultsIntoItems(data.events)
  const split = splitEventsIntoPastAndFuture(events)
  // const featuredIds = map(data.homepage.featured, 'id')
  // const featuredEvents = findEventsByIds(events, featuredIds)
  const featuredEvents = data.page.edges[0].node.data.featured.map(node =>
    flattenNode(get(node, 'item.document[0].data', {}))
  )
  const quotes = mergeResultsIntoItems(data.quotes)
  // const posts = mergeResultsIntoItems(data.posts)
  // const latest = sortItems([...split.future, ...posts])
  const latest = sortItems([...split.future])

  console.log('featuredEvents', featuredEvents)

  return (
    <Layout pageTitle={<NowCast />}>
      <Intro />
      <Latest
        parentUrl="/"
        className={styles.latest}
        innerClassName={styles.latestInner}
        items={latest}
      />
      {/*
      {data.homepage.showPromo && <Promo url={data.homepage.promoURL} />}*/}
      <Featured events={featuredEvents} />
      <Quotes quotes={quotes} />
      <EventArchive events={split.past} />
    </Layout>
  )
}

export const query = graphql`
  {
    # homepage: startPage {
    #   showPromo
    #   promoURL
    #   featured {
    #     id
    #   }
    # }

    page: allPrismicStartpage {
      edges {
        node {
          id
          data {
            featured {
              item {
                document {
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
        }
      }
    }

    # posts: allPost {
    #   edges {
    #     node {
    #       id
    #       publishedDate
    #       title
    #       subtitle
    #       summary
    #       mainImage {
    #         localFile {
    #           publicURL
    #           ...fluidImage
    #         }
    #       }
    #     }
    #   }
    # }

    events: allPrismicEvents(
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
            # startTime
            # endDate
            # endTime
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

    quotes: allPrismicQuotes {
      edges {
        node {
          id
          data {
            text {
              text
            }
            name {
              text
            }
            position {
              text
            }
          }
        }
      }
    }

    # quotes: allQuote {
    #   edges {
    #     node {
    #       id
    #       text
    #       name
    #       position
    #     }
    #   }
    # }
  }
`

export default IndexPage
