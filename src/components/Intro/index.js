import * as React from 'react'
import classnames from 'classnames'

import styles from './index.module.css'

export default () => (
  <section className={classnames(styles.Intro, styles.isFullViewport)}>
    <h1 className={classnames(styles.title, 'mql-xl mqs-xl')}>Retune</h1>
    <p className={classnames(styles.subtitle, 'mql-xl mqs-xl')}>
      Creative Technology <span className={styles.break}>Laboratory</span>
    </p>

    <p className={classnames(styles.info, 'mql-xl mqs-xl')}>
      Festivals, Events and Art Production. For clients and our community
    </p>
  </section>
)
