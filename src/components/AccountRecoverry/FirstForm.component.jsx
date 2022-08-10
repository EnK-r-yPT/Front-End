import React, { useEffect, useState } from "react";
import Input from "../Inputs/Input.component";

const FirstForm = ({ formData, setFormData, setIsFormValid }) => {
  const [isInputValid, setIsInputValid] = useState({
    username: false,
  });

  useEffect(() => {
    setIsFormValid(isInputValid);
  }, [isInputValid, setIsFormValid]);

  return (
    <div className="flex flex-col gap-4 mt-10">
      <Input
        setFormData={setFormData}
        formData={formData}
        inputFieldName="Username"
        type="text"
        isInputValid={isInputValid}
        setIsInputValid={setIsInputValid}
      />
    </div>
  );
};

export default FirstForm;
