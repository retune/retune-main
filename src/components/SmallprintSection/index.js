import * as React from 'react'
import classnames from 'classnames'

import styles from './index.module.css'

const Section = ({
  className = '',
  title,
  children,
  content = null,
  gridArea = '',
}) => (
  <section className={classnames(styles.section, className, styles[gridArea])}>
    <h2 className="mql-xl">{title}</h2>
    <div className={classnames(styles.sectionContent, 'mql-xs')}>
      {content || children}
    </div>
  </section>
)

export default Section
