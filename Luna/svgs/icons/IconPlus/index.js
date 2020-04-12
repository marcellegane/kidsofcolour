import React from 'react'
import PropTypes from 'prop-types'

const IconPlus = props => {
  const { width, height, fill, responsive } = props

  const svgAttributes = responsive
    ? {}
    : {
        width,
        height,
      }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      {...svgAttributes}
    >
      <path fill="none" stroke={fill} strokeWidth="2" d="M7 0v14M0 7h14" />
    </svg>
  )
}

IconPlus.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  responsive: PropTypes.bool,
}

IconPlus.defaultProps = {
  width: 14,
  height: 14,
  fill: 'currentColor',
  responsive: false,
}

export { IconPlus }
