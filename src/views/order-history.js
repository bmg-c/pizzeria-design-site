import React from "react";

import { Helmet } from "react-helmet";

import NavigationBarFixed from "../components/navigation-bar-fixed";
import OrderCard from "../components/order-card";
import Footer from "../components/footer";
import PopupWindowUser from "../components/popup-window-user";
import "./order-history.css";

const OrderHistory = (props) => {
  return (
    <div className="order-history-container">
      <Helmet>
        <title>Order-History - IPS</title>
        <meta property="og:title" content="Order-History - IPS" />
      </Helmet>
      <PopupWindowUser
        rootClassName="popup-window-user-root-class-name"
        style={{ top: "60px", right: "0px", display: "none" }}
      ></PopupWindowUser>
      <NavigationBarFixed rootClassName="navigation-bar-fixed-root-class-name4"></NavigationBarFixed>
      <div className="order-history-container1">
        <OrderCard rootClassName="order-card-root-class-name"></OrderCard>
        <OrderCard
          rootClassName="order-card-root-class-name1"
          orderList={
            <div>
              <a
                href="/product/Данила"
                style={{ color: "var(--dl-color-colorscheme-color3)" }}
              >
                Данила
              </a>
               1x, 
              <a
                href="/product/Эрондондон"
                style={{ color: "var(--dl-color-colorscheme-color3)" }}
              >
                Эрондондон
              </a>
               3x, 
              <a
                href="/product/Китай Кока-кола"
                style={{ color: "var(--dl-color-colorscheme-color3)" }}
              >
                Китай Кока-кола
              </a>
               2x, 
              <a
                href="/product/Данила"
                style={{ color: "var(--dl-color-colorscheme-color3)" }}
              >
                Данила
              </a>
               1x, 
              <a
                href="/product/Эрондондон"
                style={{ color: "var(--dl-color-colorscheme-color3)" }}
              >
                Эрондондон
              </a>
               3x, 
              <a
                href="/product/Китай Кока-кола"
                style={{ color: "var(--dl-color-colorscheme-color3)" }}
              >
                Китай Кока-кола
              </a>
               2x, 
              <a
                href="/product/Данила"
                style={{ color: "var(--dl-color-colorscheme-color3)" }}
              >
                Данила
              </a>
               1x, 
              <a
                href="/product/Эрондондон"
                style={{ color: "var(--dl-color-colorscheme-color3)" }}
              >
                Эрондондон
              </a>
               3x, 
              <a
                href="/product/Китай Кока-кола"
                style={{ color: "var(--dl-color-colorscheme-color3)" }}
              >
                Китай Кока-кола
              </a>
               2x
            </div>
          }
        ></OrderCard>
        <OrderCard
          rootClassName="order-card-root-class-name2"
          orderList={
            <div>
              <a
                href="/product/Данила"
                style={{ color: "var(--dl-color-colorscheme-color3)" }}
              >
                Данила
              </a>
               1x, 
              <a
                href="/product/Эрондондон"
                style={{ color: "var(--dl-color-colorscheme-color3)" }}
              >
                Эрондондон
              </a>
               3x, 
              <a
                href="/product/Китай Кока-кола"
                style={{ color: "var(--dl-color-colorscheme-color3)" }}
              >
                Китай Кока-кола
              </a>
               2x, 
            </div>
          }
        ></OrderCard>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  );
};

export default OrderHistory;
