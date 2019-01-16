import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import classnames from 'classnames'

/*
  Imports the Courier Prime typeface
  Available via font-family: 'Courier Prime'
*/
import 'typeface-courier-prime'

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

    const siteTitle = data.site.siteMetadata.title

    return (
      <div className={isNavOpen ? styles.navOpen : styles.navClosed}>
        <Helmet
          title={typeof pageTitle === 'string' ? pageTitle : siteTitle}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
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
          }
        }
      }
    `}
    render={data => <Layout {...props} data={data} />}
  />
)

export default LayoutWithQuery
