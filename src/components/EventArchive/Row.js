import * as React from 'react'
import classnames from 'classnames'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'
import isNully from '../../lib/isNully'

import styles from './index.module.css'

const Row = ({ event }) => (
  <tr className="mql-m mqs-s" onClick={() => console.log('navigate')}>
    <td className={classnames(styles.type, 'serif')}>{event.title}</td>
    <td className={styles.title}>{event.subtitle}</td>
    <td className={styles.date}>
      <FormattedDate date={event.startDate} />
    </td>
    <td className={styles.link}>
      <a href="" className="mono">
        -&gt;
      </a>
    </td>
  </tr>
)

export default Row
