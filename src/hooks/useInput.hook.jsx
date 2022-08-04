import { useEffect, useState } from "react";

const useInput = (validateValue, formData, setFormData, name) => {
  const [enteredValue, setEnteredValue] = useState(formData[name]);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  useEffect(() => {
    setFormData((formData) => {
      return {
        ...formData,
        [name]: enteredValue,
      };
    });
  }, [enteredValue,name,setFormData]);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    setEnteredValue,
  };
};

export default useInput;
