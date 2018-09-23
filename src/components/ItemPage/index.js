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
  const date = item.startDate || item.publishedDate
  const body = item.description || item.body
  const typeLabel = item.type ? <EventType type={item.type} /> : 'News'
  const typeUrl = sectionUrlForType(item.type)
  const images =
    item.mainImages && item.mainImages.length > 0
      ? item.mainImages
      : [item.mainImage]
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

          {images && images.length > 0 ? (
            <div className={styles.image}>
              <PhotoGallery images={images} />
            </div>
          ) : null}

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
