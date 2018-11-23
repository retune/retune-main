import * as React from 'react'
import classnames from 'classnames'

import Image from '../Image'

// import Arrow from './Arrow'
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
          <Image source={image} />
        </button>
      </li>
    ))}
  </ul>
)

export default ThumbnailViewer
