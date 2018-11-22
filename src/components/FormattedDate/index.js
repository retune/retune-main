import { DateTime } from 'luxon'

export const formatDate = date => DateTime.fromISO(date).toFormat('dd.LL.yyyy')

const FormattedDate = ({ date, time }) => formatDate(date)

export default FormattedDate
