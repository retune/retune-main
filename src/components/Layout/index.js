import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Masthead from '../Masthead'
import Footer from '../Footer'

import './index.css'

const Layout = ({
  breadcrumbs,
  className = '',
  children,
  data,
  pageTitle,
  wrapped = true,
}) => (
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
    render={data => (
      <>
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
          />
        )}
        <div className={className}>{children}</div>
        {wrapped && <Footer />}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
