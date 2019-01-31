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

  componentDidMount() {
    if (this.props.scrollIntoViewOnMount === true) {
      this.scrollIntoView()
    }
  }

  headingRef = React.createRef()

  toggle = () => {
    const willCollapse = !this.state.collapsed

    this.setState({
      collapsed: willCollapse,
    })

    if (typeof this.props.onToggle === 'function') {
      this.props.onToggle(willCollapse)
    }
  }

  scrollIntoView = () => {
    const el = this.headingRef.current
    if (el == null) {
      return
    }

    const mastheadHeight = parseInt(
      window
        .getComputedStyle(document.body)
        .getPropertyValue('--retune-masthead-h')
    )

    const rect = el.getBoundingClientRect()
    const isOffscreen =
      rect.top < 0 || rect.top > document.documentElement.clientHeight

    if (isOffscreen) {
      const top = Math.abs(rect.top) - mastheadHeight
      setTimeout(function() {
        window.scrollTo({ top, behavior: 'smooth' })
      }, 300)
    }
  }

  componentDidUpdate({ collapsed }) {
    const didChange = this.props.collapsed !== collapsed
    const didOpen = !this.props.collapsed

    if (didChange) {
      this.setState(
        {
          collapsed: this.props.collapsed,
        },
        () => {
          if (didOpen) {
            this.scrollIntoView()
          }
        }
      )
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
      large: 'mql-xl mqs-xl',
      small: 'mql-m mqs-l',
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
        ref={this.headingRef}
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
