import * as React from 'react'
import { InView } from 'react-intersection-observer'

import styles from './index.module.css'

//const video = 'https://retune.uber.space/video.mp4'

class Video extends React.Component {
  videoRef = React.createRef()

  componentDidMount() {
    document.addEventListener('visibilitychange', this.visibilityDidChange)
  }

  componentWillUnmount() {
    document.removeEventListener('visibilitychange', this.visibilityDidChange)
  }

  visibilityDidChange = evt => {
    if (document.hidden) {
      this.toggle(false)
    } else {
      this.toggle(true)
    }
  }

  toggle = play => {
    const video = this.videoRef.current
    if (video) {
      if (play && video.paused) {
        video.play()
      } else {
        video.pause()
      }
    }
  }

  render() {
    return (
      <InView onChange={this.toggle}>
        {({ inView, ref }) => (
          <div ref={ref} className={styles.container}>
            <video
              ref={this.videoRef}
              src={this.props.videoURL}
              autoPlay
              loop
              muted
              preload="none"
              playsInline
            />  
          </div>
        )}
      </InView>
    )
  }
}

export default Video
