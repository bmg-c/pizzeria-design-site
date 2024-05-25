import React from "react";

import PropTypes from "prop-types";

import "./button-medium.css";

const ButtonMedium = (props) => {
  return (
    <div className={`button-medium-container ${props.rootClassName} `}>
      <button
        type="button"
        className="button-medium-button TextStyle1"
        onClick={props.clickFunction}
        style={{ cursor: "pointer" }}
      >
        {props.text}
      </button>
    </div>
  );
};

ButtonMedium.defaultProps = {
  text: "",
  rootClassName: "",
  clickFunction: () => {},
};

ButtonMedium.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  clickFunction: PropTypes.func,
};

export default ButtonMedium;
