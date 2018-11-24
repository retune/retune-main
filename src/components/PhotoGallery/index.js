import * as React from 'react'
import { CarouselProvider } from 'pure-react-carousel'

import Image from '../Image'

import StatefulPhotoGallery from './StatefulPhotoGallery'
import styles from './index.module.css'

const PhotoGalleryWrapper = ({ caption = true, images }) =>
  images && images.length > 1 ? (
    <CarouselProvider
      naturalSlideWidth={3}
      naturalSlideHeight={2}
      dragEnabled={false}
      totalSlides={images.length}
    >
      <StatefulPhotoGallery caption={caption} images={images} />
    </CarouselProvider>
  ) : (
    <div className={styles.container}>
      <Image source={images[0]} />
    </div>
  )

export default PhotoGalleryWrapper
