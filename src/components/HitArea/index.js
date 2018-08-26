import * as React from 'react'

import styles from './index.module.css'

const HitArea = ({ children, onClick }) => (
  <button className={styles.HitArea} onClick={onClick}>
    {children}
  </button>
)

export default HitArea
