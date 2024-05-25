import React from "react";

import PropTypes from "prop-types";

import "./add-cart-popup.css";
import Cookies from "universal-cookie";

const AddCartPopup = (props) => {
  const [visible, setVisible] = React.useState(true);
  const [open, setOpen] = React.useState(true);
  const closeModal = () => {
    setOpen(false);
    setVisible(false);
  };
  React.useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 2000);
    setTimeout(() => {
      setVisible(false);
    }, 2300);
  }, [setOpen]);
  return (
    <div
      className="add-cart-popup-container"
      onClick={closeModal}
      style={{
        display: (() => {
          if (visible == true) return "flex";
          else return "none";
        })(),
        opacity: (() => {
          if (open == true) return 1;
          else return 0;
        })(),
      }}
    >
      <span className="add-cart-popup-text TextStyle1">{props.title}</span>
      <span className="add-cart-popup-text1 TextStyle1">{props.text}</span>
    </div>
  );
};

AddCartPopup.defaultProps = {
  title: "Добавлено:",
  text: "Название, вариант",
};

AddCartPopup.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default AddCartPopup;
