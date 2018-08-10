import * as React from 'react'
import get from 'lodash/get'
import classnames from 'classnames'

import styles from './index.module.css'

const Image = ({ className = '', source, width, height }) => (
  <div
    className={classnames(styles.Image, className)}
    style={{ width, height }}
  >
    {get(source, 'localFile.publicURL') ? (
      <img src={get(source, 'localFile.publicURL')} />
    ) : null}
  </div>
)

export default Image
