import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import classnames from 'classnames'

import Navigation from '../Navigation'

import styles from './index.module.css'

class Masthead extends React.Component {
  state = {
    open: false,
  }

  elementRef = React.createRef()

  close = evt => {
    this.setState(
      {
        open: false,
      },
      this.removeCloseHandler
    )
  }

  open = () => {
    this.setState(
      {
        open: true,
      },
      this.addCloseHandler
    )
  }

  toggle = () => {
    this.state.open ? this.close() : this.open()
  }

  addCloseHandler = () => {
    document.body.addEventListener('click', this.handleClick)
  }

  removeCloseHandler = () => {
    document.body.removeEventListener('click', this.handleClick)
  }

  handleClick = evt => {
    // Do not close if clicking on navigation itself
    if (!this.elementRef.current.contains(evt.target)) {
      this.close()
    }
  }

  render() {
    const { pageTitle = '' } = this.props
    const { open } = this.state

    return (
      <header
        className={classnames(
          styles.Masthead,
          open ? styles.isOpen : styles.isClosed
        )}
        ref={this.elementRef}
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
