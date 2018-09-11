import * as React from 'react'
import classnames from 'classnames'

import EventType from '../EventType'
import Image from '../Image'
import isNully from '../../lib/isNully'
import { eventPath } from '../../lib/urls'

import styles from './index.module.css'

const Event = ({ event }) => (
  <li className={styles.Event}>
    <p className={classnames(styles.type, 'mono mono-before', 'mqs-s mql-xs')}>
      <EventType plural type={event.type} />
    </p>

    <Image className={styles.image} source={event.mainImage} />

    <h4 className={classnames(styles.title, 'mono-after', 'mqs-l mql-m')}>
      <a href={eventPath({ id: event.id })}>
        {event.title}
        {isNully(event.subtitle) ? '' : ': '}
        {event.subtitle}
      </a>
    </h4>
    <p className={classnames(styles.summary, 'mqs-m mql-m')}>{event.summary}</p>
  </li>
)

export default Event
