import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'

import FormattedDate from '../components/FormattedDate'
import Icon from '../components/Icon'
import Image from '../components/Image'
import Layout from '../components/Layout'

import styles from './event.module.css'

const EventPage = ({ data }) => {
  const event = data.event

  return (
    <Layout wrapped={false}>
      <section className={styles.container}>
        <div className={styles.banner}>
          <p className={classnames(styles.bannerTitle, 'mql-l serif')}>
            {event.title}
          </p>

          <a className={styles.icon} href="/">
            <Icon type="close" />
          </a>
        </div>

        <div className={styles.inner}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              {event.title}
              {event.subtitle ? ': ' : ''}
              <br />
              {event.subtitle}
            </h1>
            <time className={styles.startDate} dateTime={event.startDate}>
              <FormattedDate date={event.startDate} />
            </time>
          </header>

          <Image
            className={styles.image}
            source={event.mainImage}
            width={298}
            height={165}
            auto
          />

          <p className={classnames(styles.body, 'mql-m mqs-m')}>
            {event.summary}
          </p>

          {event.ticketURL && (
            <p className={styles.ticket}>
              <a href={event.ticketURL}>Get ticket</a>
            </p>
          )}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    event(id: { eq: $id }) {
      id
      title
      subtitle
      summary
      startDate
      ticketURL
      mainImage {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default EventPage
