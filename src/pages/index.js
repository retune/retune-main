import React from 'react'
import { graphql } from 'gatsby'

import Intro from '../components/Intro'
import Layout from '../components/Layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>{data.tagline.values.tagline}</h1>
    <Intro />
  </Layout>
)

export const query = graphql`
  {
    tagline: region(name: { eq: "homepage" }) {
      values {
        tagline
      }
    }
  }
`

export default IndexPage
