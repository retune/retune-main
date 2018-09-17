export default (userAgent = window.navigator.userAgent) => {
  if (/(Macintosh|Linux)/.test(userAgent)) {
    return { root: '/', separator: '/' }
  } else if (/Windows/.test(userAgent)) {
    return { root: 'C:\\', separator: '\\' }
  }

  return { root: '🏠', separator: '>' }
}
