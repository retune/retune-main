import * as React from 'react'
import classnames from 'classnames'

import EventType from '../EventType'
import Image from '../Image'
import isNully from '../../lib/isNully'
import urls from '../../lib/urls'

import styles from './index.module.css'

const sectionUrlForType = type => {
  switch (type) {
    case 'studio-visit':
      return urls.studioVisitsPath()
    case 'festival':
      return urls.festivalsPath()
    default:
      return null
  }
}

const Event = ({ event }) => {
  const type = <EventType plural type={event.type} />
  const typeUrl = sectionUrlForType(event.type)
  const url = urls.eventPath(event)

  return (
    <li className={styles.Event}>
      <p
        className={classnames(styles.type, 'mono mono-before', 'mqs-s mql-xs')}
      >
        {typeUrl ? <a href={typeUrl}>{type}</a> : typeUrl}
      </p>

      <a href={url}>
        {event.mainImages && (
          <Image className={styles.image} source={event.mainImages[0]} />
        )}
        <h4 className={classnames(styles.title, 'mono-after', 'mqs-l mql-m')}>
          {event.title}
          {isNully(event.subtitle) ? '' : ': '}
          {event.subtitle}
        </h4>
        <p className={classnames(styles.summary, 'mqs-m mql-m')}>
          {event.summary}
        </p>
      </a>
    </li>
  )
}

export default Event
