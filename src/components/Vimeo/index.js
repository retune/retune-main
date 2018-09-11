import * as React from 'react'

const Vimeo = ({ id, width = '500', height = '281' }) => (
  <iframe
    src={`https://player.vimeo.com/video/${id}`}
    width={width}
    height={height}
    frameborder="0"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
  />
)

export default Vimeo
