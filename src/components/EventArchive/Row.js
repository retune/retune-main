import * as React from 'react'
import classnames from 'classnames'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'
import isNully from '../../lib/isNully'

import styles from './index.module.css'

const classes = cl => classnames(cl, 'mql-m mqs-s')

const Row = ({ event }) => (
  <tr onClick={() => console.log('navigate')}>
    <td className={classnames(styles.type, 'mql-m mqs-m serif')}>
      {event.title}
    </td>
    <td className={classes(styles.title)}>{event.subtitle}</td>
    <td className={classes(styles.date)}>
      <FormattedDate date={event.startDate} />
    </td>
    <td className={classes(styles.link)}>
      <a href="" className="mono no-wrap">
        -&gt;
      </a>
    </td>
  </tr>
)

export default Row
