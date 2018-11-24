import * as React from 'react'
import classnames from 'classnames'

import Circle from '../Circle'
import DisclosureArrow from '../DisclosureArrow'
import HitArea from '../HitArea'

import styles from './index.module.css'

export { default as Group } from './Group'

class Collapsible extends React.Component {
  constructor({ initiallyCollapsed, collapsed = true, context }) {
    super()

    let initialCollapsedState

    if (initiallyCollapsed != null) {
      initialCollapsedState = initiallyCollapsed
    } else {
      initialCollapsedState = collapsed
    }

    this.state = {
      collapsed: initialCollapsedState,
    }
  }

  toggle = () => {
    const willCollapse = !this.state.collapsed

    this.setState({
      collapsed: willCollapse,
    })

    if (typeof this.props.onToggle === 'function') {
      this.props.onToggle(willCollapse)
    }
  }

  componentDidUpdate({ collapsed }) {
    if (this.props.collapsed !== collapsed) {
      this.setState({
        collapsed: this.props.collapsed,
      })
    }
  }

  render() {
    const {
      className,
      contentClassName,
      children,
      collapsible = true,
      heading,
      iconType = 'arrow',
      iconSize = 'large',
      headingSize = 'large',
      borderSize = 'large',
      borderColor = 'black',
    } = this.props
    const { collapsed } = this.state

    const Heading = {
      large: 'h2',
      small: 'h3',
    }[headingSize]

    const headingClasses = {
      large: 'mql-xl',
      small: 'mql-m',
    }[headingSize]

    const icon =
      iconType === 'arrow' ? (
        <DisclosureArrow
          className={styles.disclosureArrow}
          isOpen={!collapsed}
          size={iconSize}
        />
      ) : (
        <Circle
          className={styles.disclosureArrow}
          isOpen={!collapsed}
          size={iconSize}
        />
      )

    const header = (
      <Heading
        className={classnames(
          styles.title,
          styles[`${headingSize}Heading`],
          headingClasses
        )}
      >
        {heading}
        {collapsible && icon}
      </Heading>
    )

    return (
      <section
        className={classnames(
          styles.Collapsible,
          collapsible ? styles.isCollapsible : styles.isNotCollapsible,
          collapsible && collapsed ? styles.isCollapsed : styles.isNotCollapsed,
          styles[`${borderSize}Border`],
          styles[`${borderColor}Border`],
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
