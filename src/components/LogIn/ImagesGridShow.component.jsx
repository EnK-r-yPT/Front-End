import React from "react";
import ImagesGrid from "./ImagesGrid.component";
import Sliders from "./Sliders.component";

const ImagesGridShow = ({
  imagesList,
  formData,
  setFormData,
  setIsFormValid,
  step,
  nextStepHandler,
}) => {
  return (
    <div>
      <ImagesGrid imagesList={imagesList} />
      <Sliders
        formData={formData}
        setFormData={setFormData}
        setIsFormValid={setIsFormValid}
        step={step}
        nextStepHandler={nextStepHandler}
      />
    </div>
  );
};

export default ImagesGridShow;
