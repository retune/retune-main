import * as React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

import * as urls from '../../lib/urls'

import styles from './index.module.css'

const NavigationLink = ({ children, to }) => (
  <Link className={classnames(styles.NavigationLink)} to={urls.aboutPath()}>
    {children}
  </Link>
)

const Navigation = ({ open }) => (
  <nav
    className={classnames(styles.Navigation, {
      [styles.isOpen]: open,
      [styles.isClosed]: !open,
    })}
  >
    <div className={classnames(styles.sections, 'mql-m')}>
      <div className={classnames(styles.section, styles.information)}>
        <h3 className={styles.header}>Information</h3>
        <ul className={classnames(styles.links, 'list-reset')}>
          <li>
            <NavigationLink to={urls.aboutPath()}>About</NavigationLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navigation
