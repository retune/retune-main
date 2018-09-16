import * as React from 'react'
import classnames from 'classnames'

import Collapsible from '../Collapsible'
import Image from '../Image'
import Flipbook from '../Flipbook'
import Markdown from '../Markdown'

import styles from './Hero.module.css'

const FestivalHero = ({ event }) => (
  <Collapsible
    collapsible={false}
    className={classnames(styles.Hero)}
    heading={<span className={styles.title}>{event.title}</span>}
  >
    <p className={classnames(styles.subtitle, 'mql-xl')}>{event.subtitle}</p>
    <div className={styles.image}>
      {/*event.mainImages && <Flipbook images={event.mainImages} />*/}
      {event.mainImages && <Image source={event.mainImages[0]} />}
    </div>
    <div className={classnames(styles.body, 'mql-s mono')}>
      <Markdown source={event.description} />
    </div>
    <p className={classnames(styles.link, 'mql-xl')}>
      ({' '}
      <span>
        -&gt; <a href={event.externalURL}>Go to festival site</a>
      </span>)
    </p>
  </Collapsible>
)

export default FestivalHero
