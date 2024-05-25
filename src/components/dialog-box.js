import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import InputMedium from "./input-medium";
import ButtonMedium from "./button-medium";
import "./dialog-box.css";

const DialogBox = (props) => {
  const [isWrong, setIsWrong] = useState(false);
  useEffect(() => {
    const handleClick = (event) => {
      const el = document.getElementById(props.id + "-inside");
      if (!el.contains(event.target)) {
        document.getElementById(props.id).style.display = "none";
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <div
      className={`dialog-box-container ${props.rootClassName} `}
      style={{ display: "none" }}
      id={props.id}
    >
      {!isWrong && (
        <div className="dialog-box-container1" id={props.id + "-inside"}>
          <span className="dialog-box-text TextStyle1Bold">
            {props.titleText}
          </span>
          <InputMedium
            inputName={props.inputName}
            rootClassName="input-medium-root-class-name4"
            inputPlaceholder={props.inputPlaceholder}
            className=""
          ></InputMedium>
          <ButtonMedium
            text={props.buttonText}
            rootClassName="button-medium-root-class-name7"
            className=""
            clickFunction={props.clickFunction}
          ></ButtonMedium>
          <span className="dialog-box-text1 TextStyle1Small">
            {props.smallText}
          </span>
        </div>
      )}
      {isWrong && (
        <div className="dialog-box-container2" id={props.id + "-inside"}>
          <span className="dialog-box-text2 TextStyle1Bold">
            {props.titleText}
          </span>
          <InputMedium
            inputName={props.inputName}
            rootClassName="input-medium-root-class-name5"
            inputPlaceholder={props.inputPlaceholder}
            className=""
          ></InputMedium>
          <div className="dialog-box-container3">
            <ButtonMedium
              text={props.buttonText}
              rootClassName="button-medium-root-class-name8"
              className=""
              clickFunction={props.clickFunction}
            ></ButtonMedium>
            <span className="dialog-box-text3 TextStyle1">
              {props.errorText}
            </span>
          </div>
          <span className="dialog-box-text4 TextStyle1Small">
            {props.smallText}
          </span>
        </div>
      )}
    </div>
  );
};

DialogBox.defaultProps = {
  inputName: "",
  titleText: "Заголовок",
  smallText: "",
  inputPlaceholder: "",
  buttonText: "",
  rootClassName: "",
  errorText: "",
  id: "",
  clickFunction: () => {},
};

DialogBox.propTypes = {
  inputName: PropTypes.string,
  titleText: PropTypes.string,
  smallText: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  buttonText: PropTypes.string,
  rootClassName: PropTypes.string,
  errorText: PropTypes.string,
  id: PropTypes.string,
  clickFunction: PropTypes.func,
};

export default DialogBox;
