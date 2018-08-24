import React from 'react'

import close from './close.svg'
import disclosureArrow from './disclosure-arrow.svg'

const icons = {
  close,
  disclosureArrow,
}

const Icon = ({ className = '', type }) => (
  <img className={className} src={icons[type]} />
)

export default Icon
