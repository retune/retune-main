import * as React from 'react'
import get from 'lodash/get'
import classnames from 'classnames'

import styles from './index.module.css'

const Image = ({ className = '', source, width, height, auto = false }) => {
  const style = auto ? null : { width, height }

  return (
    <div className={classnames(styles.Image, className)} style={style}>
      {get(source, 'localFile.publicURL') ? (
        <img src={get(source, 'localFile.publicURL')} />
      ) : null}
    </div>
  )
}

export default Image
