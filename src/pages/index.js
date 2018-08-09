import React from 'react'
import { graphql } from 'gatsby'

import Intro from '../components/Intro'
import Latest from '../components/Latest'
import Layout from '../components/Layout'
import Promo from '../components/Promo'

const mergeResultsIntoItems = results => results.edges.map(edge => edge.node)

const IndexPage = ({ data }) => (
  <Layout>
    <Intro />
    <Latest items={mergeResultsIntoItems(data.events)} />
    {data.homepage.values.showPromo && (
      <Promo url={data.homepage.values.promoURL} />
    )}
  </Layout>
)

export const query = graphql`
  {
    homepage: region(name: { eq: "homepage" }) {
      values {
        showPromo
        promoURL
      }
    }
    events: allEvent {
      edges {
        node {
          id
          type
          title
          subtitle
          startDate
          startTime
          endDate
          endTime
          ticketURL
        }
      }
    }
  }
`

export default IndexPage
