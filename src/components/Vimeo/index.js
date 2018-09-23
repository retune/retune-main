import * as React from 'react'

const Vimeo = ({ id, width = '500', height = '281' }) => (
  <React.Fragment>
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
        title="Video"
        src={`https://player.vimeo.com/video/${id}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
    <script src="https://player.vimeo.com/api/player.js" />
  </React.Fragment>
)

export default Vimeo
