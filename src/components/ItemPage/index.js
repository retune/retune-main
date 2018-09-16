import React from 'react'
import classnames from 'classnames'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'
import Icon from '../Icon'
import Image from '../Image'
import Layout from '../Layout'
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

const ItemPage = ({ item }) => {
  const date = item.startDate || item.publishedDate
  const body = item.description || item.body
  const typeLabel = item.type ? <EventType type={item.type} /> : 'News'
  const typeUrl = sectionUrlForType(item.type)

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

          <Image
            className={styles.image}
            source={item.mainImage}
            width={298}
            height={165}
            auto
          />

          <div className={classnames(styles.body, 'mql-m mqs-m')}>
            {body ? <Markdown source={body} /> : item.summary}
          </div>

          {item.ticketURL && (
            <p className={classnames(styles.ticket, 'mql-m mqs-m')}>
              <a href={item.ticketURL}>Get ticket</a>
            </p>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default ItemPage
