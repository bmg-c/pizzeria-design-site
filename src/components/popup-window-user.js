import React, { useEffect, useRef } from "react";

import PropTypes from "prop-types";

import "./popup-window-user.css";

const PopupWindowUser = (props) => {
  useEffect(() => {
    const handleClick = (event) => {
      const el = document.getElementById("popup-window-user");
      if (!el.contains(event.target)) {
        el.style.display = "none";
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <div
      className="popup-window-user-container"
      id="popup-window-user"
      style={props.style}
    >
      <div
        className="popup-window-user-container1"
        onClick={() => {
          document.location.href = "/personal";
        }}
        style={{ cursor: "pointer" }}
      >
        <span className="popup-window-user-text">Личные данные</span>
      </div>
      <div
        className="popup-window-user-container2"
        onClick={() => {
          document.location.href = "/order-history";
        }}
        style={{ cursor: "pointer" }}
      >
        <span className="popup-window-user-text1">История заказов</span>
      </div>
      <div className="popup-window-user-container3">
        <div className="popup-window-user-container4"></div>
      </div>
      <div
        className="popup-window-user-container5"
        onClick={() => {
          document.location.href = document.location.href;
        }}
        style={{ cursor: "pointer" }}
      >
        <span className="popup-window-user-text2">Выход</span>
      </div>
    </div>
  );
};

PopupWindowUser.defaultProps = {
  style: {},
};

PopupWindowUser.propTypes = {
  style: PropTypes.object,
};

export default PopupWindowUser;
