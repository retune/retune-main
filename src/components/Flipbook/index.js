import * as React from 'react'
import classnames from 'classnames'

import Image from '../Image'

import styles from './index.module.css'

class Flipbook extends React.Component {
  delayMs = 3000

  state = {
    current: 0,
  }

  componentDidMount() {
    this.scheduleTick()
  }

  componentWillUnmount() {
    this.cancelTick()
  }

  scheduleTick = () => {
    this.timerId = setTimeout(this.update, this.delayMs)
  }

  cancelTick = () => {
    if (this.timerId != null) {
      clearTimeout(this.timerId)
      this.timerId = null
    }
  }

  update = () => {
    this.setState(
      {
        current: (this.state.current + 1) % this.props.images.length,
      },
      this.scheduleTick
    )
  }

  renderImage = (image, index) => {
    const active =
      index === this.state.current ? styles.isShown : styles.isHidden

    return (
      <div key={index} className={classnames(styles.Image, active)}>
        <Image source={image} aspectRatio={this.props.aspectRatio} />
      </div>
    )
  }

  render() {
    const { images } = this.props
    return <div className={styles.Flipbook}>{images.map(this.renderImage)}</div>
  }
}

export default Flipbook
