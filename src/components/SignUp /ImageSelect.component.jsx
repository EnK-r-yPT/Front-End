import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard.component";

let Url = "https://jsonplaceholder.typicode.com/users";

function ImageSelect({ formData, setFormData }) {
  const [category, setCategory] = useState([]);
  const [selectedImage, setSelectedImage] = useState("1");

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
  }, [selectedImage,setFormData]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Url);
      const data = await response.json();
      setCategory(data);
    };
    fetchData();
  }, []);

  const ImageList = category.map((cat) => {
    return (
      <ImageCard
        id={cat.id}
        key={cat.id}
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
            src={`https://robohash.org/${selectedImage}?set=set2&size=180x180`}
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
