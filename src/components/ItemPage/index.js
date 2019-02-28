import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'
import PhotoGallery from '../PhotoGallery'
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

const ItemPage = ({ backTo, url, item, related = [] }) => {
  const date = item.startdate || item.publisheddate
  const body = item.description || item.body
  const typeLabel = item.type ? <EventType type={item.type} /> : 'News'
  const typeUrl = sectionUrlForType(item.type)
  const images =
    item.mainimages && item.mainimages.length > 0
      ? item.mainimages
      : [item.mainimage]
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
      backTo={backTo}
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
                items={related}
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
