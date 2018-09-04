import * as React from 'react'
import classnames from 'classnames'

import Collapsible from '../Collapsible'
import FormattedDate from '../FormattedDate'
import Image from '../Image'
import Markdown from '../Markdown'

import styles from './index.module.css'

const markdownRendererReplacements = {
  heading: props => (
    <h4
      {...props}
      className={classnames(styles.sectionContentHeading, 'sans')}
    />
  ),
  list: props => {
    const Component = props.ordered ? 'ol' : 'ul'

    return (
      <Component {...props} className={classnames(styles.sectionContentList)} />
    )
  },
}

const Section = ({
  title,
  content,
  collapsible = true,
  initiallyCollapsed = undefined,
}) => {
  if (content == null) {
    return null
  }

  return (
    <Collapsible
      collapsible={collapsible}
      contentClassName={classnames(styles.sectionContent, 'mql-xs mono')}
      initiallyCollapsed={initiallyCollapsed}
      heading={title}
      iconType="circle"
      borderSize="small"
      borderColor="blue"
      headingSize="small"
      headingHeight={48}
    >
      {/* All headings should be mapped to h4 */}
      <Markdown source={content} renderers={markdownRendererReplacements} />
    </Collapsible>
  )
}

const Festival = ({ collapsible, event, isMain = true }) => (
  <Collapsible
    collapsible={collapsible}
    className={classnames(styles.Festival)}
    contentClassName={classnames(styles.FestivalContent)}
    heading={<span className={styles.title}>{event.title}</span>}
  >
    <div className={styles.image}>
      <Image source={event.mainImage} />
    </div>

    <div className={classnames(styles.twoCol, styles.meta, 'mql-m')}>
      <div>
        <div>{event.venue}</div>
        <div>{event.location}</div>
        <div>
          <FormattedDate date={event.startDate} />&mdash;<FormattedDate
            date={event.endDate}
          />
        </div>
      </div>

      {event.externalURL ? (
        <div className={classnames(styles.link, 'mql-m')}>
          <span>
            <a href={event.externalURL}>
              {event.externalURL.replace(/^https?:\/\//, '')}
            </a>{' '}
            <span className="mono mql-xs">-&gt;</span>
          </span>
        </div>
      ) : null}
    </div>

    <div className={styles.twoCol}>
      <div>
        <Section
          title="Information"
          content={event.description}
          collapsible={false}
        />
      </div>

      <div>
        <Section
          title="Speakers"
          content={event.speakers}
          initiallyCollapsed={false}
        />
        <Section title="Workshops" content={event.workshops} />
        <Section title="Team" content={event.team} />
        <Section title="Credits" content={event.credits} />
      </div>
    </div>
  </Collapsible>
)

export default Festival
