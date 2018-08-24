import React from 'react'
import { graphql, Link } from 'gatsby'
import classnames from 'classnames'
import times from 'lodash/times'

import { Heading, Info } from '../components/Header'
import Icon from '../components/Icon'
import Image from '../components/Image'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'

import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'

import styles from './festivals.module.css'

const Title = (
  <React.Fragment>
    <span>Retune</span> Festivals
  </React.Fragment>
)

const DisclosureArrow = () => (
  <Icon className={styles.disclosureArrow} type="disclosureArrow" />
)

const HitArea = ({ children, onClick }) => (
  <button className={styles.HitArea} onClick={onClick}>
    {children}
  </button>
)

class Festival extends React.Component {
  state = {
    collapsed: true,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { collapsible = true, event } = this.props
    const { collapsed } = this.state

    const header = (
      <h2 className={classnames(styles.title, 'mql-xxl')}>
        {event.title}
        {collapsible && <DisclosureArrow />}
      </h2>
    )

    return (
      <section
        className={classnames(
          styles.Festival,
          collapsible ? styles.isCollapsible : styles.isNotCollapsible,
          collapsible && collapsed ? styles.isCollapsed : styles.isNotCollapsed
        )}
      >
        {collapsible ? (
          <HitArea onClick={this.toggle}>{header}</HitArea>
        ) : (
          header
        )}
        <div className={styles.content}>
          <p className={classnames(styles.subtitle, 'mql-xl')}>
            {event.subtitle}
          </p>
          <div className={styles.image}>
            <Image source={event.mainImage} />
          </div>
          <div className={classnames(styles.body, 'mql-l mono')}>
            <Markdown source={event.description} />
          </div>
          <p className={classnames(styles.link, 'mql-xxl')}>
            ({' '}
            <span>
              -&gt; <a href={event.externalURL}>Go to site</a>
            </span>)
          </p>
        </div>
      </section>
    )
  }
}

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

      <Festival collapsible={false} event={latest} />

      {rest.map(event => <Festival key={event.id} event={event} />)}

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
          mainImage {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`

export default FestivalsPage
