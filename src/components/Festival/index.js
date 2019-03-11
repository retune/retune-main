import * as React from 'react'
import classnames from 'classnames'

import Collapsible, { Group } from '../Collapsible'
import Flipbook from '../Flipbook'
import FormattedDate from '../FormattedDate'
import Markdown from '../Markdown'
import PhotoGallery from '../PhotoGallery'

import styles from './index.module.css'

const markdownRendererReplacements = {
  heading: props => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h4 {...props} className={classnames(styles.sectionContentHeading)} />
  ),
  list: ({ ordered, tight, ...props }) => {
    const Component = ordered ? 'ol' : 'ul'

    return (
      <Component {...props} className={classnames(styles.sectionContentList)} />
    )
  },
  html: props => {
    const isVideo = /iframe.*src=.*vimeo.com.*/.test(props.value)
    return (
      <div
        className={isVideo ? 'video' : null}
        dangerouslySetInnerHTML={{ __html: props.value }}
      />
    )
  },
}

const Section = ({
  title,
  children,
  content,
  collapsible = true,
  initiallyCollapsed = undefined,
  onToggle,
  currentlyOpen,
}) => {
  if (content == null) {
    return null
  }

  // const isNowCollapsed = currentlyOpen !== title

  return (
    <Collapsible
      collapsible={collapsible}
      contentClassName={classnames(styles.sectionContent, 'mql-xs mqs-m mono')}
      initiallyCollapsed={initiallyCollapsed}
      heading={title}
      iconType="circle"
      borderSize="small"
      borderColor="blue"
      headingSize="small"
      headingHeight={48}
      //onToggle={isCollapsed => onToggle(title, isCollapsed)}
      //collapsed={isNowCollapsed}
    >
      {/* All headings should be mapped to h4 */}
      <Markdown source={content} renderers={markdownRendererReplacements} />
      {children}
    </Collapsible>
  )
}

const Festival = ({
  collapsible,
  event,
  isOpen = false,
  onToggle,
  scrollIntoViewOnMount = false,
}) => (
  <Collapsible
    collapsible={collapsible}
    className={classnames(styles.Festival)}
    contentClassName={classnames(styles.FestivalContent)}
    heading={<span className={styles.title}>{event.title}</span>}
    iconSize="medium"
    collapsed={!isOpen}
    //initiallyCollapsed={!isOpen}
    onToggle={onToggle}
    scrollIntoViewOnMount={scrollIntoViewOnMount}
  >
    <div className={styles.image}>
      {event.mainimages && (
        <Flipbook images={event.mainimages} aspectRatio="16/9" />
      )}
    </div>

    <div className={classnames(styles.twoCol, styles.meta, 'mql-m')}>
      <div>
        <div>{event.venue}</div>
        <div>{event.location}</div>
        <div>
          <FormattedDate date={event.startdate} />
          {event.enddate && (
            <>
              &mdash;
              <FormattedDate date={event.enddate} />
            </>
          )}
        </div>
      </div>

      {event.externalurl ? (
        <div className={classnames(styles.link, 'mql-m')}>
          <span>
            <a className="link" href={event.externalurl}>
              {event.externalurl.replace(/^https?:\/\//, '')}
            </a>{' '}
            <span className="mono mql-xs">-&gt;</span>
          </span>
        </div>
      ) : null}
    </div>

    <div className={styles.twoCol}>
      <Group>
        {({ onToggle, currentlyOpen = 'Speakers' }) => (
          <React.Fragment>
            <div>
              <Section
                title="Information"
                content={event.description}
                collapsible={false}
              >
                {event.photogallery && (
                  <PhotoGallery images={event.photogallery} />
                )}
              </Section>
            </div>

            <div>
              <Section
                title="Speakers"
                content={event.speakers}
                initiallyCollapsed={false}
                onToggle={onToggle}
                currentlyOpen={currentlyOpen}
              />
              <Section
                title="Workshops"
                content={event.workshops}
                onToggle={onToggle}
                currentlyOpen={currentlyOpen}
              />
              <Section
                title="Team"
                content={event.team}
                onToggle={onToggle}
                currentlyOpen={currentlyOpen}
              />
              <Section
                title="Credits"
                content={event.credits}
                onToggle={onToggle}
                currentlyOpen={currentlyOpen}
              />
            </div>
          </React.Fragment>
        )}
      </Group>
    </div>
  </Collapsible>
)

export default Festival
