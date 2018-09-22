import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'
import Icon from '../Icon'
import Image from '../Image'
import Layout from '../Layout'
import Latest from '../Latest'
import Markdown from '../Markdown'

import urls from '../../lib/urls'

import styles from './index.module.css'

const sectionUrlForType = type => {
  switch (type) {
    case 'studio-visit':
      return { name: 'Studio Visit', to: urls.studioVisitsPath() }
    case 'festival':
      return { name: 'Festivals', to: urls.festivalsPath() }
    default:
      return null
  }
}

const ItemPage = ({ url, item, related = [] }) => {
  const date = item.startDate || item.publishedDate
  const body = item.description || item.body
  const typeLabel = item.type ? <EventType type={item.type} /> : 'News'
  const typeUrl = sectionUrlForType(item.type)
  const image =
    item.mainImages && item.mainImages.length > 0
      ? item.mainImages[0]
      : item.mainImage
  const breadcrumbs = []

  if (typeUrl) {
    breadcrumbs.push(typeUrl)
  }

  breadcrumbs.push({
    to: url,
    name: item.title,
  })

  return (
    <Layout
      breadcrumbs={breadcrumbs}
      pageTitle="Retune — Creative Technology Laboratory"
    >
      <section className={styles.container}>
        <div className={styles.inner}>
          <div className={classnames(styles.type, 'mono', 'mql-s mqs-s')}>
            {typeUrl ? (
              <Link to={typeUrl.to} className="link link-black">
                {typeLabel}
              </Link>
            ) : (
              typeLabel
            )}
          </div>

          <header className={styles.header}>
            <h1 className={styles.title}>
              {item.title}
              {item.subtitle ? ': ' : ''}
              <br />
              {item.subtitle}
            </h1>
            <time className={styles.startDate} dateTime={date}>
              <FormattedDate date={date} />
            </time>
          </header>

          {image && (
            <div className={styles.image}>
              <Image source={image} />
            </div>
          )}

          <div className={classnames(styles.body, 'mql-m mqs-m')}>
            {body ? <Markdown source={body} /> : item.summary}
          </div>

          {item.ticketURL && (
            <p className={classnames(styles.ticket, 'mql-m mqs-m')}>
              <a className="link" href={item.ticketURL}>
                Get ticket
              </a>
            </p>
          )}

          {related && (
            <div className={styles.related}>
              <h3
                className={classnames(
                  styles.relatedHeading,
                  'mql-s mqs-s mono'
                )}
              >
                Other events
              </h3>
              <Latest theme="light" items={related} />
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default ItemPage
