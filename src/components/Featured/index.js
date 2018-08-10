import * as React from 'react'

import EventType from '../EventType'
import isNully from '../../lib/isNully'

import styles from './index.module.css'

const Event = ({ event }) => (
  <li className={styles.Event}>
    <p className={styles.type}>
      <EventType plural type={event.type} />
    </p>
    <div className={styles.image} />
    <h4 className={styles.title}>
      <a href="">
        {event.title}
        {isNully(event.subtitle) ? '' : ': '}
        {event.subtitle}
      </a>
    </h4>
    <p className={styles.summary}>{event.summary}</p>
  </li>
)

export default ({ events }) => (
  <section className={styles.Featured}>
    <h3 className={styles.heading}>Featured</h3>
    <ul className={styles.list}>
      {events.map(event => <Event key={event.id} event={event} />)}
    </ul>
  </section>
)
