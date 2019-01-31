import * as React from 'react'
import classnames from 'classnames'

import Collapsible from '../Collapsible'
import FormattedDate from '../FormattedDate'
import Markdown from '../Markdown'
import PhotoGallery from '../PhotoGallery'

import styles from './index.module.css'

const Heading = ({ event }) => (
  <span className={classnames(styles.heading, 'mql-xl')}>
    <span className={classnames(styles.title, 'serif')}>{event.title}</span>
    <span className={classnames(styles.subtitle)}>{event.subtitle}</span>
  </span>
)

const StudioVisit = ({
  event,
  collapsed,
  onToggle,
  scrollIntoViewOnMount = false,
}) => (
  <Collapsible
    className={classnames(styles.StudioVisit)}
    iconSize="medium"
    heading={<Heading event={event} />}
    borderSize="small"
    borderColor="blue"
    //onToggle={onToggle}
    collapsed={collapsed}
    scrollIntoViewOnMount={scrollIntoViewOnMount}
  >
    <div className={classnames(styles.content, styles.grid)}>
      <div>
        <div className="mql-s mqs-m mono">
          <div className={styles.facts}>
            <p>
              Event Date: <FormattedDate date={event.startdate} />
            </p>
            {event.location && <p>Place: {event.location}</p>}
            {event.visitors && <p>Visitors: {event.visitors}</p>}
          </div>

          {event.description == null ? (
            <p className={classnames(styles.summary)}>{event.summary}</p>
          ) : (
            <div className={classnames(styles.body)}>
              <Markdown source={event.description} />
            </div>
          )}
        </div>

        <p className={classnames(styles.link, 'mql-m mqs-m sans')}>
          <a className="link" href={event.externalurl}>
            Go to studio
          </a>
        </p>
      </div>

      <div className={classnames(styles.image, 'mono')}>
        {event.photogallery && (
          <PhotoGallery images={event.photogallery.map(({ image }) => image)} />
        )}
      </div>
    </div>
  </Collapsible>
)

export default StudioVisit
