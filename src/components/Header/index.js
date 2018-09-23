import * as React from 'react'
import classnames from 'classnames'

import styles from './index.module.css'

export const Heading = ({ level = '1', title, className = '' }) => {
  const HeadingElement = `h${level}`

  return (
    <HeadingElement
      className={classnames(styles.heading, 'mql-xxl mqs-xl', className)}
    >
      {title}
    </HeadingElement>
  )
}

export const Info = ({ className = '', children }) => (
  <div className={classnames(styles.info, 'mql-m mqs-xl', className)}>
    {children ||
      `Retune is a Berlin-based community platform at the intersection of Art,
    Design and Technology. We organize the biennial Retune Festival, Studio
    Visits and workshops.`}
  </div>
)

const Header = ({ level = '1', heading, info, title, className = '' }) => {
  return (
    <div className={classnames(styles.meta, className)}>
      {heading ? heading : <Heading level={level} title={title} />}
      {info ? info : <Info />}
    </div>
  )
}

export default Header
