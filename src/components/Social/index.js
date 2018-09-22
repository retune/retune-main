import * as React from 'react'

import Facebook from './Facebook'
import Instagram from './Instagram'
import Twitter from './Twitter'

import styles from './index.module.css'

const Social = ({ theme = 'light' }) => {
  const colour = theme === 'light' ? 'black' : 'white'
  return (
    <div className={styles.Social}>
      <a href="https://www.facebook.com/retuneberlin/">
        <Twitter colour={colour} />
      </a>

      <a href="https://www.instagram.com/retuneberlin/">
        <Facebook colour={colour} />
      </a>

      <a href="https://www.instagram.com/retuneberlin/">
        <Instagram colour={colour} />
      </a>
    </div>
  )
}

export default Social
