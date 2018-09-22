import React from 'react'

export default ({ colour = 'white' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="27"
    viewBox="0 0 27 27"
  >
    <g
      fill="none"
      fill-rule="evenodd"
      stroke={colour}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      transform="translate(1 1)"
    >
      <rect width="25" height="25" rx="5" />
      <path d="M17.946 11.267a5 5 0 1 1-9.892 1.467 5 5 0 0 1 9.892-1.467z" />
    </g>
  </svg>
)
