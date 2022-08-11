import React from "react";
import ImagesGridShow from "./ImagesGridShow.component";
import UsernameForLogin from "./UsernameForLogin.component";

const FormBody = ({
  formData,
  setFormData,
  setIsFormValid,
  step,
  logInData,
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
  console.log(logInData.imagesList);
  return <ImagesGridShow imagesList={logInData.imagesList[step - 1]}  />;
};

export default FormBody;
