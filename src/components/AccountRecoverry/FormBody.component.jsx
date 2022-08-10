import React from "react";
import OTPForRecovery from "./OTPForRecovery.component";
import UsernameForRecovery from "../AccountRecoverry/UsernameForRecovery.component";
import CategorySelect from "../NewPassword/CategorySelect.component";
import ImageSelect from "../NewPassword/ImageSelect.component";

const FormBody = ({
  formData,
  setFormData,
  setIsFormValid,
  step,
  sendRequestForOTPHandler,
}) => {
  if (step === 0) {
    //username
    return (
      <UsernameForRecovery
        formData={formData}
        setFormData={setFormData}
        setIsFormValid={setIsFormValid}
      />
    );
  }

  if (step === 1) {
    return (
      <OTPForRecovery
        setFormData={setFormData}
        formData={formData}
        setIsFormValid={setIsFormValid}
        sendRequestForOTPHandler={sendRequestForOTPHandler}
      />
    );
  }

  if (step === 2) {
    return (
      <CategorySelect
        formData={formData}
        setFormData={setFormData}
        setIsFormValid={setIsFormValid}
      />
    );
  }

  return <ImageSelect setFormData={setFormData} formData={formData} />;
};

export default FormBody;
