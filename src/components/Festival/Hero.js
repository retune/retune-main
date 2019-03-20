import * as React from 'react'
import classnames from 'classnames'

import Flipbook from '../Flipbook'
import Markdown from '../Markdown'

import styles from './Hero.module.css'

const FestivalHero = ({ event }) => (
  <div className={classnames(styles.Hero)}>
    <div className={styles.titles}>
      <h2 className={classnames('mql-xl mqs-xl', styles.title)}>
        {event.title}
      </h2>
      <p className={classnames(styles.subtitle, 'mql-xl mqs-xl')}>
        {event.subtitle}
      </p>
    </div>
    <div className={styles.images}>
      {event.mainimages && (
        <Flipbook images={event.mainimages} aspectRatio="16/9" />
      )}
    </div>
    <div className={classnames(styles.body, 'mql-s mqs-m mono')}>
      <Markdown source={event.description} />
    </div>
    <p className={classnames(styles.link, 'mql-xl mqs-xl')}>
      ({' '}
      <span>
        -&gt;{' '}
        <a className="link" href={event.externalurl}>
          Go to festival site
        </a>
      </span>
      )
    </p>
  </div>
)

export default FestivalHero
