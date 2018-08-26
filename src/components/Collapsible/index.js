import * as React from 'react'
import classnames from 'classnames'

import DisclosureArrow from '../DisclosureArrow'
import HitArea from '../HitArea'

import styles from './index.module.css'

class Collapsible extends React.Component {
  state = {
    collapsed: true,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { className, children, collapsible = true, heading } = this.props
    const { collapsed } = this.state

    const header = (
      <h2 className={classnames(styles.title, 'mql-xxl')}>
        {heading}
        {collapsible && (
          <DisclosureArrow
            className={styles.disclosureArrow}
            isOpen={!collapsed}
          />
        )}
      </h2>
    )

    return (
      <section
        className={classnames(
          styles.Collapsible,
          collapsible ? styles.isCollapsible : styles.isNotCollapsible,
          collapsible && collapsed ? styles.isCollapsed : styles.isNotCollapsed,
          className
        )}
      >
        {collapsible ? (
          <HitArea onClick={this.toggle}>{header}</HitArea>
        ) : (
          header
        )}
        <div className={styles.content}>{children}</div>
      </section>
    )
  }
}

export default Collapsible
