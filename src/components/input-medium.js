import React, { useState } from "react";

import PropTypes from "prop-types";

import "./input-medium.css";

const InputMedium = (props) => {
  const [isWrong, setIsWrong] = useState(false);
  const style = (() => {
    if (props.disabled) {
      return { backgroundColor: "#D3D3D3" };
    }
    return {};
  })();
  return (
    <div className={`input-medium-container ${props.rootClassName} `}>
      {!isWrong && (
        <div className="input-medium-container1">
          <span className="input-medium-text TextStyle1">
            {props.inputName}
          </span>
          <input
            type="text"
            placeholder={props.inputPlaceholder}
            className="input-medium-textinput TextStyle1"
            disabled={props.disabled}
            style={style}
          />
        </div>
      )}
      {isWrong && (
        <div className="input-medium-container2">
          <span className="input-medium-text1 TextStyle1">
            {props.inputName}
          </span>
          <input
            type="text"
            placeholder={props.inputPlaceholder}
            className="input-medium-textinput1 TextStyle1"
            disabled={props.disabled}
            style={style}
          />
        </div>
      )}
    </div>
  );
};

InputMedium.defaultProps = {
  rootClassName: "",
  inputName: "Название поля",
  inputPlaceholder: "",
  disabled: false,
};

InputMedium.propTypes = {
  rootClassName: PropTypes.string,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputMedium;
