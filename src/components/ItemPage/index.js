import React from 'react'
import classnames from 'classnames'

import FormattedDate from '../FormattedDate'
import Icon from '../Icon'
import Image from '../Image'
import Layout from '../Layout'
import Markdown from '../Markdown'

import styles from './index.module.css'

const ItemPage = ({ item }) => {
  const date = item.startDate || item.publishedDate
  const body = item.description || item.body

  return (
    <Layout wrapped={false}>
      <section className={styles.container}>
        <div className={styles.banner}>
          <p className={classnames(styles.bannerTitle, 'mql-l serif')}>
            {item.title}
          </p>

          <a className={styles.icon} href="/">
            <Icon type="close" />
          </a>
        </div>

        <div className={styles.inner}>
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
            <p className={styles.ticket}>
              <a href={item.ticketURL}>Get ticket</a>
            </p>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default ItemPage
