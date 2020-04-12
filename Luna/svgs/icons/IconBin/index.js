import React from 'react'
import PropTypes from 'prop-types'

const IconBin = props => {
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
      viewBox="0 0 16 16"
      {...svgAttributes}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M9.54 0c.236 0 .471.121.623.33l.79 1.145h4.29c.404 0 .74.347.757.763 0 .417-.336.764-.74.764h-.64l-1.278 11.02C13.208 15.15 12.282 16 11.172 16H4.828c-1.11 0-2.036-.85-2.17-1.978l-1.28-11.02H.74c-.404 0-.74-.347-.74-.764 0-.416.336-.763.74-.763h4.291L5.821.33A.737.737 0 016.445 0zm3.583 3.003H2.877l1.261 10.83a.702.702 0 00.69.641h6.343a.701.701 0 00.69-.642l1.262-10.829zM5.956 4.548a.77.77 0 01.791.711l.471 6.977a.765.765 0 01-.69.815h-.05c-.388 0-.707-.312-.74-.711l-.472-6.977a.765.765 0 01.69-.815zm4.071-.018c.404.034.724.4.69.815l-.471 6.977c-.034.4-.353.712-.74.712h-.05c-.421-.018-.724-.382-.69-.816l.47-6.976a.768.768 0 01.791-.712z"
      />
    </svg>
  )
}

IconBin.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  responsive: PropTypes.bool,
}

IconBin.defaultProps = {
  width: 16,
  height: 16,
  fill: 'currentColor',
  responsive: false,
}

export { IconBin }
