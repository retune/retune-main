import * as React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

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

const TypeLink = ({ event }) => {
  const type = <EventType plural type={event.type} />
  const typeUrl = sectionUrlForType(event.type)

  return (
    <p className={classnames(styles.type, 'mono mono-before', 'mqs-s mql-xs')}>
      {typeUrl ? (
        <Link className="link link-black" to={typeUrl}>
          {type}
        </Link>
      ) : (
        typeUrl
      )}
    </p>
  )
}

const Event = ({ event, parentUrl, aspectRatio }) => {
  const url = urls.eventPath(event)

  return (
    <li className={styles.Event}>
      <TypeLink event={event} />

      <Link
        className={classnames(styles.link, 'link-hit-area')}
        to={url}
        state={{ backTo: parentUrl }}
      >
        {event.mainimages && (
          <Image
            className={styles.image}
            source={event.mainimages[0]}
            aspectRatio={aspectRatio}
          />
        )}
        <h4 className={classnames(styles.title, 'mono-after', 'mqs-l mql-m')}>
          <span className="link">
            {event.title}
            {isNully(event.subtitle) ? '' : ': '}
            {event.subtitle}
          </span>
        </h4>
        <p className={classnames(styles.summary, 'mqs-m mql-m')}>
          {event.summary}
        </p>
      </Link>
    </li>
  )
}

export default Event
