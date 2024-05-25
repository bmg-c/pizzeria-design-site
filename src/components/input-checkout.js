import React from 'react'

import PropTypes from 'prop-types'

import './input-checkout.css'

const InputCheckout = (props) => {
  return (
    <div className={`input-checkout-container ${props.rootClassName} `}>
      <div className="input-checkout-container1">
        <span className="input-checkout-text TextStyle1">
          {props.inputName}
        </span>
        <input
          type="text"
          placeholder={props.inputPlaceholder}
          className="input-checkout-textinput TextStyle1"
        />
      </div>
    </div>
  )
}

InputCheckout.defaultProps = {
  rootClassName: '',
  inputName: 'Название поля',
  inputPlaceholder: '',
}

InputCheckout.propTypes = {
  rootClassName: PropTypes.string,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
}

export default InputCheckout
