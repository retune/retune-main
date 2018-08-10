import * as React from 'react'
import classnames from 'classnames'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'
import Image from '../Image'

import styles from './index.module.css'

const EventItem = ({
  type,
  title,
  subtitle,
  startDate,
  ticketURL,
  mainImage,
}) => (
  <div className={styles.EventItem}>
    <p className={styles.type}>
      <EventType type={type} />
    </p>

    <Image
      className={styles.image}
      source={mainImage}
      width={298}
      height={165}
    />

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
