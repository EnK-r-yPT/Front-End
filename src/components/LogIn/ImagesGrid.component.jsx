import React from "react";

const ImagesGrid = ({ imagesList }) => {
  const grid = imagesList.map((image) => {
    return (
      <div className="border-4 border-white shadow-lg shadow-gray-400" key={image.id}>
        <img
          src={image.url}
          className="w-32 aspect-square object-cover object-center mx-auto"
          alt=""
        />
      </div>
    );
  });
  return (
    <div className="flex justify-center mt-8 items-center">
      <div className="grid grid-cols-2 justify-center gap-4 items-center w-fit">
        {grid}
      </div>
    </div>
  );
};

export default ImagesGrid;
