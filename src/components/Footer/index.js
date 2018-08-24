import * as React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

import * as urls from '../../lib/urls'

import styles from './index.module.css'

const Infos = () => (
  <section className={styles.Infos}>
    <div className={styles.company}>
      <span>Retune</span>
      <span>
        Creative Technology<br />Laboratory
      </span>
    </div>

    <div className={styles.newsletter}>
      <a href="">👉 Get our Newsletter!</a>
    </div>

    <ul className={classnames(styles.links, 'mql-m mqs-s')}>
      <li>
        <Link to={urls.imprintPath()}>Imprint</Link>
      </li>
      <li>
        <a href="">Legal Notice</a>
      </li>
      <li>
        <Link to={urls.privacyPath()}>Datenschuz / Privacy</Link>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </ul>

    <p className={classnames(styles.imprint, 'mql-xs mqs-xs')}>
      Accountability for the internet pages retune.de and retune.org is:<br />{' '}
      Retune Creative Technology GmbH, Glogauer Str. 21, 10999 Berlin<br />
      webmaster@retune.de, HRB 174120 B
    </p>
  </section>
)

const Footer = () => (
  <footer className={styles.Footer}>
    <Infos />
  </footer>
)

export default Footer
