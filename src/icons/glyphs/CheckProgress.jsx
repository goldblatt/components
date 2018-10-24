import React from 'react'

const SvgCheckProgress = props => (
  <svg viewBox="0 0 20 20" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M-2-2h24v24H-2z" />
      <path
        d="M11 .03v2.02c4.39.54 7.5 4.53 6.96 8.92-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93C19.5 4.25 15.73.5 11 .03zM9 .06C7.05.25 5.19 1 3.67 2.26L5.1 3.74c1.12-.9 2.47-1.48 3.9-1.68v-2zM2.26 3.67A9.885 9.885 0 0 0 .05 9h2c.19-1.42.75-2.77 1.64-3.9L2.26 3.67zM13.5 6.5l-4.88 4.88L6.5 9.26l-1.06 1.06 3.18 3.18 5.94-5.94L13.5 6.5zM.06 11c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 2.06 11h-2zm5.04 5.37l-1.43 1.37A9.994 9.994 0 0 0 9 20v-2a8.002 8.002 0 0 1-3.9-1.63z"
        fill="#000"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export default SvgCheckProgress
