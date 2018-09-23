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
  <React.Fragment>
    {labelForEvenType(type)}
    {plural ? 's' : ''}
  </React.Fragment>
)

export default EventType
