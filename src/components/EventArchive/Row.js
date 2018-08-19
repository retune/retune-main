import * as React from 'react'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'
import isNully from '../../lib/isNully'

import styles from './index.module.css'

const Row = ({ event }) => (
  <tr onClick={() => console.log('navigate')}>
    <td className={styles.type}>
      <EventType type={event.type} />
    </td>
    <td className={styles.title}>
      {event.title}
      {isNully(event.subtitle) ? '' : ': '}
      {event.subtitle}
    </td>
    <td className={styles.date}>
      <FormattedDate date={event.startDate} />
    </td>
    <td className={styles.link}>
      <a href="">-&gt;</a>
    </td>
  </tr>
)

export default Row
