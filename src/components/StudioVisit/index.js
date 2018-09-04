import * as React from 'react'
import classnames from 'classnames'

import Collapsible from '../Collapsible'
import FormattedDate from '../FormattedDate'
import Image from '../Image'
import Markdown from '../Markdown'

import styles from './index.module.css'

const Heading = ({ event }) => (
  <span className={classnames(styles.heading, 'mql-xl')}>
    <span className={classnames(styles.title, 'serif')}>{event.title}</span>{' '}
    <span className={classnames(styles.subtitle)}>{event.subtitle}</span>
  </span>
)

const StudioVisit = ({ event }) => (
  <Collapsible
    className={classnames(styles.StudioVisit)}
    heading={<Heading event={event} />}
  >
    <div className={classnames(styles.content, styles.grid)}>
      <div className="mql-s mono">
        <p>
          Event Date: <FormattedDate date={event.startDate} />
        </p>
        <p>Place: {event.location}</p>
        <p>Visitors: {event.visitors}</p>

        <p className={classnames(styles.summary)}>{event.summary}</p>

        <div className={classnames(styles.body)}>
          <Markdown source={event.description} />
        </div>
      </div>
      <p className={classnames(styles.link, 'mql-m sans')}>
        <a href={event.externalURL}>Go to studio</a>
      </p>

      <div className={classnames(styles.image)}>
        <Image source={event.mainImage} />
      </div>
    </div>
  </Collapsible>
)

export default StudioVisit