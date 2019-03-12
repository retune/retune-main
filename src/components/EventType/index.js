import * as React from 'react'

import { labelForEventType } from '../../lib/getType'

const EventType = ({ plural = false, type }) => (
  <React.Fragment>{labelForEventType(type, plural)}</React.Fragment>
)

export default EventType
