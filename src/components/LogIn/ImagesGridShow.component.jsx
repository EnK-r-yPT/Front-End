import React from "react";
import ImagesGrid from "./ImagesGrid.component";
import Sliders from "./Sliders.component";

const ImagesGridShow = ({ imagesList }) => {
  return (
    <div>
      <ImagesGrid imagesList={imagesList} />
      <Sliders />
    </div>
  );
};

export default ImagesGridShow;
