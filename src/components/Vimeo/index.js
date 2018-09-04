import * as React from 'react'

const Vimeo = ({ id }) => (
  <iframe
    src={`https://player.vimeo.com/video/${id}`}
    width="500"
    height="281"
    frameborder="0"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
  />
)

export default Vimeo
