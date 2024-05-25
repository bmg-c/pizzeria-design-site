import React, { useState } from "react";

import PropTypes from "prop-types";

import ButtonAddCart from "./button-add-cart";
import "./product-variant.css";

const ProductVariant = (props) => {
  const [isVisible, setIsVisible] = useState(
    props.variantType.length == 0 ? false : true
  );
  return (
    <div className={`product-variant-container ${props.rootClassName} `}>
      {isVisible && (
        <div className="product-variant-container1">
          <span className="product-variant-text TextStyle1">
            {props.variantType}
          </span>
          <span className="product-variant-text1 TextStyle1Bold">
            {props.variantCost + " ₽"}
          </span>
          <ButtonAddCart
            rootClassName="button-add-cart-root-class-name"
            className=""
            productName={props.productName}
            variantType={props.variantType}
            variantCost={props.variantCost}
            imageSrc={props.imageSrc}
            onAddCart={props.onAddCart}
          ></ButtonAddCart>
        </div>
      )}
    </div>
  );
};

ProductVariant.defaultProps = {
  rootClassName: "",
  variantType: "Вариант",
  variantCost: 1000,
  productName: "",
  imageSrc: "",
  onAddCart: (title, text) => {},
};

ProductVariant.propTypes = {
  rootClassName: PropTypes.string,
  variantType: PropTypes.string,
  variantCost: PropTypes.number,
  productName: PropTypes.string,
  imageSrc: PropTypes.string,
  onAddCart: PropTypes.func,
};

export default ProductVariant;
