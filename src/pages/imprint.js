import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'

import { Heading } from '../components/Header'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import { imprintPath } from '../lib/urls'

import styles from './imprint.module.css'

const Section = ({
  className = '',
  title,
  children,
  content = null,
  gridArea = '',
}) => (
  <section className={classnames(styles.section, className, styles[gridArea])}>
    <h2 className="mql-xl">{title}</h2>
    <div className={classnames('mql-xs')}>{content || children}</div>
  </section>
)

const ImprintPage = ({ data }) => {
  const region = data.imprint.values
  const breadcrumbs = [
    {
      name: region.title,
      to: imprintPath(),
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs} className={styles.Imprint}>
      <Heading className={styles.heading} title={region.title} />
      <div className={classnames(styles.info, 'mql-m mqs-s')}>
        <Markdown source={region.info} />
      </div>

      <Section title={region.title_de} gridArea="left">
        <Markdown source={region.content_de} />
      </Section>

      <Section title={region.title_en} gridArea="right">
        <Markdown source={region.content_en} />
      </Section>
    </Layout>
  )
}

export const query = graphql`
  {
    imprint: region(name: { eq: "imprint" }) {
      values {
        title
        info
        content_de
        content_en
      }
    }
  }
`

export default ImprintPage
