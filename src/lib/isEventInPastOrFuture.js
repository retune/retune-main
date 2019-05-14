const endOfDay = () => {
  const today = new Date()
  today.setUTCHours(23)
  today.setUTCMinutes(59)

  return today.valueOf()
}

module.exports = (event, now = endOfDay()) => {
  const date = new Date(event.startdate).valueOf()
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return date > yesterday ? 'future' : 'past'
}
