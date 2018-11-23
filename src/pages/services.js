import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'

import Header, { Heading, Info } from '../components/Header'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import PhotoGallery from '../components/PhotoGallery'
import Vimeo from '../components/Vimeo'

import { servicesPath, slugify } from '../lib/urls'
import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'

import styles from './services.module.css'

/*
const DashedUnderlineHeading = ({ className, text }) => (
  <h3
    className={classnames(styles.DashedUnderlineHeading, className)}
    data-underline-template={text.replace(/./g, '-')}
  >
    {text}
  </h3>
)
*/

const Service = React.forwardRef(({ className = '', service }, ref) => {
  let video = null

  if (service.videoid) {
    video = <Vimeo id={service.videoid} />
  } else if (service.videoembed) {
    video = <Markdown source={service.videoembed} />
  }

  return (
    <section
      id={slugify(service)}
      ref={ref}
      data-layout-id={service.layoutid || '1a'}
      className={classnames(styles.Service, className)}
    >
      <h2 className={classnames(styles.name, 'mql-xxl mqs-xl')}>
        {service.name}
      </h2>

      <div className={classnames(styles.description, 'mql-l msq-m serif')}>
        <Markdown source={service.description} />
      </div>

      <div className={classnames(styles.photoGallery)}>
        {service.photogallery && (
          <PhotoGallery images={service.photogallery} caption={false} />
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
})

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

class ServicesPage extends React.Component {
  static scrollPauseTimeMs = 1500

  static prepareServices(props) {
    return mergeResultsIntoItems(props.data.services)
  }

  static getServiceHashes(services) {
    return services.map(s => slugify(s))
  }

  static createHashRefs(hashes) {
    const refs = {}
    hashes.forEach(hash => {
      refs[hash] = React.createRef()
    })

    return refs
  }

  constructor(props) {
    super(props)

    const services = ServicesPage.prepareServices(props)
    const hashes = ServicesPage.getServiceHashes(services)

    this.state = {
      services,
      hashes,
      refs: ServicesPage.createHashRefs(hashes),
    }
  }

  componentDidMount() {
    this.scrollToHash()
  }

  /*
    Prevents the browser's default scroll-to-anchor
    behaviour so that the page intro is visible 
    before smoothly scrolling to the correct service anchor
  */
  scrollToHash() {
    const mastheadHeight = parseInt(
      window
        .getComputedStyle(document.body)
        .getPropertyValue('--retune-masthead-h')
    )
    const hashes = Object.keys(this.state.refs)
    const targetHash = window.location.hash.replace('#', '')

    if (hashes.includes(targetHash)) {
      const ref = this.state.refs[targetHash]

      const stopScroll = evt => {
        window.scrollTo(0, 0)
      }
      window.addEventListener('scroll', stopScroll)
      window.scrollTo(0, 0)

      setTimeout(() => {
        window.removeEventListener('scroll', stopScroll)

        if (ref.current) {
          const { top } = ref.current.getBoundingClientRect()
          window.scrollTo({ top: top - mastheadHeight, behavior: 'smooth' })

          ref.current.querySelector('h2').focus()
        }
      }, ServicesPage.scrollPauseTimeMs)
    }
  }

  render() {
    const { services, refs } = this.state
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
          {services.map(service => {
            const ref = refs[slugify(service)]
            return <Service key={service.id} ref={ref} service={service} />
          })}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    services: allPrismicServices {
      edges {
        node {
          id
          data {
            layoutid
            name {
              text
            }
            description {
              raw {
                type
                text
              }
            }
            clients {
              raw {
                type
                text
              }
            }
            # videoid
            videoembed {
              text
            }
            photogallery {
              #   meta {
              #     title
              #   }
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
  }
`

export default ServicesPage
