import * as React from 'react'

export default ({ col = 'blue' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
  >
    <path
      fill={col}
      d="M14,10.5 L27.5,10.5 L27.5,13.5 L14,13.5 L14,27 L11,27 L11,13.5 L-2.5,13.5 L-2.5,10.5 L11,10.5 L11,-3 L14,-3 L14,10.5 Z"
    />
  </svg>
)
