import React from 'react'
import classnames from 'classnames'

import Layout from '../components/Layout'

const Lorem = ({ className }) => (
  <p className={className} style={{ maxWidth: '50vw' }}>
    <code>{className}</code>
    <br />
    This is a paragraph of text with the classes "{className}" that is long
    enough to spread over a few lines{' '}
    <a className="link" href="">
      including an empty link
    </a>
    . Reduce the viewport width to see the small sizes kick in.
  </p>
)

const FontSizes = ({ className = '', title }) => (
  <React.Fragment>
    <h3 className="mql-xl mqs-xl">{title}</h3>
    <Lorem className={classnames(className, 'mql-xxl')} />
    <Lorem className={classnames(className, 'mql-xl mqs-xl')} />
    <Lorem className={classnames(className, 'mql-l mqs-l')} />
    <Lorem className={classnames(className, 'mql-m mqs-m')} />
    <Lorem className={classnames(className, 'mql-s mqs-s')} />
    <Lorem className={classnames(className, 'mql-xs mqs-xs')} />
  </React.Fragment>
)

const DesignSystem = () => {
  return (
    <Layout breadcrumbs={[]} className="" pageTitle="Page title">
      <div style={{ margin: '50px' }}>
        <h1>Design System</h1>
        <h2>Typography</h2>

        <FontSizes title="Sans-serif" />
        <FontSizes title="Serif" className="serif" />
        <FontSizes title="Mono" className="mono" />
      </div>
    </Layout>
  )
}

export default DesignSystem
