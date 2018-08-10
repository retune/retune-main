import * as React from 'react'

import EventType from '../EventType'
import FormattedDate from '../FormattedDate'
import isNully from '../../lib/isNully'

import styles from './index.module.css'

const Header = () => (
  <thead>
    <tr>
      <th>Type</th>
      <th>Title</th>
      <th>Date</th>
      <th />
    </tr>
  </thead>
)
const Row = ({ event }) => (
  <tr onClick={() => console.log('navigate')}>
    <td className={styles.type}>
      <EventType type={event.type} />
    </td>
    <td className={styles.title}>
      {event.title}
      {isNully(event.subtitle) ? '' : ': '}
      {event.subtitle}
    </td>
    <td className={styles.date}>
      <FormattedDate date={event.startDate} />
    </td>
    <td className={styles.link}>
      <a href="">-&gt;</a>
    </td>
  </tr>
)

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
