import * as React from 'react'

import Header from '../Header'

import Row from './Row'
import TableHeader from './Header'

import styles from './index.module.css'

const EventArchive = ({ events }) => (
  <section className={styles.EventArchive}>
    <Header className={styles.meta} level="2" title="Archive" />

    <table className={styles.table}>
      <TableHeader />
      <tbody>
        {events.map(event => (
          <Row key={event.id} event={event} />
        ))}
      </tbody>
    </table>
  </section>
)

export default EventArchive
