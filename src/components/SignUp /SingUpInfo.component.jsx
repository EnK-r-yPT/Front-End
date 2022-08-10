import React, { useEffect, useState } from "react";
import CategoryInput from "../Inputs/CategoryInput.cpmponent";
import Input from "../Inputs/Input.component";

const SingUpInfo = ({ formData, setFormData, setIsFormValid }) => {
  const [isInputValid, setIsInputValid] = useState({
    username: false,
    email: false,
    category: false,
  });

  useEffect(() => {
    if (
      isInputValid.username &&
      isInputValid.email &&
      isInputValid.category
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isInputValid, setIsFormValid]);

  return (
    <div className="flex flex-col gap-4 mt-8">
      <Input
        setFormData={setFormData}
        formData={formData}
        inputFieldName={"Username"}
        type="text"
        setIsInputValid={setIsInputValid}
        isInputValid={isInputValid}
      />

      <Input
        setFormData={setFormData}
        formData={formData}
        inputFieldName={"Email"}
        type="email"
        setIsInputValid={setIsInputValid}
        isInputValid={isInputValid}
      />

      <CategoryInput setFormData={setFormData} formData={formData} setIsInputValid={setIsInputValid} isInputValid={isInputValid} />
    </div>
  );
};

export default SingUpInfo;
