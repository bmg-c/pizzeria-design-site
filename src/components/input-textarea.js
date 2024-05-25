import React from 'react'

import PropTypes from 'prop-types'

import './input-textarea.css'

const InputTextarea = (props) => {
  return (
    <div className={`input-textarea-container ${props.rootClassName} `}>
      <span className="input-textarea-text TextStyle1">{props.inputName}</span>
      <textarea
        cols={props.inputCols}
        rows={props.inputRows}
        placeholder={props.inputPlaceholder}
        className="input-textarea-textarea TextStyle1"
      ></textarea>
    </div>
  )
}

InputTextarea.defaultProps = {
  inputRows: '12',
  inputCols: '84',
  inputPlaceholder: '',
  rootClassName: '',
  inputName: 'Название поля',
}

InputTextarea.propTypes = {
  inputRows: PropTypes.string,
  inputCols: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  rootClassName: PropTypes.string,
  inputName: PropTypes.string,
}

export default InputTextarea
