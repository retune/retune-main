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
import Promo from '../components/Promo'
import Featured from '../components/Featured'
import Quotes from '../components/Quotes'
import EventArchive from '../components/EventArchive'

import styles from './index.module.css'

const getFeaturedEvents = data => {
  const featured = get(data, 'page.edges[0].node.data.featured', null)
  if (featured != null && Array.isArray(featured) && featured.length > 0) {
    return featured.map(node => {
      const item = get(node, 'item.document[0]', {})
      return { ...item, ...flattenNode(item.data) }
    })
  }

  return null
}

const IndexPage = ({ data }) => {
  const events = mergeResultsIntoItems(data.events)
  const split = splitEventsIntoPastAndFuture(events)
  const featuredEvents = getFeaturedEvents(data)
  const quotes = mergeResultsIntoItems(data.quotes)
  const posts = mergeResultsIntoItems(data.posts)
  const latest = sortItems([...split.future, ...posts])

  const showPromo = get(data, 'page.edges[0].node.data.showpromo') === 'yes'
  const promoURL = get(data, 'page.edges[0].node.data.promourl', null)
  const promoImage = get(data, 'page.edges[0].node.data.promo', null)

  const pageLocation = '/'

  return (
    <Layout
      pageTitle={<NowCast />}
      pageDescription="Creative Technology Laboratory"
    >
      <Intro />
      <Latest
        parentUrl={pageLocation}
        className={styles.latest}
        innerClassName={styles.latestInner}
        items={latest}
      />
      {showPromo &&
        promoURL &&
        promoImage && <Promo url={promoURL} image={promoImage} />}
      <Featured events={featuredEvents} parentUrl={pageLocation} />
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
            showpromo
            promourl
            promo {
              localFile {
                publicURL
                ...fluidImage
              }
            }

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

    posts: allPrismicPosts(
      filter: { data: { startpage: { eq: "Yes" } } }
      sort: { fields: [data___sortdate], order: DESC }
    ) {
      edges {
        node {
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
            enddate
            # startTime
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
