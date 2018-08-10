import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'

import Navigation from '../Navigation'

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

class Masthead extends React.Component {
  state = {
    open: false,
  }

  toggle = () => this.setState({ open: !this.state.open })

  render() {
    const { feature } = this.props
    const { open } = this.state

    return (
      <header className={styles.Masthead}>
        <button className={styles.MastheadInner} onClick={this.toggle}>
          <div className={styles.site}>Retune</div>
          <div className={styles.feature}>
            <a href={feature.url}>{feature.text}</a>
          </div>
        </button>

        <Navigation open={open} />
      </header>
    )
  }
}

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
