import React from "react";

import PropTypes from "prop-types";

import "./button-navigation.css";

const ButtonNavigation = (props) => {
  return (
    <div
      Text="Link"
      className={`button-navigation-container ${props.rootClassName} `}
    >
      <button
        onClick={props.clickFunction}
        type="button"
        className="button-navigation-button TextStyle1"
        style={{ cursor: "pointer" }}
      >
        {props.text}
      </button>
    </div>
  );
};

ButtonNavigation.defaultProps = {
  rootClassName: "",
  text: "Link",
  clickFunction: () => {},
};

ButtonNavigation.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  clickFunction: PropTypes.func,
};

export default ButtonNavigation;
