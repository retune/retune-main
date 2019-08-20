import * as React from 'react'
import classnames from 'classnames'

import Item from './Item'

import styles from './index.module.css'

export default ({ items, parentUrl }) => (
  <section className={styles.Featured}>
    <h3 className={classnames(styles.heading, 'mql-xxl mqs-l')}>What we do</h3>
    <ul className={styles.list}>
      
      {items.map((item, index) => (
        // console.log(item.primary)
        <Item
          key={item.id}
          item={item.primary}
          parentUrl={parentUrl}
          aspectRatio={index === 0 ? '2.2/1' : '3/2'}
        />
      ))}
    </ul>
  </section>
)
