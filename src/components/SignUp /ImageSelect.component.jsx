import React, { useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner.component";
import ImageCard from "./ImageCard.component";

function ImageSelect({ formData, setFormData,setIsLoading,isLoading }) {
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
        pass_image: selectedImage,
      };
    });
  }, [selectedImage, setFormData]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(Url);
      const data = await response.json();
      setSelectedImage(data[0]);
      setImages(data);
    };
    fetchData();
    setIsLoading(false);
  }, [Url,setIsLoading]);

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
    <React.Fragment>
      {isLoading && <LoadingSpinner containerClass="mt-16 mb-14" />}
      {!isLoading && (
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
      )}
    </React.Fragment>
  );
}

export default ImageSelect;
