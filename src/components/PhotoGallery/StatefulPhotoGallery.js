import * as React from 'react'

import PhotoGallery from './PhotoGallery'

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

  // Executes a function only if the carousel store
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

export default StatefulPhotoGallery
