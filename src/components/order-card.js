import React from "react";

import PropTypes from "prop-types";

import "./order-card.css";

const OrderCard = (props) => {
  return (
    <div className={`order-card-container ${props.rootClassName} `}>
      <div className="order-card-container1">
        <div className="order-card-container2">
          <span className="order-card-text TextStyle1">
            {props.receivingType}
          </span>
          <span className="order-card-text1 TextStyle1"> - </span>
          <span className="order-card-text2 TextStyle1Small">
            {props.orderNumber}
          </span>
        </div>
        <span className="order-card-text3 TextStyle1Bold">
          {props.orderCost}
        </span>
      </div>
      <div className="order-card-container3">
        <span className="order-card-text4 TextStyle1">{props.buyingDate}</span>
        <span className="order-card-text5 TextStyle1">
          {props.orderAddress}
        </span>
      </div>
      <div className="order-card-container4">
        <span className="order-card-text6 TextStyle1Small">
          {props.timeInterval}
        </span>
        <span className="order-card-text7 TextStyle1">{props.orderState}</span>
      </div>
      <div className="order-card-container5">
        <span className="order-card-text8 TextStyle1">{props.orderList}</span>
      </div>
    </div>
  );
};

OrderCard.defaultProps = {
  rootClassName: "",
  orderList: "Товар1, Товар2 x2, Товар3 x3, ...",
  orderNumber: "Номер заказа",
  orderState: "Состояние заказа",
  orderAddress: "Адрес доставки",
  receivingType: "Тип получения",
  orderCost: "1000 ₽",
  buyingDate: "Дата покупки",
  timeInterval: "Время покупки - время получения",
};

OrderCard.propTypes = {
  rootClassName: PropTypes.string,
  orderList: PropTypes.oneOfType(PropTypes.string, PropTypes.any),
  orderNumber: PropTypes.string,
  orderState: PropTypes.string,
  orderAddress: PropTypes.string,
  receivingType: PropTypes.string,
  orderCost: PropTypes.string,
  buyingDate: PropTypes.string,
  timeInterval: PropTypes.string,
};

export default OrderCard;
