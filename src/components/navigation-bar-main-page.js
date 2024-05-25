import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import LogoDefault from "./logo-default";
import ButtonNavigation from "./button-navigation";
import CityChooser from "./city-chooser";
import ButtonMedium from "./button-medium";
import ButtonSmall from "./button-small";
import LogoSmall from "./logo-small";
import Cookies from "universal-cookie";
import "./navigation-bar-main-page.css";

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

const scrollTo = (id) => {
  return () => {
    let offset = document.getElementById(id).offsetTop - 60;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };
};

const NavigationBarMainPage = (props) => {
  const [isSmall, setIsSmall] = useState(false);
  const cart_info = getCartInfo();
  useEffect(() => {
    const scroll_offset = 300;
    const handleScroll = (event) => {
      if (window.scrollY >= scroll_offset) {
        setIsSmall(true);
      } else if (window.scrollY < scroll_offset) {
        setIsSmall(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navigation-bar-main-page-container ${props.rootClassName} `}
    >
      {!isSmall && (
        <div className="navigation-bar-main-page-container01">
          <LogoSmall
            rootClassName="logo-small-root-class-name4"
            className=""
          ></LogoSmall>
          <LogoDefault
            rootClassName="logo-default-root-class-name"
            className=""
          ></LogoDefault>
          <div className="navigation-bar-main-page-container02">
            <nav className="navigation-bar-main-page-links">
              <ButtonNavigation
                text="Меню"
                buttonText="Меню"
                rootClassName="button-navigation-root-class-name"
                className=""
                clickFunction={scrollTo("pizzaCategory")}
              ></ButtonNavigation>
              <ButtonNavigation
                text="Пицца"
                rootClassName="button-navigation-root-class-name1"
                className="navigation-bar-main-page-component02"
                clickFunction={scrollTo("pizzaCategory")}
              ></ButtonNavigation>
              <ButtonNavigation
                text="Закуски"
                rootClassName="button-navigation-root-class-name2"
                className=""
                clickFunction={scrollTo("snacksCategory")}
              ></ButtonNavigation>
              <ButtonNavigation
                text="Напитки"
                rootClassName="button-navigation-root-class-name3"
                className=""
                clickFunction={scrollTo("drinksCategory")}
              ></ButtonNavigation>
            </nav>
            <div className="navigation-bar-main-page-buttons">
              <CityChooser
                rootClassName="city-chooser-root-class-name"
                className=""
              ></CityChooser>
              <Link to="/faq" className="navigation-bar-main-page-navlink">
                <ButtonNavigation
                  text="FAQ"
                  rootClassName="button-navigation-root-class-name5"
                  className="navigation-bar-main-page-component06"
                ></ButtonNavigation>
              </Link>
              <ButtonNavigation
                text="Контакты"
                rootClassName="button-navigation-root-class-name4"
                className="navigation-bar-main-page-component07"
                clickFunction={() => {
                  document.location.href = "/contacts";
                }}
              ></ButtonNavigation>
              <Link
                to="/shopping-cart"
                className="navigation-bar-main-page-navlink2"
              >
                <div className="navigation-bar-main-page-container03">
                  <ButtonMedium
                    rootClassName="button-medium-root-class-name"
                    className=""
                  ></ButtonMedium>
                  <div className="navigation-bar-main-page-container04">
                    <span
                      id="cartCost"
                      className="navigation-bar-main-page-text TextStyle1Bold"
                    >
                      {cart_info.cost + " ₽"}
                    </span>
                    <div className="navigation-bar-main-page-container05"></div>
                    <div className="navigation-bar-main-page-container06">
                      <span
                        id="cartAmount"
                        className="navigation-bar-main-page-text1 TextStyle1"
                      >
                        {cart_info.amount}
                      </span>
                    </div>
                    <img
                      alt="image"
                      src="/cart.svg"
                      className="navigation-bar-main-page-image"
                    />
                  </div>
                </div>
              </Link>
              <ButtonSmall
                text="ЛК"
                rootClassName="button-small-root-class-name"
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
      )}
      {isSmall && (
        <div className="navigation-bar-main-page-container07">
          <LogoSmall
            rootClassName="logo-small-root-class-name3"
            className=""
          ></LogoSmall>
          <div className="navigation-bar-main-page-container08">
            <nav className="navigation-bar-main-page-links1">
              <ButtonNavigation
                text="Меню"
                buttonText="Меню"
                rootClassName="button-navigation-root-class-name12"
                className=""
                clickFunction={scrollTo("pizzaCategory")}
              ></ButtonNavigation>
              <ButtonNavigation
                text="Пицца"
                rootClassName="button-navigation-root-class-name13"
                className="navigation-bar-main-page-component12"
                clickFunction={scrollTo("pizzaCategory")}
              ></ButtonNavigation>
              <ButtonNavigation
                text="Закуски"
                rootClassName="button-navigation-root-class-name20"
                className=""
                clickFunction={scrollTo("snacksCategory")}
              ></ButtonNavigation>
              <ButtonNavigation
                text="Напитки"
                rootClassName="button-navigation-root-class-name23"
                className=""
                clickFunction={scrollTo("drinksCategory")}
              ></ButtonNavigation>
            </nav>
            <div className="navigation-bar-main-page-buttons1">
              <CityChooser
                rootClassName="city-chooser-root-class-name5"
                className=""
              ></CityChooser>
              <Link
                to="/shopping-cart"
                className="navigation-bar-main-page-navlink3"
              >
                <div className="navigation-bar-main-page-container09">
                  <ButtonMedium
                    rootClassName="button-medium-root-class-name11"
                    className=""
                  ></ButtonMedium>
                  <div className="navigation-bar-main-page-container10">
                    <span
                      id="cartCost"
                      className="navigation-bar-main-page-text2 TextStyle1Bold"
                    >
                      {cart_info.cost + " ₽"}
                    </span>
                    <div className="navigation-bar-main-page-container11"></div>
                    <div className="navigation-bar-main-page-container12">
                      <span
                        id="cartAmount"
                        className="navigation-bar-main-page-text3 TextStyle1"
                      >
                        {cart_info.amount}
                      </span>
                    </div>
                    <img
                      alt="image"
                      src="/cart.svg"
                      className="navigation-bar-main-page-image1"
                    />
                  </div>
                </div>
              </Link>
              <ButtonSmall
                text="ЛК"
                rootClassName="button-small-root-class-name6"
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
      )}
    </div>
  );
};

NavigationBarMainPage.defaultProps = {
  rootClassName: "",
};

NavigationBarMainPage.propTypes = {
  rootClassName: PropTypes.string,
};

export default NavigationBarMainPage;
