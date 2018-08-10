import * as React from 'react'

import styles from './index.module.css'

const Quote = ({ quote }) => (
  <div className={styles.Quote}>
    <blockquote className={styles.quote}>{quote.text}</blockquote>
    <cite className={styles.citation}>
      <span className={styles.name}>{quote.name}</span> &mdash;{' '}
      <span className={styles.position}>{quote.position}</span>
    </cite>
  </div>
)

const Quotes = ({ quotes }) => (
  <section className={styles.Quotes}>
    {quotes.map(quote => <Quote key={quote.id} quote={quote} />)}
  </section>
)

export default Quotes
