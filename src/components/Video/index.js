import * as React from 'react'

import styles from './index.module.css'

const video = 'https://retune.uber.space/video.mp4'

class Video extends React.Component {
  videoRef = React.createRef()

  toggle = () => {
    const video = this.videoRef.current
    if (video) {
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    }
  }

  render() {
    return (
      <div className={styles.container} onClick={this.toggle}>
        <video
          ref={this.videoRef}
          src={video}
          autoPlay
          loop
          muted
          preload="none"
          playsInline
        />
      </div>
    )
  }
}

export default Video
