import React from 'react'
import { graphql } from 'gatsby'

import ItemPage from '../components/ItemPage'

const EventPage = ({ data }) => {
  console.log(data)
  return <ItemPage item={data.event} />
}

export const query = graphql`
  query($id: String!) {
    event(id: { eq: $id }) {
      id
      type
      title
      subtitle
      summary
      description
      startDate
      ticketURL
      mainImage {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default EventPage
