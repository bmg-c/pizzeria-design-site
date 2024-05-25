import React from 'react'

import PropTypes from 'prop-types'

import './red-icon.css'

const RedIcon = (props) => {
  return (
    <div className={`red-icon-container ${props.rootClassName} `}>
      <img alt=" " src={props.imageSrc} className="red-icon-image" />
    </div>
  )
}

RedIcon.defaultProps = {
  imageSrc: '',
  rootClassName: '',
}

RedIcon.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default RedIcon
