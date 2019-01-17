import * as React from 'react'
import Granim from 'granim'

import styles from './index.module.css'

class Artwork extends React.Component {
  constructor(props) {
    super(props)

    this.ref = React.createRef()
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

  render() {
    return (
      <div className={styles.Artwork}>
        <canvas ref={this.ref} />
      </div>
    )
  }
}

export default Artwork
