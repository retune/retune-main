import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'

import Collapsible from '../components/Collapsible'
import { Heading } from '../components/Header'
import Festival from '../components/Festival'
import Hero from '../components/Festival/Hero'
import Layout from '../components/Layout'

import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'

import styles from './festivals.module.css'

const Title = (
  <React.Fragment>
    <span>Retune</span> Festivals
  </React.Fragment>
)

const FestivalsPage = ({ data }) => {
  const [latest, ...rest] = mergeResultsIntoItems(data.festivals)

  return (
    <Layout
      className={styles.Festivals}
      pageTitle="Retune Festival — Art, Design and Technology"
    >
      <div className={styles.intro}>
        <Heading className={styles.heading} title={Title} />
        <div className={classnames(styles.info, 'mql-m mqs-s')}>
          Creative laboratories at the intersection of art, design and
          technology.
        </div>

        <div className={styles.images} />
      </div>

      <div>
        <Hero event={latest} />
        {rest.map(event => <Festival key={event.id} event={event} />)}
      </div>

      <div className={classnames(styles.outro, 'mql-m')}>
        <p>
          You wanna participate and be part of the next Retune Studio Visits. Or
          you have suggestion for the next Studio we have to visits. Feel free
          to contact us at any time for any problems and related tasks: hey /at/
          retune.de
        </p>

        <p>
          For more info and updates sign up for our newsletter, join us on
          Slack, and follow us on Twitter, Instagram, Facebook and Flickr.
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    festivals: allEvent(
      filter: { type: { eq: "festival" } }
      sort: { order: DESC, fields: [startDate] }
    ) {
      edges {
        node {
          id
          type
          title
          subtitle
          summary
          description
          startDate
          startTime
          endDate
          endTime
          ticketURL
          externalURL
          mainImages {
            localFile {
              publicURL
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
          photoGallery {
            meta {
              title
            }
            localFile {
              publicURL
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
          team
          speakers
          workshops
          venue
          location
        }
      }
    }
  }
`

export default FestivalsPage
