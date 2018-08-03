import React from 'react'
import { graphql } from 'gatsby'

import Intro from '../components/Intro'
import Latest from '../components/Latest'
import Layout from '../components/Layout'

const mergeResultsIntoItems = results => results.edges.map(edge => edge.node)

const IndexPage = ({ data }) => (
  <Layout>
    <Intro />
    <Latest items={mergeResultsIntoItems(data.events)} />
  </Layout>
)

export const query = graphql`
  {
    homepage: region(name: { eq: "homepage" }) {
      values {
        tagline
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
