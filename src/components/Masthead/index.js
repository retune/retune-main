import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import get from 'lodash/get'
import classnames from 'classnames'

import Circle from '../Circle'
import Navigation from '../Navigation'
import getPlatformSeparator from '../../lib/getPlatformSeparator'

import styles from './index.module.css'

class Masthead extends React.Component {
  static defaultProps = {
    breadcrumbs: [],
  }

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

  renderSiteNameContent = () => (
    <React.Fragment>
      Retune{' '}
      <span className={styles.tagline}> – Creative Technology Laboratory</span>
    </React.Fragment>
  )

  renderBreadcrumbs = () => {
    const { root, separator } = getPlatformSeparator()
    const breadcrumbs = [
      { name: 'Retune', to: '/' },
      ...this.props.breadcrumbs,
    ].map(({ to, name }, index, array) => {
      const parts = [
        <Link to={to} className={styles.site}>
          {name}
        </Link>,
      ]

      if (index < array.length - 1) {
        parts.push(<span className={styles.sep}>{separator}</span>)
      }

      return parts
    })

    return [<span className={styles.sep}>{root}</span>, ...breadcrumbs]
  }

  render() {
    const { pageTitle = '' } = this.props
    const { open } = this.state

    const siteName = open ? (
      <div className={styles.site}>{this.renderBreadcrumbs()}</div>
    ) : (
      <span className={styles.site}>{this.renderSiteNameContent()}</span>
    )

    return (
      <header
        className={classnames(
          styles.Masthead,
          open ? styles.isOpen : styles.isClosed
        )}
        onClick={this.toggle}
        ref={this.elementRef}
      >
        <div className={styles.MastheadInner}>
          <button className={styles.opener}>
            <Circle isOpen={open} />
          </button>

          {siteName}

          <div className={styles.feature}>{pageTitle}</div>
        </div>

        <Navigation open={open} />
      </header>
    )
  }
}

export default Masthead
