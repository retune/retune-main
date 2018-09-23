import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'

import Header, { Heading, Info } from '../components/Header'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import PhotoGallery from '../components/PhotoGallery'
import Vimeo from '../components/Vimeo'

import { servicesPath } from '../lib/urls'
import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'

import styles from './services.module.css'

const DashedUnderlineHeading = ({ className, text }) => (
  <h3
    className={classnames(styles.DashedUnderlineHeading, className)}
    data-underline-template={text.replace(/./g, '-')}
  >
    {text}
  </h3>
)

const Service = ({ className = '', service }) => {
  let video = null

  if (service.videoId) {
    video = <Vimeo id={service.videoId} />
  } else if (service.videoEmbed) {
    video = <Markdown source={service.videoEmbed} />
  }

  return (
    <section
      data-layout-id={service.layoutId || '1a'}
      className={classnames(styles.Service, className)}
    >
      <h2 id={service.id} className={classnames(styles.name, 'mql-xxl mqs-xl')}>
        {service.name}
      </h2>

      <div className={classnames(styles.description, 'mql-l msq-m serif')}>
        <Markdown source={service.description} />
      </div>

      <div className={classnames(styles.photoGallery)}>
        {service.photoGallery && (
          <PhotoGallery images={service.photoGallery} caption={false} />
        )}
      </div>

      {video && <div className={classnames(styles.video)}>{video}</div>}

      {service.clients && (
        <div className={classnames(styles.clients, 'mql-s mqs-m mono')}>
          <Markdown source={service.clients} />
        </div>
      )}
    </section>
  )
}

const Title = (
  <React.Fragment>
    <span className={styles.break}>Services</span> Case Studies
  </React.Fragment>
)

const infoContent = (
  <div className={styles.info}>
    <p>We love our clients.</p>
    <p>Our clients love us.</p>
    <p>Call us.</p>
    <p>We‘ll do something together</p>
  </div>
)

const ServicesPage = ({ data }) => {
  const services = mergeResultsIntoItems(data.services)
  const breadcrumbs = [
    {
      name: 'Services',
      to: servicesPath(),
    },
  ]

  return (
    <Layout
      breadcrumbs={breadcrumbs}
      className={styles.Services}
      pageTitle="Retune Services — Full Range of Contemporary Solutions "
    >
      <Header
        className={styles.header}
        heading={<Heading className={styles.heading} title={Title} />}
        info={<Info>{infoContent}</Info>}
      />

      <div className={styles.content}>
        {services.map(service => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    services: allService {
      edges {
        node {
          id
          layoutId
          name
          description
          clients
          videoId
          videoEmbed
          photoGallery {
            meta {
              title
            }
            localFile {
              publicURL
              ...fluidImage
            }
          }
        }
      }
    }
  }
`

export default ServicesPage
