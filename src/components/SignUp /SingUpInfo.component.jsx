import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import useInput from "../../hooks/useInput.hook";
import useSelect from "../../hooks/useSelect.hook";

let dummyCategories = ["Cat", "Dog", "Lion", "Wolf", "Tiger"];

const Url =
  "https://react-prac-bc8db-default-rtdb.asia-southeast1.firebasedatabase.app/Categories.json";

const SingUpInfo = ({ formData, setFormData, setIsFormValid }) => {
  const [categories, setCategories] = useState(dummyCategories);

  const {
    value: enteredUsername,
    isValid: enteredUsernameIsValid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput((value) => value.trim() !== "", formData, setFormData, "username");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"), formData, setFormData, "email");

  const {
    optionSelected: selectedCategory,
    isValid: selectedCategoryIsValid,
    hasError: selectedCategoryHasError,
    valueChangeHandler: categoryChangeHandler,
    inputBlurHandler: categoryBlurHandler,
  } = useSelect(formData, setFormData);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(Url);
      const categoriesList = await response.json();
      setCategories(categoriesList);
    };
    fetchCategories();
  },[]);

  useEffect(() => {
    if (
      enteredEmailIsValid &&
      enteredUsernameIsValid &&
      selectedCategoryIsValid
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [
    enteredEmailIsValid,
    enteredUsernameIsValid,
    selectedCategoryIsValid,
    setIsFormValid,
  ]);

  const invalidInput = "bg-red-100";

  const invalidContainer = " border border-red-400 bg-red-100 py-[0.6rem]";

  const categoryList = categories.map((category) => {
    return (
      <option value={category} className="bg-gray-100" key={category}>
        {category}
      </option>
    );
  });

  return (
    <div className="flex flex-col gap-4 mt-8">
      <div>
        <div
          className={twMerge(
            `flex items-center bg-gray-100 px-2 py-3`,
            `${usernameInputHasError ? invalidContainer : ""}`
          )}
        >
          <FaRegUser className="text-gray-400  mx-1" />
          <input
            name="username"
            className={twMerge(
              ` bg-gray-100 ml-1 outline-none text-gray-500 text-sm w-full`,
              `${usernameInputHasError ? invalidInput : ""}`
            )}
            type="text"
            placeholder="Username"
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            value={enteredUsername}
          />
        </div>
        {usernameInputHasError && (
          <p className="text-red-400 text-sm text-left py-1">
            User Id must not be empty.
          </p>
        )}
      </div>

      <div className="">
        <div
          className={twMerge(
            `flex items-center bg-gray-100 px-2 py-3`,
            ` ${emailInputHasError ? invalidContainer : ""}`
          )}
        >
          <FaRegEnvelope className="text-gray-400 text-lg  mx-1" />
          <input
            name="email"
            className={twMerge(
              ` bg-gray-100 ml-1 outline-none text-gray-500 text-sm w-full`,
              ` ${emailInputHasError ? invalidInput : ""}`
            )}
            type="text"
            placeholder="Email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
        </div>
        {emailInputHasError && (
          <p className="text-red-400 text-sm text-left py-1">
            Please enter a valid email.
          </p>
        )}
      </div>

      <div className="">
        <div
          className={twMerge(
            `flex items-center  bg-gray-100 px-2 py-3 `,
            `${selectedCategoryHasError ? invalidContainer : ""}`
          )}
        >
          <BiCategory className="text-gray-400 text-lg mx-1" />
          <select
            name="category"
            className={twMerge(
              `text-gray-500 bg-gray-100 text-sm w-full outline-none cursor-context-menu `,
              `${selectedCategoryHasError ? invalidInput : ""}`
            )}
            onChange={categoryChangeHandler}
            onBlur={categoryBlurHandler}
            value={selectedCategory}
          >
            <option value="" className="bg-gray-100 " key="">
              Select Category
            </option>
            {categoryList}
          </select>
        </div>
        {selectedCategoryHasError && (
          <p className="text-red-400 text-sm text-left py-1">
            Please select a category.
          </p>
        )}
      </div>
    </div>
  );
};

export default SingUpInfo;
