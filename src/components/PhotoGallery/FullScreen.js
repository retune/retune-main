import * as React from 'react'
import Modal from 'react-modal'

import HitArea from '../HitArea'
import Close from '../Icon/Close'

import styles from './FullScreen.module.css'

const FullScreen = ({ children, onRequestClose }) => {
  return (
    <Modal
      isOpen
      className={styles.modal}
      overlayClassName={styles.overlay}
      onRequestClose={onRequestClose}
    >
      {children}

      <HitArea className={styles.close} onClick={onRequestClose}>
        <Close col="white" />
      </HitArea>
    </Modal>
  )
}

export default FullScreen
