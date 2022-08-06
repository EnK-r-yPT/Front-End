import React from "react";
import "./ImageCard.component.css";
const ImageCard = ({ id, onChangeHandler, selectedImage }) => {
  return (
    <div className="shadow-[2px_2px_6px_rgba(0,0,0,0.2)] rounded-md hover:-translate-y-2 duration-300 ease-in-out ">
      <label htmlFor={id} className="">
        <input
          type="radio"
          id={id}
          name="cat"
          defaultChecked={selectedImage === toString(id)}
          value={id}
        />
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt=""
          className="cursor-pointer object-cover object-center rounded-md w-24 aspect-square"
          onClick={onChangeHandler}
          data-value={id}
        />
      </label>
    </div>
  );
};

export default ImageCard;
