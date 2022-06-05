import React from "react";
import devImg from '../assets/images/dev.png';
import designImg from '../assets/images/design.png';

const ImageSection = () => (
  <div className="images-container">
    <img src={devImg} className="dev-img" />
    <div className="image-title">
      <span className="dev">Dev</span>
      <span>elop</span>
      <p>& Design</p>
    </div>
    <img src={designImg} className="design-img" />
  </div>
);

export default ImageSection;