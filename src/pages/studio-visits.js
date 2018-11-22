import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'
import get from 'lodash/get'

import Header, { Heading, Info } from '../components/Header'
import Latest from '../components/Latest'
import Layout from '../components/Layout'
import PhotoGallery from '../components/PhotoGallery'
import StudioVisit from '../components/StudioVisit'

import { studioVisitsPath } from '../lib/urls'
import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'
import splitEventsIntoPastAndFuture from '../lib/splitEventsIntoPastAndFuture'

import styles from './studio-visits.module.css'

const Title = (
  <React.Fragment>
    <span>Retune</span> <span className="serif">Studio Visits</span>
  </React.Fragment>
)

const StudioVisitsPage = ({ data }) => {
  const info = get(data, 'page.edges[0].node.data.info.text')
  const images = get(data, 'page.edges[0].node.data.images', []).map(
    ({ image }) => image
  )
  const events = splitEventsIntoPastAndFuture(
    mergeResultsIntoItems(data.studioVisits)
  )
  const breadcrumbs = [
    {
      name: 'Studio Visits',
      to: studioVisitsPath(),
    },
  ]

  return (
    <Layout
      breadcrumbs={breadcrumbs}
      className={styles.StudioVisits}
      pageTitle="Retune Studio Visits — Ongoing Series of Insights and Exchange"
    >
      <div className={styles.intro}>
        <Header
          className={styles.header}
          heading={<Heading className={styles.heading} title={Title} />}
          info={<Info>{info}</Info>}
        />

        <div className={styles.images}>
          <PhotoGallery caption={false} images={images} />
        </div>
      </div>

      <section className={styles.upcoming}>
        <h2 className={classnames(styles.upcomingHeading, 'mql-xxl')}>
          Upcoming
        </h2>
        {events.future && Array.isArray(events.future) ? (
          <Latest
            innerClassName={styles.upcomingLatestInner}
            parentUrl={studioVisitsPath()}
            theme="light"
            items={events.future}
          />
        ) : (
          'No upcoming events'
        )}
      </section>

      <section>
        <h2 className="mql-xxl">Review</h2>
        {events.past && Array.isArray(events.past)
          ? events.past.map(event => (
              <StudioVisit key={event.id} event={event} />
            ))
          : 'No past events'}
      </section>

      <div className={classnames(styles.outro, 'mql-m')}>
        <p>
          You wanna participate and be part of the next Retune Studio Visits. Or
          you have suggestion for the next Studio we have to visits. Feel free
          to contact us at any time for any problems and related tasks: hey /at/
          retune.de
        </p>

        <p>
          For more info and updates sign up for our newsletter, join us on
          Slack, and follow us on Twitter, Instagram, Facebook and Flickr.
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    # page: studioVisitsPage {
    #   info
    #   images {
    #     meta {
    #       title
    #     }
    #     localFile {
    #       publicURL
    #       ...fluidImage
    #     }
    #   }
    # }

    page: allPrismicStudiovisitspage {
      edges {
        node {
          id
          data {
            info {
              text
            }
            images {
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

    studioVisits: allPrismicEvents(
      filter: { data: { type: { eq: "studio-visit" } } }
      sort: { order: DESC, fields: [data___startdate] }
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
            description {
              text
              raw {
                type
                text
              }
            }
            startdate
            #startTime
            enddate
            #endTime
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
            photogallery {
              image {
                #meta {
                #  title
                #}
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

export default StudioVisitsPage
