import * as React from 'react'
import classnames from 'classnames'

import styles from './index.module.css'

const DisclosureArrow = ({
  className = '',
  isOpen = false,
  size = 'large',
}) => (
  <svg
    className={classnames(
      styles.disclosureArrow,
      styles[size],
      isOpen ? styles.isOpen : styles.isClosed,
      className
    )}
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="45"
    viewBox="0 0 50 45"
  >
    <polygon
      fill="#D8D8D8"
      points="25 0 50 45 0 45"
      transform="rotate(180 25 22.5)"
    />
  </svg>
)

export default DisclosureArrow
