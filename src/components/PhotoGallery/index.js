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

class StatefulPhotoGallery extends React.Component {
  carouselProviderRef = React.createRef()

  state = { thumbnailCurrentSlide: null }

  componentDidMount() {
    this.withStore(store => {
      store.subscribe(this.storeDidChange)
      this.storeDidChange()
    })
  }

  componentWillUnmount() {
    this.withStore(store => {
      store.unsubscribe(this.storeDidChange)
    })
  }

  // Executes a function on if the carousel store
  // exists
  withStore = fn => {
    const store = this.getCarouselStore()

    if (store) {
      fn(store)
    }
  }

  getCarouselStore = () => {
    if (this.carouselProviderRef.current) {
      return this.carouselProviderRef.current.getStore()
    }
  }

  storeDidChange = () => {
    this.withStore(store => {
      this.setState({
        thumbnailCurrentSlide: store.state.currentSlide,
      })
    })
  }

  setCurrentSlide = index => {
    this.withStore(store => {
      store.setStoreState({
        currentSlide: index,
      })
    })
  }

  render() {
    return (
      <PhotoGallery
        {...this.props}
        onThumbnailSelected={this.setCurrentSlide}
        currentThumbnailIndex={this.state.thumbnailCurrentSlide}
        providerRef={this.carouselProviderRef}
      />
    )
  }
}

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

const PhotoGalleryWrapper = ({ caption = true, images }) =>
  images && images.length > 1 ? (
    <StatefulPhotoGallery caption={caption} images={images} />
  ) : (
    <div className={styles.container}>
      <Image source={images[0]} />
    </div>
  )

export default PhotoGalleryWrapper
