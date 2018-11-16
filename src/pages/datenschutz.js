import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'
import get from 'lodash/get'
import mapValues from 'lodash/mapValues'

import { Heading } from '../components/Header'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import { privacyPath } from '../lib/urls'

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

const PrivacyPage = ({ data }) => {
  const region = mapValues(
    get(data.privacy, 'edges[0].node.data'),
    value => value.text || value
  )

  const breadcrumbs = [
    {
      name: region.title,
      to: privacyPath(),
    },
  ]

  return (
    <Layout
      breadcrumbs={breadcrumbs}
      className={styles.Imprint}
      pageTitle={region.mastheadtitle}
    >
      <Heading className={styles.heading} title={region.title} />

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
    privacy: allPrismicPrivacypage {
      edges {
        node {
          data {
            mastheadtitle {
              text
            }
            title {
              text
            }
            title_de {
              text
            }
            content_de {
              text
            }
            title_en {
              text
            }
            content_en {
              text
            }
          }
        }
      }
    }
  }
`

export default PrivacyPage
