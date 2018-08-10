import * as React from 'react'
import {
  CarouselProvider,
  Dot,
  DotGroup,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

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
  <CarouselProvider
    naturalSlideWidth={1440}
    naturalSlideHeight={755}
    totalSlides={quotes.length}
  >
    <section className={styles.Quotes}>
      <Slider>
        {quotes.map((quote, index) => (
          <Slide key={quote.id} index={index}>
            <Quote quote={quote} />
          </Slide>
        ))}
      </Slider>

      <DotGroup className={styles.DotGroup} />
    </section>
  </CarouselProvider>
)

export default Quotes
