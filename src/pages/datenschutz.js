import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'

import { Heading } from '../components/Header'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import Section from '../components/SmallprintSection'

import { privacyPath } from '../lib/urls'
import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'

import styles from './imprint.module.css'

const PrivacyPage = ({ data }) => {
  const region = mergeResultsIntoItems(data.privacy)[0]

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
              raw {
                type
                text
              }
            }
            title_en {
              text
            }
            content_en {
              raw {
                type
                text
              }
            }
          }
        }
      }
    }
  }
`

export default PrivacyPage
