import * as React from 'react'
import classnames from 'classnames'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import Image from '../Image'

import Arrow from './Arrow'
import ThumbnailView from './ThumbnailView'
import styles from './index.module.css'

const PhotoGallery = ({
  caption = true,
  currentThumbnailIndex,
  onThumbnailSelected,
  images,
  providerRef,
}) => (
  <CarouselProvider
    className={styles.container}
    naturalSlideWidth={3}
    naturalSlideHeight={2}
    dragEnabled={false}
    totalSlides={images.length}
    ref={providerRef}
  >
    <section className={styles.PhotoGallery}>
      <ButtonBack className={classnames(styles.button, styles.ButtonBack)}>
        <Arrow className={styles.rotate} />
      </ButtonBack>

      <Slider className={styles.Slider}>
        {images.map((image, index) => (
          <Slide key={index} index={index}>
            <Image source={image} />
          </Slide>
        ))}
      </Slider>

      <ButtonNext className={classnames(styles.button, styles.ButtonNext)}>
        <Arrow />
      </ButtonNext>
    </section>

    {caption && <p>Photo Gallery ({images.length} images)</p>}
    <ThumbnailView
      images={images}
      currentSelectionIndex={currentThumbnailIndex}
      onThumbnailSelected={onThumbnailSelected}
    />
  </CarouselProvider>
)

export default PhotoGallery
