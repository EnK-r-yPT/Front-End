import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import useSelect from "../../hooks/useSelect.hook";
import { BiCategory } from "react-icons/bi";
import { fetchCategories } from "../../store/actions/category.actions";
import { useDispatch, useSelector } from "react-redux";

const CategoryInput = ({ data, setData, isInputValid, setIsInputValid }) => {
  const categoryList = useSelector((state) => state.category.categoryList);
  const dispatch = useDispatch();
  const {
    optionSelected: selectedCategory,
    isValid: selectedCategoryIsValid,
    hasError: selectedCategoryHasError,
    valueChangeHandler: categoryChangeHandler,
    inputBlurHandler: categoryBlurHandler,
  } = useSelect(data, setData);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    setIsInputValid((isInputValid) => {
      return {
        ...isInputValid,
        category: selectedCategoryIsValid,
      };
    });
  }, [selectedCategoryIsValid, setIsInputValid]);

  const invalidContainer = " border-[0.12rem] border-red-400";

  const categoryDisplay = categoryList.map((name) => {
    return (
      <option value={name.category} className="bg-gray-100" key={name.id}>
        {name.category}
      </option>
    );
  });

  return (
    <div className="">
      <div
        className={twMerge(
          `flex items-center  bg-gray-100 px-2 focus-within:border-[0.12rem] focus-within:border-[color:var(--color-primary)] `,
          `${selectedCategoryHasError ? invalidContainer : ""}`
        )}
      >
        <BiCategory className="text-[color:var(--color-primary)] text-lg mx-1" />
        <select
          name="category"
          className={`text-gray-500 bg-gray-100 text-sm w-full outline-none cursor-context-menu py-3`}
          onChange={categoryChangeHandler}
          onBlur={categoryBlurHandler}
          value={selectedCategory}
        >
          <option value="" className="text-white" key="">
            Select Category
          </option>
          {categoryDisplay}
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
