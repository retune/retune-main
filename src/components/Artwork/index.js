import * as React from 'react'
import classnames from 'classnames'
import Granim from 'granim'

import styles from './index.module.css'

const ArtworkState = {
  playing: 'playing',
  paused: 'paused',
}

class Artwork extends React.Component {
  constructor(props) {
    super(props)

    this.ref = React.createRef()

    this.state = {
      state: ArtworkState.playing,
    }
  }

  componentDidMount() {
    if (this.ref.current == null) {
      return
    }

    this.instance = new Granim({
      element: this.ref.current,
      name: 'granim',
      isPausedWhenNotInView: true,
      opacity: [1, 1],
      direction: 'top-bottom',
      defaultStateName: 'horizontal',
      states: {
        horizontal: {
          gradients: [
            [
              { color: '#000096', pos: 0.07 },
              { color: '#00FCC9', pos: 0.52 },
              { color: '#000597', pos: 1 },
            ],
            [
              { color: '#000096', pos: 0.07 + 0.1 },
              { color: '#00FCC9', pos: 0.52 + 0.1 },
              { color: '#000597', pos: 1 },
            ],
          ],
        },
      },
    })
  }

  componentWillUnmount() {
    this.instance.destroy()
  }

  pause = () => {
    this.instance.pause()

    this.setState(() => ({
      state: ArtworkState.paused,
    }))
  }

  play = () => {
    this.instance.play()

    this.setState(() => ({
      state: ArtworkState.playing,
    }))
  }

  togglePlayState = () => {
    this.isPlaying() ? this.pause() : this.play()
  }

  isPlaying = () => this.state.state === ArtworkState.playing

  render() {
    const controls = (
      <div className={classnames(styles.info, 'mono mql-xs mqs-xs')}>
        <p className={styles.author}>
          Background gallery:{' '}
          <span className={styles.name}>Artwork by Retune</span>
        </p>
        <p
          onClick={this.togglePlayState}
          className={classnames(styles.toggleState, 'link link-white')}
        >
          {this.isPlaying() ? 'pause' : 'play'}
        </p>
      </div>
    )

    return (
      <div className={styles.Artwork}>
        <canvas ref={this.ref} />
        {this.props.children}
        {controls}
      </div>
    )
  }
}

export default Artwork
