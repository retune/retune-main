import * as React from 'react'

import FormattedDate from '../FormattedDate'

import styles from './index.module.css'

const labelForEvenType = type => {
  switch (type) {
    case 'studio-visit':
      return 'Studio Visit'
    case 'festival':
      return 'Festival'
    default:
      return null
  }
}

const EventItem = ({ type, title, subtitle, startDate }) => (
  <div className={styles.EventItem}>
    <p className={styles.type}>{labelForEvenType(type)}</p>
    <div className={styles.image} />
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.subtitle}>{subtitle}</p>
    <time className={styles.date} datetime={startDate}>
      <FormattedDate date={startDate} />
    </time>
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
