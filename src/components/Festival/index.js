import * as React from 'react'
import classnames from 'classnames'

import Collapsible from '../Collapsible'
import Flipbook from '../Flipbook'
import FormattedDate from '../FormattedDate'
import Markdown from '../Markdown'
import PhotoGallery from '../PhotoGallery'

import styles from './index.module.css'

const markdownRendererReplacements = {
  heading: props => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h4
      {...props}
      className={classnames(styles.sectionContentHeading, 'sans')}
    />
  ),
  list: ({ ordered, tight, ...props }) => {
    const Component = ordered ? 'ol' : 'ul'

    return (
      <Component {...props} className={classnames(styles.sectionContentList)} />
    )
  },
}

const Section = ({
  title,
  children,
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
      {children}
    </Collapsible>
  )
}

const Festival = ({ collapsible, event, isMain = true }) => (
  <Collapsible
    collapsible={collapsible}
    className={classnames(styles.Festival)}
    contentClassName={classnames(styles.FestivalContent)}
    heading={<span className={styles.title}>{event.title}</span>}
    iconSize="medium"
  >
    <div className={styles.image}>
      {event.mainImages && <Flipbook images={event.mainImages} />}
    </div>

    <div className={classnames(styles.twoCol, styles.meta, 'mql-m')}>
      <div>
        <div>{event.venue}</div>
        <div>{event.location}</div>
        <div>
          <FormattedDate date={event.startdate} />
          &mdash;
          <FormattedDate date={event.endDate} />
        </div>
      </div>

      {event.externalURL ? (
        <div className={classnames(styles.link, 'mql-m')}>
          <span>
            <a className="link" href={event.externalURL}>
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
        >
          {event.photoGallery && <PhotoGallery images={event.photoGallery} />}
        </Section>
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
