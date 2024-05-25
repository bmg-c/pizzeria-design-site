import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './logo-default.css'

const LogoDefault = (props) => {
  return (
    <div
      id="logo"
      size="big"
      className={`logo-default-container ${props.rootClassName} `}
    >
      <Link to="/" className="">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="logo-default-image"
        />
      </Link>
    </div>
  )
}

LogoDefault.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  imageSrc: '/logo%20default.svg',
}

LogoDefault.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default LogoDefault
