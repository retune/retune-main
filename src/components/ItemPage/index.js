import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import first from 'lodash/first'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'
import PhotoGallery from '../PhotoGallery'
import Layout from '../Layout'
import Latest from '../Latest'
import Markdown from '../Markdown'

import splitEventsIntoPastAndFuture from '../../lib/splitEventsIntoPastAndFuture'
import sortItems from '../../lib/sortItems'
import { urlPathForEventType, labelForEventType } from '../../lib/getType'

import styles from './index.module.css'

const sectionBreadcrumbForType = type => {
  const to = urlPathForEventType(type)
  const name = labelForEventType(type)

  if (to && name) {
    return { name, to }
  }

  return null
}

const ItemPage = ({ backTo, url, item, related = [] }) => {
  const date = item.startdate || item.publisheddate
  const body = item.description || item.body
  const typeLabel = item.type ? <EventType type={item.type} /> : 'News'
  const type = sectionBreadcrumbForType(item.type)
  const images =
    item.mainimages && item.mainimages.length > 0
      ? item.mainimages
      : [item.mainimage]
  const firstImage = first(images)
  const relatedExcludingSelf = related.filter(e => e.id !== item.id)
  const events = splitEventsIntoPastAndFuture(relatedExcludingSelf)
  const futureEvents = sortItems(events.future)

  const breadcrumbs = []

  if (type) {
    breadcrumbs.push(type)
  }

  breadcrumbs.push({
    to: url,
    name: item.title,
  })

  return (
    <Layout
      breadcrumbs={breadcrumbs}
      pageTitle="Retune — Creative Technology Laboratory"
      pageDescription={item.summary}
      pageImage={firstImage}
      pagePath={url}
      backTo={backTo}
    >
      <section className={styles.container}>
        <div className={styles.inner}>
          <div className={classnames(styles.type, 'mono', 'mql-s mqs-s')}>
            {type ? (
              <Link to={type.to} className="link link-black">
                {typeLabel}
              </Link>
            ) : (
              typeLabel
            )}
          </div>

          <header className={classnames(styles.header)}>
            <h1 className={classnames(styles.title, 'mql-xl')}>{item.title}</h1>
            {item.subtitle && (
              <h2 className={classnames(styles.subtitle, 'mql-xl')}>
                {item.subtitle}
              </h2>
            )}
            <time
              className={classnames(styles.startdate, 'mql-xl')}
              dateTime={date}
            >
              <FormattedDate date={date} />
            </time>
          </header>

          <div className={styles.extra}>
            {item.ticketurl && (
              <p className={classnames(styles.ticket, 'mql-m mqs-m')}>
                <a className="link" href={item.ticketurl}>
                  Get ticket
                </a>
              </p>
            )}

            {images && images.length > 0 ? (
              <div className={styles.image}>
                <PhotoGallery images={images} />
              </div>
            ) : null}
          </div>

          <div className={classnames(styles.body, 'mql-m mqs-m')}>
            {body ? <Markdown source={body} /> : item.summary}
          </div>

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
              <Latest
                parentUrl={null}
                theme="light"
                items={futureEvents}
                innerClassName={styles.relatedLatestInner}
              />
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default ItemPage
