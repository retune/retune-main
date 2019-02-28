import * as React from 'react'
import classnames from 'classnames'

import styles from './index.module.css'

const Header = () => (
  <thead>
    <tr className={classnames('mql-m mqs-m')}>
      <th className={styles.type}>Type</th>
      <th className={styles.title}>Title</th>
      <th className={styles.date}>Date</th>
      <th className={styles.link} />
    </tr>
  </thead>
)

export default Header
