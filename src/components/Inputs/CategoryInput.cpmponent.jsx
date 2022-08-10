import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import useSelect from "../../hooks/useSelect.hook";
import { BiCategory } from "react-icons/bi";

let dummyCategories = ["Cat", "Dog", "Lion", "Wolf", "Tiger"];

const Url =
  "https://react-prac-bc8db-default-rtdb.asia-southeast1.firebasedatabase.app/Categories.json";

const CategoryInput = ({
  formData,
  setFormData,
  isInputValid,
  setIsInputValid,
}) => {
  const [categories, setCategories] = useState(dummyCategories);

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
  }, []);

  useEffect(() => {
    setIsInputValid((isInputValid) => {
      return {
        ...isInputValid,
        category: selectedCategoryIsValid,
      };
    });
  }, [selectedCategoryIsValid,setIsInputValid]);

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
  );
};

export default CategoryInput;
