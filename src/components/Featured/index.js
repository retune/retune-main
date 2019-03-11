import * as React from 'react'
import classnames from 'classnames'

import Event from './Event'

import styles from './index.module.css'

export default ({ events, parentUrl }) => (
  <section className={styles.Featured}>
    <h3 className={classnames(styles.heading, 'mql-xxl mqs-l')}>Featured</h3>
    <ul className={styles.list}>
      {events.map((event, index) => (
        <Event
          key={event.id}
          event={event}
          parentUrl={parentUrl}
          aspectRatio={index === 0 ? '2.2/1' : '3/2'}
        />
      ))}
    </ul>
  </section>
)
