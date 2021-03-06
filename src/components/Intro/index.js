import * as React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

import Artwork from '../Artwork'

import * as urls from '../../lib/urls'

import styles from './index.module.css'

const Hyperlink = ({ children, to }) => (
  <Link className="link link-white" to={to}>
    {children}
  </Link>
)

export default () => (
  <section className={classnames(styles.Intro, styles.isFullViewport)}>
    <Artwork>
      <div className={classnames(styles.IntroContent, styles.isFullViewport)}>
        <h1 className={classnames(styles.title, 'mql-xxl mqs-xl')}>Retune</h1>
        <p className={classnames(styles.subtitle, 'mql-xxl mqs-xl')}>
          Creative Technology <span className={styles.break}>Platform</span>
        </p>

        <p className={classnames(styles.info, 'mql-xl mqs-xl')}>
          <Hyperlink to={urls.eventPath({ type: 'festival' })}>
            festivals
          </Hyperlink>
          ,{' '}
          <Hyperlink to={urls.eventPath({ type: 'studio-visit' })}>
            studio visits,
          </Hyperlink>{' '}
          workshops, and more.
        </p>
      </div>
    </Artwork>
  </section>
)
