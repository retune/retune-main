import * as React from 'react'

import FullScreen from './FullScreen'
import PhotoGallery from './PhotoGallery'
import { WithStore } from 'pure-react-carousel'

class StatefulPhotoGallery extends React.Component {
  state = { isFullScreen: false }

  toggleFullScreen = () => {
    this.setState({
      isFullScreen: !this.state.isFullScreen,
    })
  }

  changeSlide = index => {
    this.props.carouselStore.setStoreState({ currentSlide: index })
  }

  render() {
    const gallery = (
      <PhotoGallery
        {...this.props}
        currentIndex={this.props.currentSlide}
        onChangeSlide={this.changeSlide}
        onFullScreenSelected={this.toggleFullScreen}
        isFullScreen={this.state.isFullScreen}
      />
    )

    return this.state.isFullScreen ? (
      <FullScreen onRequestClose={this.toggleFullScreen}>{gallery}</FullScreen>
    ) : (
      gallery
    )
  }
}

export default WithStore(StatefulPhotoGallery, ({ currentSlide }) => ({
  currentSlide,
}))
