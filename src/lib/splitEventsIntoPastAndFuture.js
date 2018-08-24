import groupBy from 'lodash/groupBy'

const endOfDay = () => {
  const today = new Date()
  today.setUTCHours(23)
  today.setUTCMinutes(59)

  return today.valueOf()
}

export default function splitEventsIntoPastAndFuture(events, now = endOfDay()) {
  return groupBy(events, event => {
    const date = new Date(event.startDate).valueOf()
    return date > now ? 'future' : 'past'
  })
}
