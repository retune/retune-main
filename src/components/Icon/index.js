import React from 'react'

import close from './close.svg'
import disclosureArrow from './disclosure-arrow.svg'

const icons = {
  close,
  disclosureArrow,
}

const alts = {
  close: 'Close',
  disclosureArrow: 'Open',
}

const Icon = ({ className = '', type }) => (
  <img className={className} src={icons[type]} alt={`${alts[type]} icon`} />
)

export default Icon
