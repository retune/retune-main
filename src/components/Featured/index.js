import * as React from 'react'
import classnames from 'classnames'

import Event from './Event'

import styles from './index.module.css'

export default ({ events }) => (
  <section className={styles.Featured}>
    <h3 className={classnames(styles.heading, 'mql-xxl mqs-l')}>Featured</h3>
    <ul className={styles.list}>
      {events.map(event => <Event key={event.id} event={event} />)}
    </ul>
  </section>
)
