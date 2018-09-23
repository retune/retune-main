import React from 'react'

export default ({ colour = 'white' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="27"
    viewBox="0 0 15 27"
  >
    <path
      fill="none"
      fill-rule="evenodd"
      stroke={colour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 1h-3.545c-3.264 0-5.91 2.798-5.91 6.25V11H1v5h3.545v10h4.728V16h3.545L14 11H9.273V7.25c0-.69.529-1.25 1.182-1.25H14V1z"
    />
  </svg>
)
