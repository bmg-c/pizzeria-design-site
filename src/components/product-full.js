import React from "react";

import PropTypes from "prop-types";

import ButtonSmall from "./button-small";
import ProductVariant from "./product-variant";
import "./product-full.css";

const ProductFull = (props) => {
  return (
    <div
      className={`product-full-container ${props.product.rootClassName} `}
      style={{ marginTop: "48px" }}
    >
      <ButtonSmall
        imageSrc="/back.svg"
        rootClassName="button-small-root-class-name8"
        className=""
        clickFunction={() => {
          history.back();
        }}
      ></ButtonSmall>
      <div className="product-full-container1">
        <div className="product-full-container2">
          <img
            alt="image"
            src={props.product.imageSrc}
            className="product-full-image"
          />
          <span className="product-full-text TextStyle1Bold">Калорийность</span>
          <span className="product-full-text1 TextStyle1">
            {props.product.calories}
          </span>
        </div>
        <div className="product-full-container3">
          <span className="product-full-text2 TextStyle1BigBold">
            {props.product.name}
          </span>
          <span className="product-full-text3 TextStyle1">
            {props.product.description}
          </span>
          <ProductVariant
            variantCost={props.product.variantCost1}
            variantType={props.product.variantType1}
            productName={props.product.name}
            imageSrc={props.product.imageSrc}
            rootClassName="product-variant-root-class-name3"
            className=""
          ></ProductVariant>
          <ProductVariant
            variantCost={props.product.variantCost2}
            variantType={props.product.variantType2}
            productName={props.product.name}
            imageSrc={props.product.imageSrc}
            rootClassName="product-variant-root-class-name4"
            className=""
          ></ProductVariant>
          <ProductVariant
            variantCost={props.product.variantCost3}
            variantType={props.product.variantType3}
            productName={props.product.name}
            imageSrc={props.product.imageSrc}
            rootClassName="product-variant-root-class-name5"
            className=""
          ></ProductVariant>
        </div>
      </div>
    </div>
  );
};

ProductFull.defaultProps = {
  product: {
    category: "Пицца",
    name: "Данила",
    description:
      "Древние старцы помнят, что давным-давно по телевизору передавали шоу  «Даёшь молодежь». Там Данила и Герман говорили на гламурном  московском диалекте. Шоу больше нет, а пицца всё ещё супербл и крейзи!",
    variantCost1: 299,
    variantType1: "25 см",
    variantCost2: 549,
    variantType2: "30 см",
    variantCost3: 679,
    variantType3: "35 см",
    calories:
      "256 ккал (9 г белков, 44 г углвеодов, 20 г жиры) на 100 г продукта",
    imageSrc: "/products/danila.png",
  },
};

ProductFull.propTypes = {
  product: PropTypes.object,
};

export default ProductFull;
