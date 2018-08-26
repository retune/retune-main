import * as React from 'react'
import classnames from 'classnames'

import Icon from '../Icon'

import styles from './index.module.css'

const DisclosureArrow = ({ isOpen = false }) => (
  <Icon
    className={classnames(
      styles.disclosureArrow,
      isOpen ? styles.isOpen : styles.isClosed
    )}
    type="disclosureArrow"
  />
)

export default DisclosureArrow
