import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import classnames from 'classnames'

import Navigation from '../Navigation'

import styles from './index.module.css'

// const Title = ({ url, text }) => {
//   if (url) {
//     return <a href={url}>{text}</a>
//   } else if (text) {
//     return text
//   }

//   return null
// }

class Masthead extends React.Component {
  state = {
    open: false,
  }

  toggle = () => this.setState({ open: !this.state.open })

  render() {
    const { pageTitle = '' } = this.props
    const { open } = this.state

    return (
      <header
        className={classnames(
          styles.Masthead,
          open ? styles.isOpen : styles.isClosed
        )}
      >
        <button className={styles.MastheadInner} onClick={this.toggle}>
          <div className={styles.site}>
            Retune
            <span className={styles.tagline}>
              {' '}
              – Creative Technology Laboratory
            </span>
          </div>
          <div className={styles.feature}>
            {/*<Title text={pageTitle} />*/}
            {pageTitle}
          </div>
        </button>

        <Navigation open={open} />
      </header>
    )
  }
}

export default Masthead
