import * as React from 'react'

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

    <ul className={styles.links}>
      <li>
        <a href="">Imprint</a>
      </li>
      <li>
        <a href="">Legal Notice</a>
      </li>
      <li>
        <a href="">Data Protection</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </ul>

    <p className={styles.imprint}>
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
