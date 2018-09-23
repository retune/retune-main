import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import classnames from 'classnames'

import Masthead from '../Masthead'
import Footer from '../Footer'

import './index.css'
import styles from './index.module.css'

class Layout extends React.Component {
  state = {
    isNavOpen: false,
  }

  onOpen = () => {
    this.setState({
      isNavOpen: true,
    })
  }

  onClose = () => {
    this.setState({
      isNavOpen: false,
    })
  }

  render() {
    const {
      backTo = null,
      breadcrumbs,
      className = '',
      children,
      data,
      pageTitle,
      wrapped = true,
    } = this.props

    const { isNavOpen } = this.state

    return (
      <div className={isNavOpen ? styles.navOpen : styles.navClosed}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        {wrapped && (
          <Masthead
            breadcrumbs={breadcrumbs}
            siteTitle={data.site.siteMetadata.title}
            pageTitle={pageTitle}
            onOpen={this.onOpen}
            onClose={this.onClose}
            backTo={backTo}
          />
        )}
        <div className={classnames(className, styles.content)}>{children}</div>
        {wrapped && <Footer className={styles.footer} />}
      </div>
    )
  }
}

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Layout {...props} data={data} />}
  />
)

export default LayoutWithQuery
