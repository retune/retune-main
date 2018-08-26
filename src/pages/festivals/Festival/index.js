import * as React from 'react'
import classnames from 'classnames'

import DisclosureArrow from '../../../components/DisclosureArrow'
import HitArea from '../../../components/HitArea'
import Image from '../../../components/Image'
import Markdown from '../../../components/Markdown'

import styles from './index.module.css'

class Festival extends React.Component {
  state = {
    collapsed: true,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { collapsible = true, event } = this.props
    const { collapsed } = this.state

    const header = (
      <h2 className={classnames(styles.title, 'mql-xxl')}>
        {event.title}
        {collapsible && <DisclosureArrow isOpen={!collapsed} />}
      </h2>
    )

    return (
      <section
        className={classnames(
          styles.Festival,
          collapsible ? styles.isCollapsible : styles.isNotCollapsible,
          collapsible && collapsed ? styles.isCollapsed : styles.isNotCollapsed
        )}
      >
        {collapsible ? (
          <HitArea onClick={this.toggle}>{header}</HitArea>
        ) : (
          header
        )}
        <div className={styles.content}>
          <p className={classnames(styles.subtitle, 'mql-xl')}>
            {event.subtitle}
          </p>
          <div className={styles.image}>
            <Image source={event.mainImage} />
          </div>
          <div className={classnames(styles.body, 'mql-l mono')}>
            <Markdown source={event.description} />
          </div>
          <p className={classnames(styles.link, 'mql-xxl')}>
            ({' '}
            <span>
              -&gt; <a href={event.externalURL}>Go to site</a>
            </span>)
          </p>
        </div>
      </section>
    )
  }
}

export default Festival
