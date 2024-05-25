import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className={`banner-container ${props.rootClassName} `}>
      <img alt={props.imageAlt} src={props.imageSrc} className="banner-image" />
    </div>
  )
}

Banner.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Banner.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Banner
