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
    <span>Retune</span> Festivals
  </React.Fragment>
)

const FestivalsPage = ({ data, pageContext }) => {
  const selectedId = pageContext.id
  const info = get(data.page, 'edges[0].node.data.info.html')
  const images = get(data.page, 'edges[0].node.data.images').map(
    ({ image }) => image
  )
  const festivals = splitEventsIntoPastAndFuture(
    mergeResultsIntoItems(data.festivals)
  )
  const breadcrumbs = [
    {
      name: 'Festivals',
      to: eventPath({ type: 'festival' }),
    },
  ]

  const upcoming = festivals.future[0] ? (
    <Hero event={festivals.future[0]} />
  ) : null

  const openFirstArchiveItem = upcoming == null
  let defaultItem

  if (selectedId != null) {
    defaultItem = selectedId
  } else if (openFirstArchiveItem) {
    defaultItem = festivals.past[0].id
  }

  const archive = (
    <Group>
      {({ onToggle, currentlyOpen = defaultItem, initialRender }) => (
        <div className={styles.Archive}>
          {festivals.past.map((event, index) => (
            <Festival
              key={event.id}
              scrollIntoViewOnMount={
                initialRender && selectedId && event.id === currentlyOpen
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
      pageTitle="Retune Festival — Art, Design and Technology"
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
          <Video videoURL="https://retune.de/festivals-bg.mp4" />
        </div>
      </div>

      <div>
        {upcoming}
        {archive}
      </div>

      <div className={classnames(styles.outro, 'mql-m')}>
        <p>
          Are you interested in becoming a Retune Festival partner or collaborator? Feel free to
          contact us: hey /at/ retune.de
        </p>

        <p>
          For more info and updates sign up for our{' '}
          <a href="http://eepurl.com/oAiGz">newsletter</a>, join us on{' '}
          <a href="https://retune-community.slack.com">Slack</a>, and follow us
          on <a href="https://twitter.com/retuneberlin"> Twitter</a>,
          <a href="http://instagram.com/retuneberlin"> Instagram</a>,
          <a href="https://www.facebook.com/retuneberlin"> Facebook</a> and
          <a href="https://www.flickr.com/photos/retuneconference/"> Flickr</a>.
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
              html
            }
            startdate
            ticketurl {
              text
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
