import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import useInput from "../../hooks/useInput.hook";

import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { BsKeyboard } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";

const inputValidationFunctions = (inputName) => {
  if (inputName.toLowerCase() === "email") {
    return (value) => value.includes("@");
  }
  return (value) => value.trim() !== "";
};

const Input = ({
  inputFieldName,
  type,
  setIsInputValid,
  isInputValid,
  data,
  setData,
}) => {
  const {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError: valueInputHasError,
    valueChangeHandler,
    inputBlurHandler: valueBlurHandler,
  } = useInput(
    inputValidationFunctions(inputFieldName),
    inputFieldName.toLowerCase(),
    data,
    setData
  );

  useEffect(() => {
    setIsInputValid((isInputValid) => {
      return {
        ...isInputValid,
        [inputFieldName.toLowerCase()]: enteredValueIsValid,
      };
    });
  }, [enteredValueIsValid, inputFieldName, setIsInputValid]);

  let icon = <BsKeyboard className="text-[color:var(--color-primary)] text-xl  mx-1" />,
    message = "Enter details correctly";

  if (inputFieldName.toLowerCase() === "username") {
    icon = <FaRegUser className="text-[color:var(--color-primary)]  mx-1 text-md" />;
    message = "Username must not be empty.";
  } else if (inputFieldName.toLowerCase() === "email") {
    icon = <FaRegEnvelope className="text-[color:var(--color-primary)] text-lg  mx-1" />;
    message = "Please enter a valid email.";
  } else if (inputFieldName.toLowerCase() === "otp") {
    icon = <RiLockPasswordLine className="text-[color:var(--color-primary)]  mx-1 text-xl" />;
    message = "OTP must not be empty.";
  }

  const invalidContainer = " border-[0.12rem] border-red-400 ";

  return (
    <div className="relative">
      <div
        className={twMerge(
          `flex items-center bg-gray-100 px-2 py-3 border-[0.12rem] border-gray-100 rounded-md focus-within:border-[color:var(--color-primary)]`,
          `${valueInputHasError ? invalidContainer : ""}`
        )}
      >
        {icon}
        <input
          name={inputFieldName}
          className={` bg-gray-100 ml-1 outline-none text-gray-500 text-sm w-full`}
          type={type}
          placeholder={inputFieldName}
          onChange={valueChangeHandler}
          onBlur={valueBlurHandler}
          value={enteredValue}
        />
      </div>
      {valueInputHasError && (
        <p className="text-red-400 text-xs text-left absolute mt-[0.1rem]">{message}</p>
      )}
    </div>
  );
};

export default Input;
