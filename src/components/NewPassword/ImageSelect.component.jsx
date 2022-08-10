import React, { useEffect, useState } from "react";
import ImageInput from "../Inputs/ImageInput.component";

function ImageSelect({ formData, setFormData }) {
  const [images, setImages] = useState([]);
  let Url =
    "https://react-prac-bc8db-default-rtdb.asia-southeast1.firebasedatabase.app/CategoryImages";
  Url += "/" + formData.category + ".json";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Url);
      const data = await response.json();
      setImages(data);
    };
    fetchData();
  }, [Url]);

  return (
    <React.Fragment>
      <ImageInput
        formData={formData}
        setFormData={setFormData}
        images={images}
      />
    </React.Fragment>
  );
}

export default ImageSelect;
