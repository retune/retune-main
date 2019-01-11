import * as React from 'react'
import classnames from 'classnames'

import { Heading } from '../Header'
import Markdown from '../Markdown'

import styles from './index.module.css'

const Section = ({
  className = '',
  title,
  info,
  children,
  content = null,
  gridArea = '',
}) => (
  <section className={classnames(styles.section, className, styles[gridArea])}>
    <h2 className="mql-xl">{title}</h2>
    <div className={classnames(styles.sectionContent, 'mql-xs')}>
      {content || children}
    </div>
  </section>
)

const Page = ({ title, info, deTitle, deContent, enTitle, enContent }) => (
  <div className={styles.Page}>
    <Heading className={styles.heading} title={title} />
    <div className={classnames(styles.info, 'mql-m mqs-s')}>
      <Markdown source={info} />
    </div>

    <Section title={deTitle} gridArea="left">
      <Markdown source={deContent} />
    </Section>

    <Section title={enTitle} gridArea="right">
      <Markdown source={enContent} />
    </Section>
  </div>
)

export default Page
