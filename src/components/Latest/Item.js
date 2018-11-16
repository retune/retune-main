import * as React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'
import Image from '../Image'

import urls from '../../lib/urls'

import styles from './index.module.css'

const sectionUrlForType = type => {
  switch (type) {
    case 'studio-visit':
      return urls.studioVisitsPath()
    case 'festival':
      return urls.festivalsPath()
    default:
      return null
  }
}

const Item = item => {
  const {
    parentUrl,
    theme,
    type,
    title,
    subtitle,
    publisheddate,
    startdate,
    ticketurl,
    mainimage,
    mainimages,
  } = item

  const date = startdate || publisheddate
  const typeLabel = type ? <EventType type={type} /> : 'News'
  const url = type ? urls.eventPath(item) : urls.newsPath(item)
  const typeUrl = sectionUrlForType(type)
  const image =
    mainimages && mainimages[0]
      ? mainimages[0].image
      : mainimage && mainimage.image
  const linkClasses = theme === 'dark' ? 'link link-white' : 'link'

  return (
    <div className={classnames(styles.EventItem, 'mql-m mqs-m')}>
      <p className={classnames(styles.type, 'serif', 'mql-l mqs-m')}>
        {typeUrl ? (
          <Link className={linkClasses} to={typeUrl}>
            {typeLabel}
          </Link>
        ) : (
          typeLabel
        )}
      </p>

      <Link to={url} state={{ backTo: parentUrl }}>
        <Image
          className={styles.image}
          source={image}
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
      </Link>

      {ticketurl ? (
        <a className={classnames(styles.ticket, linkClasses)} href={ticketurl}>
          Book ticket
        </a>
      ) : null}
    </div>
  )
}

export default Item
