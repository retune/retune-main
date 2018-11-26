import * as React from 'react'

import Image from '../Image'

import styles from './index.module.css'

const Promo = ({ url, image }) => {
  const content = <Image source={image} alt="" />

  return (
    <section className={styles.Promo}>
      {url != null ? <a href={url}>{content}</a> : content}
    </section>
  )
}

export default Promo
