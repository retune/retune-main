import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'
import get from 'lodash/get'

import Header, { Heading, Info } from '../components/Header'
import { Group } from '../components/Collapsible'
import Festival from '../components/Festival'
import Hero from '../components/Festival/Hero'
import Layout from '../components/Layout'
import PhotoGallery from '../components/PhotoGallery'
import Video from '../components/Video'

import { festivalsPath } from '../lib/urls'
import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'
import splitEventsIntoPastAndFuture from '../lib/splitEventsIntoPastAndFuture'

import styles from './festivals.module.css'

const Title = (
  <React.Fragment>
    <span>Retune</span> Festivals
  </React.Fragment>
)

const FestivalsPage = ({ data }) => {
  const info = get(data.page, 'edges[0].node.data.info.text')
  const images = get(data.page, 'edges[0].node.data.images').map(
    ({ image }) => image
  )
  const festivals = splitEventsIntoPastAndFuture(
    mergeResultsIntoItems(data.festivals)
  )
  const breadcrumbs = [
    {
      name: 'Festivals',
      to: festivalsPath(),
    },
  ]

  const upcoming = festivals.future[0] ? (
    <Hero event={festivals.future[0]} />
  ) : null

  const openFirstArchiveItem = upcoming == null
  const defaultItem = openFirstArchiveItem ? festivals.past[0].id : undefined
  const archive = (
    <Group>
      {({ onToggle, currentlyOpen = defaultItem }) =>
        festivals.past.map((event, index) => (
          <Festival
            key={event.id}
            event={event}
            isOpen={currentlyOpen === event.id}
            onToggle={isOpen => onToggle(event.id, isOpen)}
          />
        ))
      }
    </Group>
  )

  return (
    <Layout
      breadcrumbs={breadcrumbs}
      className={styles.Festivals}
      pageTitle="Retune Festival — Art, Design and Technology"
    >
      <div className={styles.intro}>
        <Header
          heading={<Heading className={styles.heading} title={Title} />}
          info={<Info>{info}</Info>}
        />

        {/*<div className={styles.images}>
          <PhotoGallery caption={false} images={images} />
          </div>*/}
        <div className={styles.video}>
          <Video />
        </div>
      </div>

      <div>
        {upcoming}
        {archive}
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
    #page: festivalsPage {
    #  info
    #  images {
    #    meta {
    #      title
    #    }
    #    localFile {
    #      publicURL
    #      ...fluidImage
    #    }
    #  }
    #}

    page: allPrismicFestivalspage {
      edges {
        node {
          id
          data {
            info {
              raw {
                type
                text
              }
            }
            images {
              image {
                localFile {
                  publicURL
                  ...fluidImage
                }
              }
            }
          }
        }
      }
    }

    festivals: allPrismicEvents(
      filter: { data: { type: { eq: "festival" } } }
      sort: { order: DESC, fields: [data___startdate] }
    ) {
      edges {
        node {
          id
          data {
            type
            title {
              text
            }
            subtitle {
              text
            }
            summary {
              text
            }
            description {
              raw {
                type
                text
              }
            }
            startdate
            #startTime
            #endDate
            #endTime
            ticketurl {
              url
            }
            externalurl {
              url
            }
            mainimages {
              image {
                localFile {
                  publicURL
                  ...fluidImage
                }
              }
            }
            photogallery {
              #meta {
              #  title
              #}
              image {
                localFile {
                  publicURL
                  ...fluidImage
                }
              }
            }
            team {
              raw {
                type
                text
              }
            }
            speakers {
              raw {
                type
                text
              }
            }
            workshops {
              raw {
                type
                text
              }
            }
            venue {
              text
            }
            location {
              text
            }
          }
        }
      }
    }
  }
`

export default FestivalsPage
