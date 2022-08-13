import { useEffect, useState } from "react";

const useSelect = (formData, setFormData) => {
  const [selected, setSelected] = useState(formData.category);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    setFormData((formData) => {
      return {
        ...formData,
        category: selected,
      };
    });
  }, [selected, setFormData]);

  let valueIsValid = true;

  if (selected === "") {
    valueIsValid = false;
  }

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setSelected("");
    setIsTouched(false);
  };

  return {
    optionSelected: selected,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    setSelected,
  };
};

export default useSelect;
