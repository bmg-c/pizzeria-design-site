import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import LogoDefault from "./logo-default";
import LogoSmall from "./logo-small";
import ButtonNavigation from "./button-navigation";
import CityChooser from "./city-chooser";
import ButtonMedium from "./button-medium";
import ButtonSmall from "./button-small";
import Cookies from "universal-cookie";
import "./navigation-bar-fixed.css";

const getCartInfo = () => {
  const cookies = new Cookies();
  let cart = cookies.get("cart", { path: "/" });
  if (cart == undefined) {
    return { cost: 0, amount: 0 };
  }
  let cost = 0;
  for (let i = 0; i < cart.length; i++) {
    cost += cart[i].variantCost * cart[i].amount;
  }
  let totalAmount = 0;
  for (const item of cart) {
    totalAmount += item.amount;
  }
  return { cost: cost, amount: totalAmount };
};

const NavigationBarFixed = (props) => {
  const cart_info = getCartInfo();
  return (
    <div className={`navigation-bar-fixed-container ${props.rootClassName} `}>
      <div className="navigation-bar-fixed-container1">
        <LogoSmall
          rootClassName="logo-small-root-class-name5"
          className=""
        ></LogoSmall>
        <LogoDefault
          rootClassName="logo-default-root-class-name2"
          className=""
        ></LogoDefault>
        <div className="navigation-bar-fixed-container2">
          <nav className="navigation-bar-fixed-links">
            <ButtonNavigation
              text="Меню"
              buttonText="Меню"
              rootClassName="button-navigation-root-class-name11"
              className=""
              clickFunction={() => {
                document.location.href = "/#pizzaCategory";
              }}
            ></ButtonNavigation>
          </nav>
          <div className="navigation-bar-fixed-buttons">
            <CityChooser
              rootClassName="city-chooser-root-class-name4"
              className=""
            ></CityChooser>
            <ButtonNavigation
              text="FAQ"
              rootClassName="button-navigation-root-class-name21"
              className="navigation-bar-fixed-component3"
              clickFunction={() => {
                document.location.href = "/faq";
              }}
            ></ButtonNavigation>
            <ButtonNavigation
              text="Контакты"
              rootClassName="button-navigation-root-class-name22"
              className="navigation-bar-fixed-component4"
              clickFunction={() => {
                document.location.href = "/contacts";
              }}
            ></ButtonNavigation>
            <div className="navigation-bar-fixed-container3">
              <ButtonMedium
                rootClassName="button-medium-root-class-name4"
                className=""
              ></ButtonMedium>
              <div className="navigation-bar-fixed-container4">
                <div className="navigation-bar-fixed-container5">
                  <ButtonSmall
                    rootClassName="button-small-root-class-name7"
                    className=""
                  ></ButtonSmall>
                  <div
                    className="navigation-bar-fixed-container6"
                    onClick={() => {
                      document.location.href = "/shopping-cart";
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="navigation-bar-fixed-container7">
                      <span
                        id="cartAmount"
                        className="navigation-bar-fixed-text TextStyle1"
                      >
                        {cart_info.amount}
                      </span>
                    </div>
                    <img
                      alt="image"
                      src="/cart.svg"
                      className="navigation-bar-fixed-image"
                    />
                  </div>
                </div>
                <div className="navigation-bar-fixed-container8"></div>
                <ButtonSmall
                  text="ЛК"
                  rootClassName="button-small-root-class-name4"
                  className=""
                  clickFunction={() => {
                    const el = document.getElementById("popup-window-user");
                    el.style.display =
                      el.style.display == "none" ? "flex" : "none";
                  }}
                ></ButtonSmall>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NavigationBarFixed.defaultProps = {
  rootClassName: "",
};

NavigationBarFixed.propTypes = {
  rootClassName: PropTypes.string,
};

export default NavigationBarFixed;
