import React from 'react'

import PropTypes from 'prop-types'

import './input-checkout-small.css'

const InputCheckoutSmall = (props) => {
  return (
    <div className={`input-checkout-small-container ${props.rootClassName} `}>
      <div className="input-checkout-small-container1">
        <span className="input-checkout-small-text TextStyle1">
          {props.inputName}
        </span>
        <input
          type="text"
          placeholder={props.inputPlaceholder}
          className="input-checkout-small-textinput TextStyle1"
        />
      </div>
    </div>
  )
}

InputCheckoutSmall.defaultProps = {
  rootClassName: '',
  inputName: 'Название поля',
  inputPlaceholder: '',
}

InputCheckoutSmall.propTypes = {
  rootClassName: PropTypes.string,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
}

export default InputCheckoutSmall
