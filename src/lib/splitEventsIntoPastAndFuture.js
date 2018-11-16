import groupBy from 'lodash/groupBy'

const endOfDay = () => {
  const today = new Date()
  today.setUTCHours(23)
  today.setUTCMinutes(59)

  return today.valueOf()
}

export default function splitEventsIntoPastAndFuture(events, now = endOfDay()) {
  const split = groupBy(events, event => {
    const date = new Date(event.startdate).valueOf()
    return date > now ? 'future' : 'past'
  })

  if (split.future == null) {
    split.future = []
  }

  if (split.past == null) {
    split.past = []
  }

  return split
}
