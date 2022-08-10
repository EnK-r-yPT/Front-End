import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard.component";

const ImageInput = ({ formData, setFormData, images }) => {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (images.length !== 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);
  
  useEffect(() => {
    setFormData((formData) => {
      return {
        ...formData,
        pass_image: selectedImage,
      };
    });
  }, [selectedImage, setFormData]);

  const onChangeHandler = (event) => {
    setSelectedImage(event.target.getAttribute("data-value"));
  };

  const ImageList = images.map((imgUrl, index) => {
    return (
      <ImageCard
        url={imgUrl}
        id={index}
        key={index}
        selectedImage={selectedImage}
        onChangeHandler={onChangeHandler}
      />
    );
  });

  return (
    <div className="mt-8">
      <div className="flex justify-center items-center p-2 mb-4">
        <div className="shadow-lg rounded-md overflow-hidden border-gray-300 border-8">
          <img
            src={selectedImage}
            className="w-[180px] aspect-square object-cover object-center"
            alt="pass_image selected"
          />
        </div>
      </div>
      <div className="list grid grid-cols-3 gap-6 overflow-y-scroll h-56 p-2">
        {ImageList}
      </div>
    </div>
  );
};

export default ImageInput;
