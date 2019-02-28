import * as React from 'react'
import classnames from 'classnames'
import { navigate } from 'gatsby'

import FormattedDate, { FormattedInterval } from '../FormattedDate'
import { eventPath } from '../../lib/urls'

import styles from './index.module.css'

const classes = cl => classnames(cl, 'mql-m mqs-m')

const Row = ({ event }) => {
  const url = eventPath(event)

  let date = null

  if (event.startdate && event.enddate && event.startdate !== event.enddate) {
    date = <FormattedInterval start={event.startdate} end={event.enddate} />
  } else if (event.startdate) {
    date = <FormattedDate date={event.startdate} />
  }

  return (
    <tr onClick={() => navigate(url, { state: { backTo: '/' } })} role="link">
      <td className={classnames(styles.type, 'mql-m mqs-m serif')}>
        {event.title}
      </td>
      <td className={classes(styles.title)}>{event.subtitle}</td>
      <td className={classes(styles.date)}>{date}</td>
      <td className={classes(styles.link)}>
        <a href={url} className="mono no-wrap">
          -&gt;
        </a>
      </td>
    </tr>
  )
}

export default Row
