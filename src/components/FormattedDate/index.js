import { DateTime, Interval } from 'luxon'

export const formatDate = date => DateTime.fromISO(date).toFormat('dd.LL.yyyy')

const FormattedDate = ({ date, time }) => formatDate(date)

export const FormattedInterval = ({ start, end }) => {
  const s = DateTime.fromISO(start)
  const e = DateTime.fromISO(end)

  const sameDay = s.hasSame(e, 'day')
  const sameMonth = s.hasSame(e, 'month')
  const sameYear = s.hasSame(e, 'year')

  // 12.11.2018 - 13.11.2018 = 12—13.11.2018
  // 12.11.2018 - 13.12.2018 = 12.11—13.12.2018
  // 12.11.2018 - 01.05.2019 = 12.11.2018—01.05.2019
  if (!sameYear) {
    return `${s.toFormat('dd. LL. yyyy')} – ${e.toFormat('dd. LL. yyyy')}`
  } else if (!sameMonth) {
    return `${s.toFormat('dd. LL')} – ${e.toFormat('dd. LL. yyyy')}`
  } else if (!sameDay) {
    return `${s.toFormat('dd')} – ${e.toFormat('dd. LL. yyyy')}`
  }

  return null
}

export default FormattedDate
