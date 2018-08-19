import * as React from 'react'
import classnames from 'classnames'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'
import isNully from '../../lib/isNully'

import Header from './Header'
import Row from './Row'

import styles from './index.module.css'

const EventArchive = ({ events }) => (
  <section className={styles.EventArchive}>
    <div className={styles.meta}>
      <h2 className={styles.heading}>Archive</h2>
      <p className={styles.info}>
        Retune is a Berlin-based community platform at the intersection of Art,
        Design and Technology. We organize the biennial Retune Festival, Studio
        Visits and workshops.
      </p>
    </div>

    <table className={styles.table}>
      <Header />
      <tbody>{events.map(event => <Row key={event.id} event={event} />)}</tbody>
    </table>
  </section>
)

export default EventArchive
