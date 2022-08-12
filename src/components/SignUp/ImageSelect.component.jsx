import React, { useEffect, useState } from "react";
import ImageInput from "../Inputs/ImageInput.component";
import LoadingSpinner from "../UI/LoadingSpinner.component";

function ImageSelect({ formData, setFormData, setIsLoading, isLoading }) {
  const [images, setImages] = useState([]);
  let Url =
    "https://react-prac-bc8db-default-rtdb.asia-southeast1.firebasedatabase.app/CategoryImages";
  Url += "/" + formData.category + ".json";

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(Url);
      const data = await response.json();
      let listData = [];
      for (let id in data) {
        listData.push({
          id: id,
          url: data[id],
        });
      }
      setImages(listData);
    };
    fetchData();
    setIsLoading(false);
  }, [Url, setIsLoading]);

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner containerClass="mt-16 mb-14" />}
      {!isLoading && (
        <ImageInput
          formData={formData}
          setFormData={setFormData}
          images={images}
        />
      )}
    </React.Fragment>
  );
}

export default ImageSelect;
