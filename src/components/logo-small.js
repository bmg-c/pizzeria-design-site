import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './logo-small.css'

const LogoSmall = (props) => {
  return (
    <div className={`logo-small-container ${props.rootClassName} `}>
      <Link to="/" className="logo-small-navlink">
        <img alt="image" src="/logo%20small.svg" className="logo-small-image" />
      </Link>
    </div>
  )
}

LogoSmall.defaultProps = {
  rootClassName: '',
}

LogoSmall.propTypes = {
  rootClassName: PropTypes.string,
}

export default LogoSmall
