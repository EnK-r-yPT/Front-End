import React from "react";
import ImagesGrid from "./ImagesGrid.component";
import Sliders from "./Sliders.component";

const ImagesGridShow = ({
  imagesList,
  formData,
  setFormData,
  setIsFormValid,
  step,
  setStep,
  noOfList
}) => {
  return (
    <div>
      <ImagesGrid imagesList={imagesList} />
      <Sliders
        formData={formData}
        setFormData={setFormData}
        setIsFormValid={setIsFormValid}
        step={step}
        setStep={setStep}
        noOfList={noOfList}
      />
    </div>
  );
};

export default ImagesGridShow;
