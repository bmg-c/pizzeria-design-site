import React, { useState } from "react";

import { Helmet } from "react-helmet";

import NavigationBarMainPage from "../components/navigation-bar-main-page";
import BannerSection from "../components/banner-section";
import CategoryBlock from "../components/category-block";
import Footer from "../components/footer";
import "./main.css";
import PopupWindowUser from "../components/popup-window-user";
import AddCartPopup from "../components/add-cart-popup";

const products = require("../product-list");

const Main = (props) => {
  let products_pizza = [];
  let products_snacks = [];
  let products_drinks = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category == "Пицца") {
      products_pizza.push(products[i]);
    } else if (products[i].category == "Закуски") {
      products_snacks.push(products[i]);
    } else if (products[i].category == "Напитки") {
      products_drinks.push(products[i]);
    }
  }
  const [popups, setPopups] = useState([]);
  const addPopup = (title, text) => {
    setPopups([...popups, { title: title, text: text }]);
  };

  return (
    <div>
      <NavigationBarMainPage rootClassName="navigation-bar-main-page-root-class-name"></NavigationBarMainPage>
      <PopupWindowUser
        rootClassName="popup-window-user-root-class-name"
        style={{ top: "60px", right: "0px", display: "none" }}
      ></PopupWindowUser>
      <div className="main-container">
        <Helmet>
          <title>IPS</title>
          <meta property="og:title" content="IPS" />
        </Helmet>
        <div
          style={{
            position: "fixed",
            top: "76px",
            right: "16px",
            display: "flex",
            flexDirection: "column-reverse",
            gap: "8px",
            zIndex: 500,
          }}
        >
          {popups.map((item, i) => (
            <AddCartPopup title={item.title} text={item.text}></AddCartPopup>
          ))}
        </div>

        <BannerSection rootClassName="banner-section-root-class-name"></BannerSection>
        <CategoryBlock
          iconSrc="/pizza.svg"
          categoryName="Пицца"
          rootClassName="category-block-root-class-name"
          products={products_pizza}
          id="pizzaCategory"
          onAddCart={addPopup}
        ></CategoryBlock>
        <CategoryBlock
          iconSrc="/burger.svg"
          categoryName="Закуски"
          rootClassName="category-block-root-class-name1"
          products={products_snacks}
          id="snacksCategory"
          onAddCart={addPopup}
        ></CategoryBlock>
        <CategoryBlock
          iconSrc="/drink.svg"
          categoryName="Напитки"
          rootClassName="category-block-root-class-name2"
          products={products_drinks}
          id="drinksCategory"
          onAddCart={addPopup}
        ></CategoryBlock>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </div>
  );
};

export default Main;
