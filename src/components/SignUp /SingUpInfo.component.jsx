import React from "react";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

const categories = ["cat", "dog", "lion", "wolf", "tiger"];

const SingUpInfo = () => {
  const categoryList = categories.map((category) => {
    return <option value={category} className="bg-gray-100" key={category}>{category}</option>;
  });
  return (
    <div className="flex flex-col gap-4 mt-8">
      <div className="flex items-center bg-gray-100 p-2">
        <FaRegUser className="text-gray-400  mx-1" />
        <input
          name="userId"
          className="bg-gray-100 ml-1 outline-none text-gray-500 text-sm w-full"
          type="text"
          placeholder="User Id"
        />
      </div>
      <div className="flex items-center bg-gray-100 p-2">
        <FaRegEnvelope className="text-gray-400 text-lg  mx-1" />
        <input
          name="userId"
          className="bg-gray-100 ml-1 outline-none text-gray-500 text-sm w-full"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="flex items-center bg-gray-100 p-2">
        <BiCategory className="text-gray-400 text-lg mx-1" />
        <select name="category" className="text-gray-500 bg-gray-100 text-sm w-full outline-none">
          {categoryList}
        </select>
      </div>
    </div>
  );
};

export default SingUpInfo;
