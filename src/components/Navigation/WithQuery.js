import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import mergeResultsIntoItems from '../../lib/mergeResultsIntoItems'

import Navigation from './Navigation'

const NavigationWithQuery = ({ open }) => (
  <StaticQuery
    query={graphql`
      {
        services: allPrismicServices {
          edges {
            node {
              id
              data {
                name {
                  text
                }
                description {
                  text
                }
                clients {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const services = mergeResultsIntoItems(data.services)

      return <Navigation services={services} open={open} />
    }}
  />
)

export default NavigationWithQuery
