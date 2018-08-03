import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import styles from './index.module.css'

export default () => (
  <StaticQuery
    query={graphql`
      {
        masthead: region(name: { eq: "masthead" }) {
          values {
            featureText
            featureURL
          }
        }
      }
    `}
    render={data => (
      <header className={styles.Masthead}>
        <div className={styles.site}>Retune</div>
        <div className={styles.feature}>
          <a href={data.masthead.values.featureURL}>
            {data.masthead.values.featureText}
          </a>
        </div>
      </header>
    )}
  />
)
