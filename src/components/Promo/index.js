import * as React from 'react'
import classnames from 'classnames'

import Image from '../Image'

import styles from './index.module.css'

const Promo = ({ url, image }) => {
  const content = <Image source={image} alt="" />

  return (
    <section className={styles.Promo}>
      <h2 className={classnames('mqs-s mql-xs mono', styles.heading)}>
        Latest
      </h2>
      {url != null ? <a href={url}>{content}</a> : content}
    </section>
  )
}

export default Promo
