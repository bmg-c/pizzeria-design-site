import React from "react";

import PropTypes from "prop-types";
import Cookies from "universal-cookie";

import AddRemoveButton from "./add-remove-button";
import "./cart-card.css";
import ProductVariant from "./product-variant";

const getCart = () => {
  const cookies = new Cookies();
  let cart = cookies.get("cart", { path: "/" });
  if (cart == undefined) {
    cart = [];
  }
  return cart;
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

const CartCard = (props) => {
  if (props.variantType == "empty") {
    console.log(props.productName);
    return (
      <div
        className={`cart-card-container ${props.rootClassName} `}
        id={"empty-card"}
        style={{ display: props.productName }}
      >
        <div className="cart-card-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="cart-card-image"
          />
          <div className="cart-card-container2">
            <span className="cart-card-text TextStyle1">
              {"Пусто! Вы можете добавить товары в каталоге"}
            </span>
          </div>
        </div>
        <div className="cart-card-container3">
          <AddRemoveButton
            rootClassName="add-remove-button-root-class-name"
            className=""
            amount={0}
            productName={props.productName}
            variantType={props.variantType}
          ></AddRemoveButton>
          <span
            className="cart-card-text1 TextStyle1Bold"
            id={props.productName + "-" + props.variantType + "-cost"}
          >
            {props.variantCost * 0 + " ₽"}
          </span>
        </div>
      </div>
    );
  }
  const cart_start = getCart();
  const position_start = getItemPosition(
    cart_start,
    props.productName,
    props.variantType
  );
  let amount = 0;
  if (position_start != -1) {
    amount = cart_start[position_start].amount;
  }

  return (
    <div
      className={`cart-card-container ${props.rootClassName} `}
      id={props.productName + "-" + props.variantType}
    >
      <div className="cart-card-container1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="cart-card-image"
        />
        <div className="cart-card-container2">
          <span className="cart-card-text TextStyle1">
            {props.productName + ", " + props.variantType}
          </span>
        </div>
      </div>
      <div className="cart-card-container3">
        <AddRemoveButton
          rootClassName="add-remove-button-root-class-name"
          className=""
          amount={amount}
          productName={props.productName}
          variantType={props.variantType}
        ></AddRemoveButton>
        <span
          className="cart-card-text1 TextStyle1Bold"
          id={props.productName + "-" + props.variantType + "-cost"}
        >
          {props.variantCost * amount + " ₽"}
        </span>
      </div>
    </div>
  );
};

CartCard.defaultProps = {
  imageSrc: "https://play.teleporthq.io/static/svg/default-img.svg",
  productName: "Название товара",
  rootClassName: "",
  imageAlt: "image",
  variantCost: 1000,
  variantType: "",
};

CartCard.propTypes = {
  imageSrc: PropTypes.string,
  productName: PropTypes.string,
  variantType: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  variantCost: PropTypes.number,
};

export default CartCard;
