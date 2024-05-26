import React from "react";

import PropTypes from "prop-types";

import Banner from "./banner";
import "./banner-section.css";

const BannerSection = (props) => {
  return (
    <div className={`banner-section-container ${props.rootClassName} `}>
      <Banner
        imageSrc="/banner1-300h.png"
        rootClassName="banner-root-class-name"
        className=""
      ></Banner>
      <Banner
        imageSrc="/banner2-300h.png"
        rootClassName="banner-root-class-name1"
        className=""
      ></Banner>
      <Banner
        imageSrc="/banner3-300h.png"
        rootClassName="banner-root-class-name2"
        className=""
      ></Banner>
    </div>
  );
};

BannerSection.defaultProps = {
  rootClassName: "",
};

BannerSection.propTypes = {
  rootClassName: PropTypes.string,
};

export default BannerSection;
