import * as React from 'react'
import classnames from 'classnames'

import Image from '../Image'

import styles from './ThumbnailView.module.css'

const ThumbnailViewer = ({
  images,
  currentSelectionIndex = null,
  onThumbnailSelected,
}) => (
  <ul className={styles.container}>
    {images.map((image, index) => (
      <li
        key={index}
        className={classnames(
          styles.item,
          currentSelectionIndex === index
            ? styles.isSelected
            : styles.isNotSelected
        )}
      >
        <button onClick={() => onThumbnailSelected(index)}>
          <div className={styles.Image}>
            <Image source={image} imgStyle={{ objectFit: 'contain' }} />
          </div>
        </button>
      </li>
    ))}
  </ul>
)

export default ThumbnailViewer
