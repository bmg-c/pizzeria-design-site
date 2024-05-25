import React from 'react'

import PropTypes from 'prop-types'

import './city-chooser.css'

const CityChooser = (props) => {
  return (
    <div className={`city-chooser-container ${props.rootClassName} `}>
      <select id="city-chooser" name="city" className="city-chooser-select">
        <option value="Option 1" className="">
          Томск
        </option>
        <option value="Option 2" className="">
          Тюмень
        </option>
      </select>
    </div>
  )
}

CityChooser.defaultProps = {
  text: 'Томск',
  rootClassName: '',
}

CityChooser.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CityChooser
