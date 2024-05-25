import React from "react";

import PropTypes from "prop-types";
import Cookies from "universal-cookie";

import "./add-remove-button.css";

const getCart = () => {
  const cookies = new Cookies();
  let cart = cookies.get("cart", { path: "/" });
  if (cart == undefined) {
    cart = [];
  }
  return cart;
};

const updateInfo = (cart) => {
  let len = cart.length;
  for (let i = 0; i < len; i++) {
    if (cart[i].amount <= 0) {
      document.getElementById(
        cart[i].name + "-" + cart[i].variantType
      ).style.display = "none";
      cart.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  document.getElementById("empty-card").style.display = "none";
  if (len == 0) {
    document.getElementById("empty-card").style.display = "flex";
  }

  for (let i = 0; i < cart.length; i++) {
    document.getElementById(
      cart[i].name + "-" + cart[i].variantType + "-amount"
    ).textContent = cart[i].amount;
    document.getElementById(
      cart[i].name + "-" + cart[i].variantType + "-cost"
    ).textContent = cart[i].amount * cart[i].variantCost + " ₽";
  }
  let cost = 0;
  for (let i = 0; i < cart.length; i++) {
    cost += cart[i].variantCost * cart[i].amount;
  }
  document.getElementById("cartPrice").textContent = cost;
  document.getElementById("pointsGet").textContent = Math.floor(cost / 10);

  document.querySelectorAll('[id="cartAmount"]').forEach((element) => {
    let totalAmount = 0;
    for (const item of cart) {
      totalAmount += item.amount;
    }
    element.textContent = totalAmount;
  });

  const cookies = new Cookies();
  cookies.set("cart", cart, { path: "/" });
};

const getItemPosition = (cart, productName, variantType) => {
  console.log(cart, productName, variantType);
  let is_in_cart = false,
    i = 0;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].name == productName && cart[i].variantType == variantType) {
      is_in_cart = true;
      break;
    }
  }
  if (is_in_cart) return i;
  return -1;
};

const AddRemoveButton = (props) => {
  return (
    <div className={`add-remove-button-container ${props.rootClassName} `}>
      <div className="add-remove-button-container1">
        <button
          type="button"
          className="add-remove-button-button TextStyle1"
          onClick={() => {
            let cart = getCart();
            let pos = getItemPosition(
              cart,
              props.productName,
              props.variantType
            );
            if (pos == -1) {
              return;
            }
            cart[pos].amount -= 1;
            updateInfo(cart);
          }}
        >
          -
        </button>
      </div>
      <div className="add-remove-button-container2">
        <span
          className="add-remove-button-text TextStyle1"
          id={props.productName + "-" + props.variantType + "-amount"}
        >
          {props.amount}
        </span>
      </div>
      <div className="add-remove-button-container3">
        <button
          type="button"
          className="add-remove-button-button1 TextStyle1"
          onClick={() => {
            let cart = getCart();
            let pos = getItemPosition(
              cart,
              props.productName,
              props.variantType
            );
            if (pos == -1) {
              return;
            }
            cart[pos].amount += 1;
            updateInfo(cart);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

AddRemoveButton.defaultProps = {
  rootClassName: "",
  amount: 0,
  productName: "",
  variantType: "",
};

AddRemoveButton.propTypes = {
  rootClassName: PropTypes.string,
  amount: PropTypes.number,
  productName: PropTypes.string,
  variantType: PropTypes.string,
};

export default AddRemoveButton;
