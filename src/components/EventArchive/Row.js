import * as React from 'react'
import classnames from 'classnames'
import { navigate } from 'gatsby'

import FormattedDate from '../FormattedDate'
import { eventPath } from '../../lib/urls'

import styles from './index.module.css'

const classes = cl => classnames(cl, 'mql-m mqs-s')

const Row = ({ event }) => {
  const url = eventPath(event)

  return (
    <tr onClick={() => navigate(url, { state: { backTo: '/' } })} role="link">
      <td className={classnames(styles.type, 'mql-m mqs-m serif')}>
        {event.title}
      </td>
      <td className={classes(styles.title)}>{event.subtitle}</td>
      <td className={classes(styles.date)}>
        <FormattedDate date={event.startDate} />
      </td>
      <td className={classes(styles.link)}>
        <a href={url} className="mono no-wrap">
          -&gt;
        </a>
      </td>
    </tr>
  )
}

export default Row
