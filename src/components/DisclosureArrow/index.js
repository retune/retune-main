import * as React from 'react'
import classnames from 'classnames'

import Icon from '../Icon'

import styles from './index.module.css'

const DisclosureArrow = ({
  className = '',
  isOpen = false,
  size = 'large',
}) => (
  <Icon
    className={classnames(
      styles.disclosureArrow,
      styles[size],
      isOpen ? styles.isOpen : styles.isClosed,
      className
    )}
    type="disclosureArrow"
  />
)

export default DisclosureArrow
