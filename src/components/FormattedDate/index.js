import * as React from 'react'
import { DateTime } from 'luxon'

export const formatDate = date =>
  DateTime.fromISO(date).toLocaleString(DateTime.DATE_SHORT)

const FormattedDate = ({ date, time }) => formatDate(date)

export default FormattedDate
