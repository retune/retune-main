import * as React from 'react'
import classnames from 'classnames'

import Markdown from '../Markdown'
import PhotoGallery from '../PhotoGallery'
import Vimeo from '../Vimeo'
import { slugify } from '../../lib/urls'

import styles from './index.module.css'

/*
const DashedUnderlineHeading = ({ className, text }) => (
  <h3
    className={classnames(styles.DashedUnderlineHeading, className)}
    data-underline-template={text.replace(/./g, '-')}
  >
    {text}
  </h3>
)
*/

const Service = React.forwardRef(({ className = '', service }, ref) => {
  let video = null

  if (service.videoid) {
    video = <Vimeo id={service.videoid} />
  } else if (service.videoembed) {
    video = <Markdown source={service.videoembed} />
  }

  return (
    <section
      id={slugify(service)}
      ref={ref}
      data-layout-id={service.layoutid || '1a'}
      className={classnames(styles.Service, className)}
    >
      <h2 className={classnames(styles.name, 'mql-xxl mqs-xl')}>
        {service.name}
      </h2>

      <div className={classnames(styles.description, 'mql-l msq-m serif')}>
        <Markdown source={service.description} />
      </div>

      <div className={classnames(styles.photoGallery)}>
        {service.photogallery && (
          <PhotoGallery images={service.photogallery} caption={false} />
        )}
      </div>

      {video && <div className={classnames(styles.video)}>{video}</div>}

      {service.clients && (
        <div className={classnames(styles.clients, 'mql-s mqs-m mono')}>
          <Markdown source={service.clients} />
        </div>
      )}
    </section>
  )
})

export default Service
