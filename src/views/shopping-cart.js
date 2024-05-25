import React from "react";

import { Helmet } from "react-helmet";

import NavigationBarFixed from "../components/navigation-bar-fixed";
import ShoppingCartBlock from "../components/shopping-cart-block";
import CheckoutBlock from "../components/checkout-block";
import PopupWindowUser from "../components/popup-window-user";
import Footer from "../components/footer";
import "./shopping-cart.css";

const ShoppingCart = (props) => {
  return (
    <div className="shopping-cart-container">
      <Helmet>
        <title>Shopping-Cart - IPS</title>
        <meta property="og:title" content="Shopping-Cart - IPS" />
      </Helmet>
      <NavigationBarFixed rootClassName="navigation-bar-fixed-root-class-name3"></NavigationBarFixed>
      <PopupWindowUser
        rootClassName="popup-window-user-root-class-name"
        style={{ top: "60px", right: "0px", display: "none" }}
      ></PopupWindowUser>
      <div className="shopping-cart-container1">
        <ShoppingCartBlock rootClassName="shopping-cart-block-root-class-name"></ShoppingCartBlock>
        <CheckoutBlock rootClassName="checkout-block-root-class-name"></CheckoutBlock>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  );
};

export default ShoppingCart;
