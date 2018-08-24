import React from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'
import times from 'lodash/times'

import { Heading, Info } from '../components/Header'
import Layout from '../components/Layout'

import styles from './about.module.css'

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
  <>
    About<br />Retune
  </>
)

const AboutPage = ({ data }) => {
  return (
    <Layout className={styles.About}>
      <Heading className={styles.heading} title={AboutRetune} />
      <Info className={styles.info} />

      <Section title="Founder">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </Section>

      <Section title="Idea">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </Section>

      <Section title="Network & Partners">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
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

export default AboutPage
