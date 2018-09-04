import * as React from 'react'
import classnames from 'classnames'

import Collapsible from '../Collapsible'
import Image from '../Image'
import Markdown from '../Markdown'

import styles from './index.module.css'

const FestivalHero = ({ event }) => (
  <Collapsible
    collapsible={false}
    className={classnames(styles.HeroFestival, styles.Hero)}
    heading={event.title}
  >
    <p className={classnames(styles.subtitle, 'mql-xl')}>{event.subtitle}</p>
    <div className={styles.image}>
      <Image source={event.mainImage} />
    </div>
    <div className={classnames(styles.body, 'mql-s mono')}>
      <Markdown source={event.description} />
    </div>
    <p className={classnames(styles.link, 'mql-xxl')}>
      ({' '}
      <span>
        -&gt; <a href={event.externalURL}>Go to festival site</a>
      </span>)
    </p>
  </Collapsible>
)

export default FestivalHero
