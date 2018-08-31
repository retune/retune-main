import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'

import { Heading } from '../components/Header'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'

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

const Service = ({ className = '', service }) => (
  <section className={classnames(styles.Service, className)}>
    <h2 className={classnames(styles.name, 'mql-xxl')}>{service.name}</h2>

    <div className={classnames(styles.description, 'mql-l serif')}>
      <Markdown source={service.description} />
    </div>

    {service.clients && (
      <div className={classnames(styles.clients, 'mql-s mono')}>
        <DashedUnderlineHeading className="mql-s" text="Who we did this for" />
        <Markdown source={service.clients} />
      </div>
    )}
  </section>
)

const Title = (
  <React.Fragment>
    <span className={styles.break}>Services</span> Case Studies
  </React.Fragment>
)

const ServicesPage = ({ data }) => {
  const services = mergeResultsIntoItems(data.services)

  return (
    <Layout
      className={styles.Services}
      pageTitle="Retune Services — Full Range of Contemporary Solutions "
    >
      <Heading className={styles.heading} title={Title} />
      <div className={styles.info}>
        <p>We love our clients.</p>
        <p>Our clients love us.</p>
        <p>Call us.</p>
        <p>We‘ll do something together</p>
      </div>

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
          name
          description
          clients
        }
      }
    }
  }
`

export default ServicesPage
