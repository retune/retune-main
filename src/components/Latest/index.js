import * as React from 'react'
import classnames from 'classnames'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'

import styles from './index.module.css'

const EventItem = ({ type, title, subtitle, startDate, ticketURL }) => (
  <div className={styles.EventItem}>
    <p className={styles.type}>
      <EventType type={type} />
    </p>
    <div className={styles.image} />
    <h2 className={classnames(styles.title, styles.ellipsis)}>{title}</h2>
    <p className={classnames(styles.subtitle, styles.ellipsis)}>{subtitle}</p>
    <time className={styles.date} dateTime={startDate}>
      <FormattedDate date={startDate} />
    </time>
    {ticketURL ? (
      <a className={styles.ticket} href={ticketURL}>
        Book ticket
      </a>
    ) : null}
  </div>
)

const Latest = ({ items }) => (
  <div className={styles.Latest}>
    <div className={styles.Inner}>
      {items.map(item => <EventItem key={item.id} {...item} />)}
    </div>
  </div>
)

export default Latest
