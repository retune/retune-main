import * as React from 'react'
import { DateTime } from 'luxon'

import styles from './index.module.css'

const secsUntilMin = () => {
  const d = new Date()
  return 60 - d.getSeconds()
}

export default class Nowcast extends React.Component {
  state = {
    now: null,
  }

  componentDidMount() {
    this.updateTime()
  }

  componentWillUnmount() {
    this.clearNextUpdate()
  }

  updateTime = () => {
    this.setState({
      now: DateTime.local().setZone('Europe/Berlin'),
    })

    this.scheduleNextUpdate()
  }

  scheduleNextUpdate = () => {
    this.timerId = setTimeout(this.updateTime, 1000 * secsUntilMin())
  }

  clearNextUpdate = () => {
    if (this.timerId != null) {
      clearTimeout(this.timerId)
      this.timeId = null
    }
  }

  render() {
    const { now } = this.state
    return now ? (
      <React.Fragment>
        {now.toFormat('HH')}
        <span className={styles.sep}>:</span>
        {now.toFormat('mm MMM dd yyyy')} (Berlin, Germany)
      </React.Fragment>
    ) : null
  }
}
