import React from "react";

import { Helmet } from "react-helmet";

import NavigationBarFixed from "../components/navigation-bar-fixed";
import ProductFull from "../components/product-full";
import PopupWindowUser from "../components/popup-window-user";
import Footer from "../components/footer";
import "./product.css";
import Cookies from "universal-cookie";

const products = require("../product-list");

const Product = (props) => {
  let str = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  const product_name = decodeURIComponent(str.replace(/\+/g, " "));
  const product = (() => {
    for (let i = 0; i < products.length; i++) {
      if (product_name == products[i].name) return products[i];
    }
    return products[0];
  })();
  return (
    <div className="product-container">
      <Helmet>
        <title>Product - IPS</title>
        <meta property="og:title" content="Product - IPS" />
      </Helmet>
      <NavigationBarFixed rootClassName="navigation-bar-fixed-root-class-name5"></NavigationBarFixed>
      <PopupWindowUser
        rootClassName="popup-window-user-root-class-name"
        style={{ top: "60px", right: "0px", display: "none" }}
      ></PopupWindowUser>
      <ProductFull
        rootClassName="product-full-root-class-name"
        product={product}
      ></ProductFull>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  );
};

export default Product;
