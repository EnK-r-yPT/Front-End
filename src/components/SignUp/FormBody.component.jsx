import React from "react";
import ImageSelect from "./ImageSelect.component";
import SingUpInfo from "./SingUpInfo.component";

const FormBody = ({
  formData,
  setFormData,
  setIsFormValid,
  isLoading,
  step,
  setIsLoading,
}) => {
  if (step === false) {
    return (
      <SingUpInfo
        formData={formData}
        setFormData={setFormData}
        setIsFormValid={setIsFormValid}
      />
    );
  }
  return (
    <ImageSelect
      setFormData={setFormData}
      formData={formData}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />
  );
};

export default FormBody;
