import * as React from 'react'
import classnames from 'classnames'
import { Link, graphql, StaticQuery } from 'gatsby'

import * as urls from '../../lib/urls'
import mergeResultsIntoItems from '../../lib/mergeResultsIntoItems'

import styles from './index.module.css'

const NavigationLink = ({ children, to }) => (
  <Link className={classnames(styles.NavigationLink)} to={to}>
    {children}
  </Link>
)

const Navigation = ({ open }) => (
  <StaticQuery
    query={graphql`
      {
        services: allService {
          edges {
            node {
              id
              name
              description
              clients
            }
          }
        }
      }
    `}
    render={data => {
      const services = mergeResultsIntoItems(data.services)

      return (
        <nav
          className={classnames(styles.Navigation, {
            [styles.isOpen]: open,
            [styles.isClosed]: !open,
          })}
        >
          <div className={classnames(styles.sections, 'mql-m mqs-xl')}>
            <div className={classnames(styles.section, styles.events)}>
              <h3 className={styles.header}>Events</h3>
              <ul className={classnames(styles.links, 'list-reset')}>
                <li>
                  <NavigationLink to={urls.festivalsPath()}>
                    Retune Festival
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to={urls.studioVisitsPath()}>
                    Studio Visits
                  </NavigationLink>
                </li>
              </ul>
            </div>

            <div className={classnames(styles.section, styles.services)}>
              <h3 className={styles.header}>
                <NavigationLink to={urls.servicesPath()}>
                  Services
                </NavigationLink>
              </h3>
              <ul className={classnames(styles.links, 'list-reset')}>
                {services.map(service => (
                  <li key={service.id}>
                    <NavigationLink to={`${urls.servicesPath()}#${service.id}`}>
                      {service.name}
                    </NavigationLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className={classnames(styles.section, styles.information)}>
              <h3 className={styles.header}>Information</h3>
              <ul className={classnames(styles.links, 'list-reset')}>
                <li>
                  <NavigationLink to={urls.aboutPath()}>About</NavigationLink>
                </li>
                <li>
                  <NavigationLink to={urls.newsletterPath()}>
                    Newsletter
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to={urls.imprintPath()}>
                    Imprint
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to={urls.privacyPath()}>
                    Privacy
                  </NavigationLink>
                </li>
              </ul>
            </div>
          </div>

          <p className={classnames('mono mql-xs', styles.legal)}>
            Retune Creative Technology GmbH, Glogauer Str. 21, 10999 Berlin —
            webmaster@retune.de
          </p>
        </nav>
      )
    }}
  />
)

export default Navigation
