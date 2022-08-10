import React, { useEffect, useState } from "react";
import CategoryInput from "../Inputs/CategoryInput.component";

const CategorySelect = ({
  formData,
  setFormData,
  setIsFormValid,
}) => {
  const [isInputValid, setIsInputValid] = useState({
    category: false,
  });

  useEffect(() => {
    setIsFormValid(isInputValid.category);
  }, [isInputValid, setIsFormValid]);
  return (
    <div className="mt-12">
      <CategoryInput
        setFormData={setFormData}
        formData={formData}
        setIsInputValid={setIsInputValid}
        isInputValid={isInputValid}
      />
    </div>
  );
};

export default CategorySelect;
