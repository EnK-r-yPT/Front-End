import React from "react";
import ImagesGridShow from "./ImagesGridShow.component";
import UsernameForLogin from "./UsernameForLogin.component";

const FormBody = ({
  formData,
  setFormData,
  setIsFormValid,
  step,
  logInData,
  nextStepHandler
}) => {
  if (step === 0) {
    //username
    return (
      <UsernameForLogin
        formData={formData}
        setFormData={setFormData}
        setIsFormValid={setIsFormValid}
      />
    );
  }

  return (
    <ImagesGridShow
      imagesList={logInData.imagesList[step - 1]}
      formData={formData}
      setFormData={setFormData}
      setIsFormValid={setIsFormValid}
      step={step}
      nextStepHandler={nextStepHandler}
    />
  );
};

export default FormBody;
