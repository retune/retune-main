import * as React from 'react'

import FullScreen from './FullScreen'
import PhotoGallery from './PhotoGallery'

class StatefulPhotoGallery extends React.Component {
  carouselProviderRef = React.createRef()

  state = { thumbnailCurrentSlide: null, isFullScreen: false }

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

  toggleFullScreen = () => {
    this.setState({
      isFullScreen: !this.state.isFullScreen,
    })
  }

  render() {
    const Wrapper = this.state.isFullScreen ? FullScreen : React.Fragment

    return (
      <Wrapper onRequestClose={this.toggleFullScreen}>
        <PhotoGallery
          {...this.props}
          onThumbnailSelected={this.setCurrentSlide}
          onFullScreenSelected={this.toggleFullScreen}
          currentThumbnailIndex={this.state.thumbnailCurrentSlide}
          providerRef={this.carouselProviderRef}
        />
      </Wrapper>
    )
  }
}

export default StatefulPhotoGallery
