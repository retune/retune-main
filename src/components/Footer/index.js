import * as React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

import Social from '../Social'

import * as urls from '../../lib/urls'

import styles from './index.module.css'

const Infos = () => (
  <section className={styles.Infos}>
    <div className={styles.company}>
      <a className="link link-white" href={urls.aboutPath()}>
        <span>Retune</span>
        <span>
          Creative Technology
          <br />
          GmbH
        </span>
      </a>
    </div>

    <div className={styles.newsletter}>
      <div>
        <a className="link link-white" href={urls.newsletterPath()}>
          <span role="img" aria-label="Backhand index-finger pointing right">
            👉
          </span>{' '}
          Get our Newsletter!
        </a>
      </div>
    </div>

    <div className={styles.social}>
      <Social theme="dark" />
    </div>

    <ul className={classnames(styles.links, 'mql-m mqs-s')}>
      <li>
        <Link className="link link-white" to={urls.imprintPath()}>
          Imprint
        </Link>
      </li>
      <li>
        <Link className="link link-white" to={urls.privacyPath()}>
          Datenschutz / Privacy
        </Link>
      </li>
    </ul>
  </section>
)

const Footer = ({ className = '' }) => (
  <footer className={classnames(styles.Footer, className)}>
    <Infos />
  </footer>
)

export default Footer
