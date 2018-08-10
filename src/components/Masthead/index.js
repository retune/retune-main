import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'

import styles from './index.module.css'

const composeData = data => {
  const text = get(data, 'masthead.values.featureText')
  const url = get(data, 'masthead.values.featureURL')
  const obj = {
    feature: null,
  }

  if (text && url) {
    obj.feature = { text, url }
  }

  return obj
}

const Masthead = ({ feature }) => (
  <header className={styles.Masthead}>
    <div className={styles.site}>Retune</div>
    <div className={styles.feature}>
      <a href={feature.url}>{feature.text}</a>
    </div>
  </header>
)

const MastheadWithQuery = () => (
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
    render={data => <Masthead feature={composeData(data).feature} />}
  />
)

export default MastheadWithQuery
