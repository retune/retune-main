import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'
import get from 'lodash/get'

import Header, { Heading, Info } from '../components/Header'
import Latest from '../components/Latest'
import Layout from '../components/Layout'
import PhotoGallery from '../components/PhotoGallery'
import StudioVisit from '../components/StudioVisit'
import { Group } from '../components/Collapsible'
import Video from '../components/Video'

import { studioVisitsPath } from '../lib/urls'
import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'
import splitEventsIntoPastAndFuture from '../lib/splitEventsIntoPastAndFuture'
import sortItems from '../lib/sortItems'

import styles from './studio-visits.module.css'

const Title = (
  <React.Fragment>
    <span>Retune</span> <span className="serif">Studio Visits</span>
  </React.Fragment>
)

const StudioVisitsPage = ({ data, pageContext }) => {
  const selectedId = pageContext.id
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

  const hasUpcomingEvents =
    Array.isArray(events.future) && events.future.length > 0

  const upcoming = hasUpcomingEvents ? (
    <section className={styles.upcoming}>
      <h2 className={classnames(styles.upcomingHeading, 'mql-xxl')}>
        Upcoming
      </h2>
      <Latest
        innerClassName={styles.upcomingLatestInner}
        parentUrl={studioVisitsPath()}
        theme="light"
        items={sortItems(events.future)}
      />
    </section>
  ) : null

  const hasPastEvents = events.past && Array.isArray(events.past)

  const archive = hasPastEvents ? (
    <Group>
      {({ onToggle, currentlyOpen = selectedId, initialRender }) => {
        return events.past.map(event => {
          return (
            <StudioVisit
              key={event.id}
              event={event}
              collapsed={currentlyOpen !== event.id}
              onToggle={isCollapsed => onToggle(event.id, isCollapsed)}
              scrollIntoViewOnMount={
                initialRender && event.id === currentlyOpen
              }
            />
          )
        })
      }}
    </Group>
  ) : (
    'No past events'
  )

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

        <div className={styles.video}>
          <Video />
        </div>
      </div>

      {upcoming}

      <section>
        <h2 className="mql-xxl">Review</h2>
        {archive}
      </section>

      <div className={classnames(styles.outro, 'mql-m')}>
        <p>
          Are you interested in participating with your studio? Or do you have a
          suggestion for a studio visit that needs to happen? Feel free to
          contact us: hey /at/ retune.de
        </p>

        <p>
          For more info and updates sign up for our{' '}
          <a href="http://eepurl.com/oAiGz">newsletter</a>, join us on{' '}
          <a href="https://retune-community.slack.com">Slack</a>, and follow us
          on <a href="https://twitter.com/retuneberlin"> Twitter</a>,
          <a href="http://instagram.com/retuneberlin"> Instagram</a>,
          <a href="https://www.facebook.com/retuneberlin"> Facebook</a> and
          <a href="https://www.flickr.com/photos/retuneconference/"> Flickr</a>.
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
