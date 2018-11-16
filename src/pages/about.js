import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'
import get from 'lodash/get'
import mapValues from 'lodash/mapValues'

import { Heading, Info } from '../components/Header'
import Image from '../components/Image'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import { aboutPath } from '../lib/urls'
import mergeResultsIntoItems from '../lib/mergeResultsIntoItems'

import styles from './about.module.css'

const breadcrumbs = [
  {
    name: 'About',
    to: aboutPath(),
  },
]

const Section = ({ className = '', title, children, content = null }) => (
  <section className={classnames(styles.section, className)}>
    <h2 className={classnames(styles.sectionHeading, 'mql-xl')}>{title}</h2>
    <div className="mql-m">{content || children}</div>
  </section>
)

const Member = ({ name, role, avatar = '' }) => (
  <div className={classnames(styles.Member, 'mql-s mono')}>
    <Image className={styles.avatar} source={avatar} />
    <span className={styles.name}>{name}</span>
    <span className={styles.role}>{role}</span>
  </div>
)

const AboutRetune = (
  <React.Fragment>
    <span className={styles.break}>About</span> Retune
  </React.Fragment>
)

const AboutPage = ({ data }) => {
  const region = mapValues(
    get(data.about, 'edges[0].node.data', {}),
    value => value.text || value
  )
  const team = data.team ? mergeResultsIntoItems(data.team) : []

  return (
    <Layout
      breadcrumbs={breadcrumbs}
      className={styles.About}
      pageTitle={region.mastheadtitle}
    >
      <Heading className={styles.heading} title={AboutRetune} />
      <Info className={styles.info}>{region.info}</Info>

      <Section title={region.section1title}>
        <Markdown source={region.section1content} />
      </Section>

      <Section title={region.section2title}>
        <Markdown source={region.section2content} />
      </Section>

      <Section title={region.section3title}>
        <Markdown source={region.section3content} />
      </Section>

      <Section title={region.section4title}>
        <Markdown source={region.section4content} />
      </Section>

      <Section title="Team" className={styles.team}>
        <div className={styles.teamList}>
          <ul className={styles.teamListInner}>
            {team.map(member => (
              <li key={member.id}>
                <Member
                  name={member.name}
                  role={member.role}
                  avatar={member.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allPrismicAboutpage {
      edges {
        node {
          data {
            mastheadtitle {
              text
            }

            info {
              text
            }

            section1title {
              text
            }
            section1content {
              text
            }

            section2title {
              text
            }
            section2content {
              text
            }

            section3title {
              text
            }
            section3content {
              text
            }

            section4title {
              text
            }
            section4content {
              text
            }
          }
        }
      }
    }

    #team: allPerson {
    #  edges {
    #    node {
    #      id
    #      name
    #      role
    #      image {
    #        localFile {
    #          publicURL
    #          ...fluidImage
    #        }
    #      }
    #    }
    #  }
    #}
  }
`

export default AboutPage
