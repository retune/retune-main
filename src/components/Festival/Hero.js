import * as React from 'react'
import classnames from 'classnames'

import Collapsible from '../Collapsible'
import Image from '../Image'
import Flipbook from '../Flipbook'
import Markdown from '../Markdown'

import styles from './Hero.module.css'

const FestivalHero = ({ event }) => (
  <div className={classnames(styles.Hero)}>
    <div className={styles.titles}>
      <h2 className={classnames('mql-xl', styles.title)}>{event.title}</h2>
      <p className={classnames(styles.subtitle, 'mql-xl')}>{event.subtitle}</p>
    </div>
    <div className={styles.image}>
      {event.mainImages && <Flipbook images={event.mainImages} />}
    </div>
    <div className={classnames(styles.body, 'mql-s mono')}>
      <Markdown source={event.description} />
    </div>
    <p className={classnames(styles.link, 'mql-xl')}>
      ({' '}
      <span>
        -&gt;{' '}
        <a className="link" href={event.externalURL}>
          Go to festival site
        </a>
      </span>
      )
    </p>
  </div>
)

export default FestivalHero
