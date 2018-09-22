import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import get from 'lodash/get'
import classnames from 'classnames'

import Circle from '../Circle'
import Navigation from '../Navigation'

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
      this.didClose
    )
  }

  open = () => {
    this.setState(
      {
        open: true,
      },
      this.didOpen
    )
  }

  didClose = () => {
    this.removeCloseHandler()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  didOpen = () => {
    this.addCloseHandler()

    if (this.props.onOpen) {
      this.props.onOpen()
    }
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
    const separator = '/'
    const breadcrumbs = [
      { name: 'https://retune.de', to: '/' },
      ...this.props.breadcrumbs,
    ].map(({ to, name }, index, array) => {
      const parts = [
        <Link to={to} className="link link-white">
          {name}
        </Link>,
      ]

      if (index < array.length - 1) {
        parts.push(<span className={styles.sep}>{separator}</span>)
      }

      return parts
    })

    return breadcrumbs
  }

  render() {
    const { pageTitle = '' } = this.props
    const { open } = this.state
    const fontClasses = 'mql-m mqs-xl'
    const siteClasses = classnames(styles.site, 'ellipsis', fontClasses)

    const siteName = open ? (
      <div className={siteClasses}>{this.renderBreadcrumbs()}</div>
    ) : (
      <span className={siteClasses}>{this.renderSiteNameContent()}</span>
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

          <div className={classnames(styles.feature, 'ellipsis', fontClasses)}>
            {pageTitle}
          </div>
        </div>

        <Navigation open={open} />
      </header>
    )
  }
}

export default Masthead
