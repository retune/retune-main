import * as React from 'react'
import classnames from 'classnames'

import styles from './index.module.css'

export default () => (
  <section className={classnames(styles.Intro, styles.isFullViewport)}>
    <h1 className={styles.title}>Retune</h1>
    <p className={styles.subtitle}>
      Creative Technology <span className={styles.break}>Laboratory</span>
    </p>

    <p className={styles.info}>
      Festivals, Events and Art Production. For clients and our community
    </p>
  </section>
)
