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
      iconType = 'arrow',
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
      large: 'mql-xxl',
      small: 'mql-m',
    }[headingSize]

    const icon =
      iconType === 'arrow' ? (
        <DisclosureArrow
          className={styles.disclosureArrow}
          isOpen={!collapsed}
        />
      ) : (
        <Circle className={styles.disclosureArrow} isOpen={!collapsed} />
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
