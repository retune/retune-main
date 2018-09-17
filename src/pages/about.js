import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'
import times from 'lodash/times'

import { Heading, Info } from '../components/Header'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import { aboutPath } from '../lib/urls'

import styles from './about.module.css'

const breadcrumbs = [
  {
    name: 'About',
    to: aboutPath(),
  },
]

const Section = ({ className = '', title, children, content = null }) => (
  <section className={classnames(styles.section, className)}>
    <h2 className="mql-xl">{title}</h2>
    <div className="mql-m">{content || children}</div>
  </section>
)

const Member = ({ name, role, avatar = '' }) => (
  <div className={classnames(styles.Member, 'mql-s mono')}>
    <img className={styles.avatar} src={avatar} />
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
  const region = data.about.values

  return (
    <Layout
      breadcrumbs={breadcrumbs}
      className={styles.About}
      pageTitle={region.masthead}
    >
      <Heading className={styles.heading} title={AboutRetune} />
      <Info className={styles.info}>{region.info}</Info>

      <Section title={region.section1Title}>
        <Markdown source={region.section1Content} />
      </Section>

      <Section title={region.section2Title}>
        <Markdown source={region.section2Content} />
      </Section>

      <Section title={region.section3Title}>
        <Markdown source={region.section3Content} />
      </Section>

      <Section title={region.section4Title}>
        <Markdown source={region.section4Content} />
      </Section>

      <Section title="Team" className={styles.team}>
        <div className={styles.teamList}>
          <ul className={styles.teamListInner}>
            {times(10, num => (
              <li key={num}>
                <Member
                  name={`Person ${num}`}
                  role="Lorem Ipsium"
                  avatar="http://placekitten.com/300/300"
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
    about: region(name: { eq: "about" }) {
      values {
        title
        section1Title
        section1Content

        section2Title
        section2Content

        section3Title
        section3Content

        section4Title
        section4Content
      }
    }
  }
`

export default AboutPage
