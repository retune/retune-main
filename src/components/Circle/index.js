import * as React from 'react'
import classnames from 'classnames'

import styles from './index.module.css'

const Circle = ({ className = '', isOpen = false }) => (
  <div
    className={classnames(
      styles.Circle,
      isOpen ? styles.isOpen : styles.isClosed,
      className
    )}
  />
)

export default Circle
