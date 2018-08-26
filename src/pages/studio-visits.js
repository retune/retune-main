import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'

import { Heading } from '../components/Header'
import Latest from '../components/Latest'
import Layout from '../components/Layout'
import StudioVisit from '../components/StudioVisit'

import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'
import splitEventsIntoPastAndFuture from '../lib/splitEventsIntoPastAndFuture'

import styles from './studio-visits.module.css'

const Title = (
  <React.Fragment>
    <span>Retune</span> <span className="serif">Studio Visits</span>
  </React.Fragment>
)

const StudioVisitsPage = ({ data }) => {
  const events = splitEventsIntoPastAndFuture(
    mergeResultsIntoItems(data.studioVisits)
  )

  return (
    <Layout
      className={styles.StudioVisits}
      pageTitle="Retune Studio Visits — Ongoing Series of Insights and Exchange"
    >
      <div className={styles.intro}>
        <Heading className={styles.heading} title={Title} />
        <div className={classnames(styles.info, 'mql-m mqs-s')}>
          Offering a unique opportunity to get a peek into the workshops of
          Berlin‘s creative studios. As always, this is not a stiff networking
          event but a good place to meet nice people and get inspired. And yes,
          there will be beers!
        </div>

        <div className={styles.images} />
      </div>

      <section>
        <h2 className="mql-xxl">Upcoming</h2>
        {events.future && Array.isArray(events.future) ? (
          <Latest theme="light" items={events.future} />
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
          mainImage {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`

export default StudioVisitsPage
