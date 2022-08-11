import React, { useEffect, useState } from "react";
import Input from "../Inputs/Input.component";

const UsernameForLogin = ({ formData, setFormData, setIsFormValid }) => {
  const [isInputValid, setIsInputValid] = useState({
    username: false,
  });

  useEffect(() => {
    setIsFormValid(isInputValid.username);
  }, [isInputValid, setIsFormValid]);

  return (
    <div className="mt-12">
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

export default UsernameForLogin;
