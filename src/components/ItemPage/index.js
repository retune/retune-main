import React from 'react'
import classnames from 'classnames'

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
      return urls.studioVisitsPath()
    case 'festival':
      return urls.festivalsPath()
    default:
      return null
  }
}

const ItemPage = ({ item, related = [] }) => {
  const date = item.startDate || item.publishedDate
  const body = item.description || item.body
  const typeLabel = item.type ? <EventType type={item.type} /> : 'News'
  const typeUrl = sectionUrlForType(item.type)
  const image =
    item.mainImages && item.mainImages.length > 0
      ? item.mainImages[0]
      : item.mainImage

  return (
    <Layout pageTitle="Retune — Creative Technology Laboratory">
      <section className={styles.container}>
        <div className={styles.inner}>
          <div className={classnames(styles.type, 'mono', 'mql-s mqs-s')}>
            {typeUrl ? <a href={typeUrl}>{typeLabel}</a> : typeLabel}
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

          {image && <Image className={styles.image} source={image} />}

          <div className={classnames(styles.body, 'mql-m mqs-m')}>
            {body ? <Markdown source={body} /> : item.summary}
          </div>

          {item.ticketURL && (
            <p className={classnames(styles.ticket, 'mql-m mqs-m')}>
              <a href={item.ticketURL}>Get ticket</a>
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
