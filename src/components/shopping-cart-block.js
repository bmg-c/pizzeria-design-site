import React from "react";

import PropTypes from "prop-types";
import Cookies from "universal-cookie";

import RedIcon from "./red-icon";
import CartCard from "./cart-card";
import "./shopping-cart-block.css";

const getCart = () => {
  const cookies = new Cookies();
  let cart = cookies.get("cart", { path: "/" });
  if (cart == undefined) {
    cart = [];
  }
  return cart;
};

const ShoppingCartBlock = (props) => {
  let empty_card = (
    <CartCard
      rootClassName="cart-card-root-class-name"
      className=""
      productName={"none"}
      variantType={"empty"}
    ></CartCard>
  );
  if (getCart().length == 0)
    empty_card = (
      <CartCard
        rootClassName="cart-card-root-class-name"
        className=""
        productName={"flex"}
        variantType={"empty"}
      ></CartCard>
    );
  let cartPrice = 0;
  getCart().forEach((element) => {
    cartPrice += element.variantCost * element.amount;
  });
  return (
    <div className={`shopping-cart-block-container ${props.rootClassName} `}>
      <div className="shopping-cart-block-container1">
        <RedIcon
          imageSrc="/cart1.svg"
          rootClassName="red-icon-root-class-name"
          className=""
        ></RedIcon>
        <span className="shopping-cart-block-text TextStyle1Bold">Корзина</span>
      </div>
      <div id="cartProducts" className="shopping-cart-block-container2">
        {empty_card}
        {getCart().map((item) => (
          <CartCard
            rootClassName="cart-card-root-class-name"
            className=""
            imageSrc={item.imageSrc}
            productName={item.name}
            variantType={item.variantType}
            variantCost={item.variantCost}
          ></CartCard>
        ))}
      </div>
      <div className="shopping-cart-block-container3">
        <div className="shopping-cart-block-container4">
          <span className="shopping-cart-block-text01 TextStyle1">
            Баллы: +
          </span>
          <span
            id="pointsGet"
            className="shopping-cart-block-text02 TextStyle1"
          >
            {Math.floor(cartPrice / 10)}
          </span>
          <span className="shopping-cart-block-text03 TextStyle1">
            <span className=""> Б</span>
            <br className=""></br>
          </span>
        </div>
        <div className="shopping-cart-block-container5">
          <span className="shopping-cart-block-text06">Итог: </span>
          <span
            id="cartPrice"
            className="shopping-cart-block-text07 TextStyle1Bold"
          >
            {cartPrice}
          </span>
          <span className="shopping-cart-block-text08 TextStyle1Bold">
            <span className="TextStyle1Bold"> </span>
            <span className=""> ₽</span>
            <br className="TextStyle1Bold"></br>
          </span>
        </div>
      </div>
    </div>
  );
};

ShoppingCartBlock.defaultProps = {
  rootClassName: "",
};

ShoppingCartBlock.propTypes = {
  rootClassName: PropTypes.string,
};

export default ShoppingCartBlock;
