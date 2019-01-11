import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SmallprintPage from '../components/SmallprintPage'

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
      <SmallprintPage
        title={region.title}
        info={null}
        deTitle={region.title_de}
        deContent={region.content_de}
        enTitle={region.title_en}
        enContent={region.content_en}
      />
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
