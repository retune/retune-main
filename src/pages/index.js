import React from 'react'
import { graphql } from 'gatsby'

import Intro from '../components/Intro'
import Layout from '../components/Layout'

const IndexPage = ({ data }) => (
  <Layout>
    <Intro />
  </Layout>
)

export const query = graphql`
  {
    homepage: region(name: { eq: "homepage" }) {
      values {
        tagline
      }
    }
  }
`

export default IndexPage
