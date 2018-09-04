import * as React from 'react'
import classnames from 'classnames'

import Circle from '../Circle'
import DisclosureArrow from '../DisclosureArrow'
import HitArea from '../HitArea'

import styles from './index.module.css'

class Collapsible extends React.Component {
  constructor({ initiallyCollapsed = true }) {
    super()

    this.state = {
      collapsed: initiallyCollapsed,
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const {
      className,
      contentClassName,
      children,
      collapsible = true,
      heading,
      size = 'large',
    } = this.props
    const { collapsed } = this.state

    const icon =
      size === 'large' ? (
        <DisclosureArrow
          className={styles.disclosureArrow}
          isOpen={!collapsed}
        />
      ) : (
        <Circle className={styles.disclosureArrow} isOpen={!collapsed} />
      )

    const header =
      size === 'large' ? (
        <h2 className={classnames(styles.title, styles.isLarge, 'mql-xxl')}>
          {heading}
          {collapsible && icon}
        </h2>
      ) : (
        <h3 className={classnames(styles.title, styles.isSmall, 'mql-m')}>
          {heading}
          {collapsible && icon}
        </h3>
      )

    return (
      <section
        className={classnames(
          styles.Collapsible,
          collapsible ? styles.isCollapsible : styles.isNotCollapsible,
          collapsible && collapsed ? styles.isCollapsed : styles.isNotCollapsed,
          size === 'large' ? styles.isLarge : styles.isSmall,
          className
        )}
      >
        {collapsible ? (
          <HitArea onClick={this.toggle}>{header}</HitArea>
        ) : (
          header
        )}
        <div className={classnames(styles.content, contentClassName)}>
          {children}
        </div>
      </section>
    )
  }
}

export default Collapsible
