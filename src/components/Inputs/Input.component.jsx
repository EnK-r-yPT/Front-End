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

  let icon = <BsKeyboard className="text-gray-400 text-xl  mx-1" />,
    message = "Enter details correctly";

  if (inputFieldName.toLowerCase() === "username") {
    icon = <FaRegUser className="text-gray-400  mx-1" />;
    message = "Username must not be empty.";
  } else if (inputFieldName.toLowerCase() === "email") {
    icon = <FaRegEnvelope className="text-gray-400 text-lg  mx-1" />;
    message = "Please enter a valid email.";
  } else if (inputFieldName.toLowerCase() === "otp") {
    icon = <RiLockPasswordLine className="text-gray-400  mx-1 text-xl" />;
    message = "OTP must not be empty.";
  }

  const invalidInput = "bg-red-100";
  const invalidContainer = " border border-red-400 bg-red-100 py-[0.6rem]";

  return (
    <div>
      <div
        className={twMerge(
          `flex items-center bg-gray-100 px-2 py-3`,
          `${valueInputHasError ? invalidContainer : ""}`
        )}
      >
        {icon}
        <input
          name={inputFieldName}
          className={twMerge(
            ` bg-gray-100 ml-1 outline-none text-gray-500 text-sm w-full`,
            `${valueInputHasError ? invalidInput : ""}`
          )}
          type={type}
          placeholder={inputFieldName}
          onChange={valueChangeHandler}
          onBlur={valueBlurHandler}
          value={enteredValue}
        />
      </div>
      {valueInputHasError && (
        <p className="text-red-400 text-sm text-left py-1">{message}</p>
      )}
    </div>
  );
};

export default Input;
