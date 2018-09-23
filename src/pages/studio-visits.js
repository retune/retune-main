import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'

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
  const info = data.page.info
  const images = data.page.images
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

      <section>
        <h2 className="mql-xxl">Upcoming</h2>
        {events.future && Array.isArray(events.future) ? (
          <Latest
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
    page: studioVisitsPage {
      info
      images {
        meta {
          title
        }
        localFile {
          publicURL
          ...fluidImage
        }
      }
    }

    studioVisits: allEvent(
      filter: { type: { eq: "studio-visit" } }
      sort: { order: DESC, fields: [startDate] }
    ) {
      edges {
        node {
          id
          type
          title
          subtitle
          summary
          description
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
          photoGallery {
            meta {
              title
            }
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

export default StudioVisitsPage
