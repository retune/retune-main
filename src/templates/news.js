import React from 'react'
import { graphql } from 'gatsby'

import ItemPage from '../components/ItemPage'

const NewsPage = ({ data }) => {
  console.log(data)

  return <ItemPage item={data.post} />
}

export const query = graphql`
  query($id: String!) {
    post(id: { eq: $id }) {
      id
      publishedDate
      title
      subtitle
      summary
      body
      mainImage {
        localFile {
          publicURL
          ...fluidImage
        }
      }
    }
  }
`

export default NewsPage
