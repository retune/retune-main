import * as React from 'react'

import Facebook from './Facebook'
import Instagram from './Instagram'
import Twitter from './Twitter'

import config from '../../../gatsby-config'

import styles from './index.module.css'

const Social = ({ theme = 'light' }) => {
  const colour = theme === 'light' ? 'black' : 'white'
  const { twitter, facebook, instagram } = config.siteMetadata
  return (
    <div className={styles.Social}>
      <a href={twitter}>
        <Twitter colour={colour} />
      </a>

      <a href={facebook}>
        <Facebook colour={colour} />
      </a>

      <a href={instagram}>
        <Instagram colour={colour} />
      </a>
    </div>
  )
}

export default Social
