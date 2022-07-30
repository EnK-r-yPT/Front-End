import React from "react";
import { BiCategory } from "react-icons/bi";
const categories = ["cat", "dog", "lion", "wolf", "tiger"];
function ImageSelect() {
  const categoryList = categories.map((category) => {
    return (
      <option value={category} className="bg-gray-100" key={category}>
        {category}
      </option>
    );
  });
  return (
    <div className="mt-8">
      <div className="flex items-center bg-gray-100 p-2">
        <BiCategory className="text-gray-400 text-lg mx-1" />
        <select
          name="category"
          className="text-gray-500 bg-gray-100 w-full outline-none"
        >
          {categoryList}
        </select>
      </div>
    </div>
  );
}

export default ImageSelect;
