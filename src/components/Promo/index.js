import * as React from 'react'

import image from '../../assets/promo.svg'
import styles from './index.module.css'

const Promo = ({ url }) => {
  const content = <img src={image} />

  return (
    <section className={styles.Promo}>
      {url != null ? <a href={url}>{content}</a> : content}
    </section>
  )
}

export default Promo
