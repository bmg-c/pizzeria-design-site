import React from "react";

import PropTypes from "prop-types";

import "./button-small.css";

const ButtonSmall = (props) => {
  return (
    <div className={`button-small-container ${props.rootClassName} `}>
      <button
        type="button"
        className="button-small-button TextStyle1"
        style={{ cursor: "pointer" }}
        onClick={props.clickFunction}
      >
        <img
          alt=""
          src={props.imageSrc}
          className="button-small-image"
          style={{ width: "25px", height: "25px" }}
        />
        <span className="button-small-text TextStyle1Bold">{props.text}</span>
      </button>
    </div>
  );
};

ButtonSmall.defaultProps = {
  text: "",
  imageSrc: "",
  rootClassName: "",
  clickFunction: () => {},
};

ButtonSmall.propTypes = {
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  clickFunction: PropTypes.func,
};

export default ButtonSmall;
