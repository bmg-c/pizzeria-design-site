import React, { useState } from "react";

import PropTypes from "prop-types";
import Cookies from "universal-cookie";

import "./button-add-cart.css";

const getCart = () => {
  const cookies = new Cookies();
  let cart = cookies.get("cart", { path: "/" });
  if (cart == undefined) {
    cart = [];
  }
  return cart;
};

const updateInfo = (cart) => {
  const cookies = new Cookies();
  cookies.set("cart", cart, { path: "/" });

  document.querySelectorAll('[id="cartAmount"]').forEach((element) => {
    let totalAmount = 0;
    for (const item of cart) {
      totalAmount += item.amount;
    }
    element.textContent = cart.length;
  });
  let cost = 0;
  for (let i = 0; i < cart.length; i++) {
    cost += cart[i].variantCost * cart[i].amount;
  }
  document.querySelectorAll('[id="cartCost"]').forEach((element) => {
    element.textContent = cost + " ₽";
  });
};

const isInCart = (cart, productName, variantType) => {
  let is_in_cart = false,
    i = 0;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].name == productName && cart[i].variantType == variantType) {
      is_in_cart = true;
      break;
    }
  }
  return [is_in_cart, i];
};

const ButtonAddCart = (props) => {
  const [isClicked, setIsClicked] = useState(
    isInCart(getCart(), props.productName, props.variantType)[0]
  );
  return (
    <div
      onClick={() => {
        let cart = getCart();

        let [is_in_cart, i] = isInCart(
          cart,
          props.productName,
          props.variantType
        );

        if (is_in_cart) {
          cart.splice(i, 1);
          updateInfo(cart);
          setIsClicked(false);
          props.onAddCart(
            "Удалено:",
            props.productName + ", " + props.variantType
          );
        } else {
          cart.push({
            name: props.productName,
            variantType: props.variantType,
            variantCost: props.variantCost,
            amount: 1,
            imageSrc: props.imageSrc,
          });
          updateInfo(cart);
          setIsClicked(true);
          props.onAddCart(
            "Добавлено:",
            props.productName + ", " + props.variantType + " 1x"
          );
        }
      }}
      className={`button-add-cart-container ${props.rootClassName} `}
    >
      {!isClicked && (
        <button
          type="button"
          className="button-add-cart-button"
          style={{ cursor: "pointer" }}
        >
          <img alt="image" src="/plus.svg" className="button-add-cart-image" />
        </button>
      )}
      {isClicked && (
        <button
          type="button"
          className="button-add-cart-button1"
          style={{ cursor: "pointer" }}
        >
          <img
            alt="image"
            src="/minus.svg"
            className="button-add-cart-image1"
          />
        </button>
      )}
    </div>
  );
};

ButtonAddCart.defaultProps = {
  rootClassName: "",
  productName: "",
  variantType: "",
  variantCost: 1000,
  imageSrc: "",
  onAddCart: (title, text) => {},
};

ButtonAddCart.propTypes = {
  rootClassName: PropTypes.string,
  productName: PropTypes.string,
  variantType: PropTypes.string,
  variantCost: PropTypes.number,
  imageSrc: PropTypes.string,
  onAddCart: PropTypes.func,
};

export default ButtonAddCart;
