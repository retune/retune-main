import * as React from 'react'
import classnames from 'classnames'
import { Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import Expand from '../Icon/Expand'
import HitArea from '../HitArea'
import Image from '../Image'

import Arrow from './Arrow'
import ThumbnailView from './ThumbnailView'
import styles from './index.module.css'

const PhotoGallery = ({
  caption = true,
  currentIndex,
  onChangeSlide,
  onFullScreenSelected,
  isFullScreen,
  images,
  providerRef,
}) => (
  <div className={styles.container}>
    <section className={classnames(styles.PhotoGallery)}>
      <ButtonBack className={classnames(styles.button, styles.ButtonBack)}>
        <Arrow className={styles.rotate} />
      </ButtonBack>

      <Slider className={styles.Slider}>
        {images.map((image, index) => (
          <Slide key={index} index={index} className={styles.Slide}>
            <Image
              source={image}
              imgStyle={{ objectFit: 'contain' }}
              className={styles.Image}
            />
          </Slide>
        ))}
      </Slider>

      <ButtonNext className={classnames(styles.button, styles.ButtonNext)}>
        <Arrow />
      </ButtonNext>

      {!isFullScreen && (
        <HitArea
          className={classnames(styles.button, styles.ButtonExpand)}
          onClick={onFullScreenSelected}
        >
          <Expand col="white" />
        </HitArea>
      )}
    </section>

    {/* {caption && (
      <p className={styles.Caption}>Photo Gallery ({images.length} images)</p>
    )} */}

    <div className={styles.ThumbnailView}>
      <ThumbnailView
        images={images}
        currentSelectionIndex={currentIndex}
        onThumbnailSelected={onChangeSlide}
      />
    </div>
  </div>
)

export default PhotoGallery
