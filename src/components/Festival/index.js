import * as React from 'react'
import classnames from 'classnames'

import Collapsible from '../Collapsible'
import Image from '../Image'
import Markdown from '../Markdown'

import styles from './index.module.css'

const Section = ({ title, content }) => {
  return (
    <Collapsible
      contentClassName={classnames(styles.sectionContent, 'mql-xs mono')}
      heading={<h3 className={classnames('mql-m')}>{title}</h3>}
    >
      {/* All headings should be mapped to h4 */}
      <Markdown
        source={content}
        renderers={{
          heading: props => (
            <h4
              {...props}
              className={classnames(styles.sectionContentHeading, 'sans')}
            />
          ),
        }}
      />
    </Collapsible>
  )
}

const Festival = ({ collapsible, event, isMain = true }) => (
  <Collapsible
    collapsible={collapsible}
    className={classnames(styles.Festival)}
    heading={event.title}
  >
    <p className={classnames(styles.subtitle, 'mql-xl')}>{event.subtitle}</p>
    <div className={styles.image}>
      <Image source={event.mainImage} />
    </div>

    <Section title="Information" content={event.description} />
    <Section title="Speakers" content={event.speakers} />
    <Section title="Workshops" content={event.workshops} />
    <Section title="Team" content={event.team} />
    <Section title="Credits" content={event.credits} />

    <p className={classnames(styles.link, 'mql-xxl')}>
      ({' '}
      <span>
        -&gt; <a href={event.externalURL}>Go to site</a>
      </span>)
    </p>
  </Collapsible>
)

export default Festival
