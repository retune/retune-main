import * as React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import posed from 'react-pose'

import * as urls from '../../lib/urls'

import Social from '../Social'

import styles from './index.module.css'

const NavigationLink = ({ children, to, colour = 'black' }) => (
  <Link
    className={classnames(styles.NavigationLink, 'link', `link-${colour}`)}
    to={to}
  >
    {children}
  </Link>
)

const ExternalLink = ({ children, to, colour = 'black' }) => (
  <a
    className={classnames(styles.NavigationLink, 'link', `link-${colour}`)}
    href={to}
  >
    {children}
  </a>
)

const isSmallBreakpoint = () => {
  let result = true

  if ('matchMedia' in window) {
    result = window.matchMedia('(max-width: 400px)').matches
  }

  return result
}

const Nav = posed.nav({
  open: {
    height: 'auto',
    'min-height': () => (isSmallBreakpoint() ? '100vh' : undefined),
  },
  closed: {
    height: 0,
    'min-height': () => (isSmallBreakpoint() ? '0vh' : undefined),
  },
})

class Navigation extends React.Component {
  render() {
    const { open, services } = this.props

    return (
      <Nav
        className={classnames(styles.Navigation, {
          [styles.isOpen]: open,
          [styles.isClosed]: !open,
        })}
        pose={open ? 'open' : 'closed'}
      >
        <div className={classnames(styles.sections, 'mql-m mqs-xl')}>
          <div className={classnames(styles.section, styles.events)}>
            <h3 className={styles.header}>Events</h3>
            <ul className={classnames(styles.links, 'list-reset')}>
              <li>
                <NavigationLink to={urls.eventPath({ type: 'festival' })}>
                  Retune Festival
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to={urls.eventPath({ type: 'studio-visit' })}>
                  Studio Visits
                </NavigationLink>
              </li>
              <li>
                <NavigationLink
                  to={urls.eventPath({ type: 'digital-arts-lab' })}
                >
                  Digital Arts Lab
                </NavigationLink>
              </li>
            </ul>
          </div>

          <div className={classnames(styles.section, styles.services)}>
            <h3 className={styles.header}>
              <NavigationLink colour="blue" to={urls.servicesPath()}>
                Services
              </NavigationLink>
            </h3>
            <ul className={classnames(styles.links, 'list-reset')}>
              {services.map(service => (
                <li key={service.id}>
                  <NavigationLink to={`${urls.servicesPath(service)}`}>
                    {service.name}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </div>

          <div className={classnames(styles.section, styles.information)}>
            <h3 className={classnames(styles.header, styles.largeOnly)}>
              Information
            </h3>
            <ul className={classnames(styles.links, 'list-reset')}>
              <li>
                <NavigationLink to={urls.aboutPath()}>About</NavigationLink>
              </li>
              <li>
                <ExternalLink to={urls.newsletterPath()}>
                  Newsletter
                </ExternalLink>
              </li>
              <li className={styles.largeOnly}>
                <NavigationLink to={urls.imprintPath()}>Imprint</NavigationLink>
              </li>
              <li className={styles.largeOnly}>
                <NavigationLink to={urls.privacyPath()}>Privacy</NavigationLink>
              </li>
            </ul>

            <div className={styles.social}>
              <Social />
            </div>
          </div>
        </div>

        <p className={classnames('mono mql-xs mqs-s', styles.legal)}>
          Retune Creative Technology GmbH, Glogauer Str. 21, 10999 Berlin —
          webmaster@retune.de
        </p>

        <div className={styles.mobileInfo}>
          <ul className={classnames('list-reset mqs-m')}>
            <li>
              <NavigationLink to={urls.imprintPath()}>Imprint</NavigationLink>
            </li>
            <li>
              <NavigationLink to={urls.privacyPath()}>Privacy</NavigationLink>
            </li>
          </ul>
        </div>
      </Nav>
    )
  }
}

export default Navigation
