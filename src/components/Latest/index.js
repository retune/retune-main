import * as React from 'react'
import classnames from 'classnames'

import Item from './Item'

import styles from './index.module.css'

const Latest = ({
  parentUrl,
  theme = 'dark',
  items,
  className = '',
  innerClassName = '',
}) => (
  <div className={classnames(styles.Latest, styles[theme], className)}>
    <div className={classnames(styles.Inner, innerClassName)}>
      {items.map(item => (
        <Item key={item.id} theme={theme} parentUrl={parentUrl} {...item} />
      ))}
    </div>
  </div>
)

export default Latest
