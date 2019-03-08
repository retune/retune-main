import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import classnames from 'classnames'

/*
  Imports the Courier Prime typeface
  Available via font-family: 'Courier Prime'
*/
import 'typeface-courier-prime'

import config from '../../../gatsby-config'

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
      pageDescription = null,
      pageTitle,
      wrapped = true,
    } = this.props

    const { isNavOpen } = this.state

    const siteMetadata = data.site.siteMetadata
    const siteTitle = siteMetadata.title
    const title = typeof pageTitle === 'string' ? pageTitle : siteTitle

    const url = siteMetadata.url
    const description = pageDescription

    return (
      <div className={isNavOpen ? styles.navOpen : styles.navClosed}>
        <Helmet
          title={title}
          meta={[
            description && {
              name: 'description',
              content: description,
            },
            { name: 'keywords', content: siteMetadata.keywords },

            // OpenGraph
            { property: 'og:url', content: url },
            description && { property: 'og:description', content: description },

            // Twitter
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:creator', content: siteMetadata.twitter },
            { name: 'twitter:title', content: title },
            description && {
              name: 'twitter:description',
              content: description,
            },
          ].filter(o => o != null)}
        />

        {wrapped && (
          <Masthead
            breadcrumbs={breadcrumbs}
            siteTitle={siteTitle}
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
      {
        site {
          siteMetadata {
            title
            url
            keywords
            twitter
          }
        }
      }
    `}
    render={data => <Layout {...props} data={data} />}
  />
)

export default LayoutWithQuery
