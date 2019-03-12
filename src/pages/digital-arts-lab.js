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

import { eventPath } from '../lib/urls'
import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'
import splitEventsIntoPastAndFuture from '../lib/splitEventsIntoPastAndFuture'

import styles from './festivals.module.css'

const Title = (
  <React.Fragment>
    <span>Retune</span> Digital Arts Lab
  </React.Fragment>
)

const FestivalsPage = ({ data, pageContext }) => {
  const selectedId = pageContext.id
  const info = get(data.page, 'edges[0].node.data.info.text')
  const labs = splitEventsIntoPastAndFuture(mergeResultsIntoItems(data.labs))
  const breadcrumbs = [
    {
      name: 'Digital Arts Lab',
      to: eventPath({ type: 'digital-arts-lab' }),
    },
  ]

  const upcoming = labs.future[0] ? <Hero event={labs.future[0]} /> : null

  const openFirstArchiveItem = upcoming == null
  let defaultItem

  if (selectedId != null) {
    defaultItem = selectedId
  } else if (openFirstArchiveItem) {
    defaultItem = labs.past[0].id
  }

  const archive = (
    <Group>
      {({ onToggle, currentlyOpen = defaultItem, initialRender }) => (
        <div className={styles.Archive}>
          {labs.past.map((event, index) => (
            <Festival
              key={event.id}
              scrollIntoViewOnMount={
                initialRender && event.id === currentlyOpen
              }
              event={event}
              isOpen={currentlyOpen === event.id}
              //onToggle={isOpen => onToggle(event.id, isOpen)}
            />
          ))}
        </div>
      )}
    </Group>
  )

  return (
    <Layout
      breadcrumbs={breadcrumbs}
      className={styles.Festivals}
      pageTitle="Retune Digital Arts Labs"
    >
      <div className={styles.intro}>
        <Header
          className={styles.header}
          heading={<Heading className={styles.heading} title={Title} />}
          info={<Info>{info}</Info>}
        />

        {/*<div className={styles.images}>
          <PhotoGallery caption={false} images={images} />
          </div>*/}
        <div className={styles.video}>
          <Video videoURL="https://retune.uber.space/festivals-bg.mp4" />
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
    page: allPrismicFestivalspage {
      edges {
        node {
          id
          data {
            info {
              html
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

    labs: allPrismicEvents(
      filter: { data: { type: { eq: "digital-arts-lab" } } }
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
              html
            }
            startdate
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
              image {
                localFile {
                  publicURL
                  ...fluidImage
                }
              }
            }
            team {
              html
            }
            speakers {
              html
            }
            workshops {
              html
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
