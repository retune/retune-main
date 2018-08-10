import * as React from 'react'
import classnames from 'classnames'

import styles from './index.module.css'

const Navigation = ({ open }) => (
  <nav
    className={classnames(styles.Navigation, {
      [styles.isOpen]: open,
      [styles.isClosed]: !open,
    })}
  >
    This is the navigation {open ? 'OPEN' : 'CLOSED'}
  </nav>
)

export default Navigation
