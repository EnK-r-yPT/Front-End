import React, { useEffect, useRef } from "react";

const ImagesGrid = ({ imagesList, step }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current.classList.add("scale-[20%]");
    let timer = setTimeout(() => {
      ref.current.classList.remove("scale-[20%]");
    }, 200);
    return () => clearTimeout(timer);
  }, [step]);

  const grid = imagesList.map((image) => {
    return (
      <div
        className="border-4 border-white shadow-lg shadow-gray-400"
        key={image.id}
      >
        <img
          src={image.url}
          className="w-32 aspect-square object-cover object-center mx-auto"
          alt=""
        />
      </div>
    );
  });
  return (
    <div
      className="flex justify-center mt-8 items-center duration-200 ease-in-out"
      ref={ref}
    >
      <div className="grid grid-cols-2 justify-center gap-4 items-center w-fit">
        {grid}
      </div>
    </div>
  );
};

export default ImagesGrid;
