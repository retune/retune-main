import groupBy from 'lodash/groupBy'

import isEventInPastOrFuture from './isEventInPastOrFuture'

export default function splitEventsIntoPastAndFuture(events) {
  const split = groupBy(events, event => isEventInPastOrFuture(event))

  if (split.future == null) {
    split.future = []
  }

  if (split.past == null) {
    split.past = []
  }

  return split
}
