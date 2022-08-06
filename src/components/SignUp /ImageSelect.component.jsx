import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard.component";

function ImageSelect({ formData, setFormData }) {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  let Url =
    "https://react-prac-bc8db-default-rtdb.asia-southeast1.firebasedatabase.app/CategoryImages";
  Url += "/" + formData.category + ".json";

  const onChangeHandler = (event) => {
    setSelectedImage(event.target.getAttribute("data-value"));
  };

  useEffect(() => {
    setFormData((formData) => {
      return {
        ...formData,
        password: selectedImage,
      };
    });
  }, [selectedImage, setFormData]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Url);
      const data = await response.json();
      setSelectedImage(data[0]);
      setImages(data);
    };
    fetchData();
  }, [Url]);

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
            alt="password selected"
          />
        </div>
      </div>
      <div className="list grid grid-cols-3 gap-6 overflow-y-scroll h-56 p-2">
        {ImageList}
      </div>
    </div>
  );
}

export default ImageSelect;
