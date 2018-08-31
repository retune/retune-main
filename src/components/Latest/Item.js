import * as React from 'react'
import classnames from 'classnames'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'
import Image from '../Image'

import { eventPath, newsPath } from '../../lib/urls'

import styles from './index.module.css'

const Item = ({
  id,
  type,
  title,
  subtitle,
  publishedDate,
  startDate,
  ticketURL,
  mainImage,
}) => {
  const date = startDate || publishedDate
  const typeLabel = type ? <EventType type={type} /> : 'News'
  const url = type ? eventPath({ id }) : newsPath({ id })

  return (
    <div className={classnames(styles.EventItem, 'mql-m mqs-m')}>
      <a href={url}>
        <p className={classnames(styles.type, 'serif', 'mql-l mqs-m')}>
          {typeLabel}
        </p>

        <Image
          className={styles.image}
          source={mainImage}
          width={298}
          height={165}
          auto
        />

        <h2 className={classnames(styles.title, 'mql-m mqs-m ellipsis')}>
          {title}
        </h2>
        <p className={classnames(styles.subtitle, 'ellipsis')}>{subtitle}</p>
        <time className={styles.date} dateTime={date}>
          <FormattedDate date={date} />
        </time>
      </a>

      {ticketURL ? (
        <a className={styles.ticket} href={ticketURL}>
          Book ticket
        </a>
      ) : null}
    </div>
  )
}

export default Item
