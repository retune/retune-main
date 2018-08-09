//@flow
import * as React from 'react'

const labelForEvenType = type => {
  switch (type) {
    case 'studio-visit':
      return 'Studio Visit'
    case 'festival':
      return 'Festival'
    default:
      return 'Event'
  }
}

const EventType = ({ plural = false, type }) => (
  <>
    {labelForEvenType(type)}
    {plural ? 's' : ''}
  </>
)

export default EventType
