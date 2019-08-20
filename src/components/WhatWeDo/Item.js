import * as React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

import EventType from '../EventType'
import Image from '../Image'
import isNully from '../../lib/isNully'
import urls from '../../lib/urls'
import { urlPathForEventType } from '../../lib/getType'

import styles from './index.module.css'

const TypeLink = ({ event }) => {
  const type = <EventType plural type={event.type} />
  const typeUrl = urlPathForEventType(event.type)

  return (
    <p className={classnames(styles.type, 'mono mono-before', 'mqs-s mql-xs')}>
      {typeUrl ? (
        <Link className="link link-black" to={typeUrl}>
          {type}
        </Link>
      ) : (
        typeUrl
      )}
    </p>
  )
}

const Event = ({ item, parentUrl, aspectRatio }) => {
  // const url = urls.eventPath(event)
  console.log(item)

  return (
    <li className={styles.Event}>
      <a className={classnames(styles.link, 'link-hit-area')}
        href={item.link.url}
        // state={{ backTo: parentUrl }}
      >
      <Image
        className={styles.image}
        source={item.image}
        aspectRatio={aspectRatio}
      />
      <h4 className={classnames(styles.title, 'mono-after', 'mqs-l mql-m')}>
        <span className="link">
        {item.title.text}
        </span>
      </h4>
      <p className={classnames(styles.summary, 'mqs-m mql-m')}>
        {item.description.text}
      </p>
      </a>
    </li>
  )
}

export default Event
