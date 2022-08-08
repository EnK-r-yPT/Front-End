import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import useInput from "../../hooks/useInput.hook";

import { FaRegUser } from "react-icons/fa";

const FirstForm = ({ formData, setFormData, setIsFormValid }) => {
  const {
    value: enteredUserId,
    isValid: enteredUserIdIsValid,
    hasError: userIdInputHasError,
    valueChangeHandler: userIdChangeHandler,
    inputBlurHandler: userIdBlurHandler,
  } = useInput((value) => value.trim() !== "", formData, setFormData, "userId");

  useEffect(() => {
    if (enteredUserIdIsValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  },[enteredUserIdIsValid,setIsFormValid]);

  const invalidInput = "bg-red-100";

  const invalidContainer = " border border-red-400 bg-red-100 py-[0.6rem]";

  return (
    <div className="flex flex-col gap-4 mt-10">
      <div>
        <div
          className={twMerge(
            `flex items-center bg-gray-100 px-2 py-3`,
            `${userIdInputHasError ? invalidContainer : ""}`
          )}
        >
          <FaRegUser className="text-gray-400  mx-1" />
          <input
            name="userId"
            className={twMerge(
              ` bg-gray-100 ml-1 outline-none text-gray-500 text-sm w-full`,
              `${userIdInputHasError ? invalidInput : ""}`
            )}
            type="text"
            placeholder="User Id"
            onChange={userIdChangeHandler}
            onBlur={userIdBlurHandler}
            value={enteredUserId}
          />
        </div>
        {userIdInputHasError && (
          <p className="text-red-400 text-sm text-left py-1">
            User Id must not be empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default FirstForm;
