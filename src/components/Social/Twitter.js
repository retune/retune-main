import React from 'react'

export default ({ colour = 'white' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="25"
    viewBox="0 0 30 25"
  >
    <path
      fill="none"
      fill-rule="evenodd"
      stroke={colour}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M29 1.013a14.008 14.008 0 0 1-3.996 1.903c-1.57-1.764-4.1-2.383-6.336-1.55-2.235.835-3.7 2.944-3.668 5.283v1.244c-4.543.115-8.843-2-11.455-5.636 0 0-5.09 11.197 6.364 16.174A15.064 15.064 0 0 1 1 20.919c11.455 6.221 25.455 0 25.455-14.308a5.477 5.477 0 0 0-.102-1.032A9.553 9.553 0 0 0 29 1.013z"
    />
  </svg>
)
