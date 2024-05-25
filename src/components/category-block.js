import React from "react";

import PropTypes from "prop-types";

import RedIcon from "./red-icon";
import ProductCard from "./product-card";
import "./category-block.css";

const CategoryBlock = (props) => {
  return (
    <div
      id={props.id}
      className={`category-block-container ${props.rootClassName} `}
    >
      <div className="category-block-container1">
        <div className="category-block-container2">
          <RedIcon
            imageSrc={props.iconSrc}
            rootClassName="red-icon-root-class-name1"
            className=""
          ></RedIcon>
          <span className="category-block-text TextStyle1BigBold">
            {props.categoryName}
          </span>
        </div>
      </div>
      <div className="category-block-container3">
        {props.products.map((product) => (
          <ProductCard
            rootClassName="product-card-root-class-name2"
            className=""
            name={product.name}
            description={product.description}
            variantCost1={product.variantCost1}
            variantType1={product.variantType1}
            variantCost2={product.variantCost2}
            variantType2={product.variantType2}
            variantCost3={product.variantCost3}
            variantType3={product.variantType3}
            imageSrc={product.imageSrc}
            onAddCart={props.onAddCart}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

CategoryBlock.defaultProps = {
  rootClassName: "",
  categoryName: "Пицца",
  iconSrc: "/pizza.svg",
  products: [],
  id: "",
  onAddCart: (title, text) => {},
};

CategoryBlock.propTypes = {
  rootClassName: PropTypes.string,
  categoryName: PropTypes.string,
  iconSrc: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  onAddCart: PropTypes.func,
};

export default CategoryBlock;
