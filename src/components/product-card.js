import React from "react";

import PropTypes from "prop-types";

import ProductVariant from "./product-variant";
import "./product-card.css";

const ProductCard = (props) => {
  return (
    <div className={`product-card-container ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-card-image"
        onClick={() => {
          document.location.href = "/product/" + props.name;
        }}
        style={{ cursor: "pointer" }}
      />
      <span className="product-card-text TextStyle1Bold">{props.name}</span>
      <span className="product-card-text1 TextStyle1">{props.description}</span>
      <ProductVariant
        productName={props.name}
        variantCost={props.variantCost1}
        variantType={props.variantType1}
        imageSrc={props.imageSrc}
        rootClassName="product-variant-root-class-name"
        className=""
        onAddCart={props.onAddCart}
      ></ProductVariant>
      <ProductVariant
        productName={props.name}
        variantCost={props.variantCost2}
        variantType={props.variantType2}
        imageSrc={props.imageSrc}
        rootClassName="product-variant-root-class-name1"
        className=""
        onAddCart={props.onAddCart}
      ></ProductVariant>
      <ProductVariant
        productName={props.name}
        variantCost={props.variantCost3}
        variantType={props.variantType3}
        imageSrc={props.imageSrc}
        rootClassName="product-variant-root-class-name2"
        className=""
        onAddCart={props.onAddCart}
      ></ProductVariant>
    </div>
  );
};

ProductCard.defaultProps = {
  name: "Название продукта",
  imageSrc: "https://play.teleporthq.io/static/svg/default-img.svg",
  variantCost3: "",
  variantType3: "",
  description:
    "Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара",
  rootClassName: "",
  variantType2: "",
  variantCost1: "",
  imageAlt: "image",
  variantCost2: "",
  variantType1: "",
  onAddCart: (title, text) => {},
};

ProductCard.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  variantCost3: PropTypes.number,
  variantType3: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  variantType2: PropTypes.string,
  variantCost1: PropTypes.number,
  imageAlt: PropTypes.string,
  variantCost2: PropTypes.number,
  variantType1: PropTypes.string,
  onAddCart: PropTypes.func,
};

export default ProductCard;
