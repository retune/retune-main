import * as React from 'react'
import classnames from 'classnames'
import styles from './index.module.css'

const HitArea = ({ className, children, onClick }) => (
  <button className={classnames(styles.HitArea, className)} onClick={onClick}>
    {children}
  </button>
)

export default HitArea
