import * as React from 'react'

import Image from '../Image'

import StatefulPhotoGallery from './StatefulPhotoGallery'
import styles from './index.module.css'

const PhotoGalleryWrapper = ({ caption = true, images }) =>
  images && images.length > 1 ? (
    <StatefulPhotoGallery caption={caption} images={images} />
  ) : (
    <div className={styles.container}>
      <Image source={images[0]} />
    </div>
  )

export default PhotoGalleryWrapper
