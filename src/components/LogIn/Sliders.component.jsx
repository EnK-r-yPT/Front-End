import { useState, useRef } from "react";
import SliderInput from "../Inputs/SliderInput.component";

function Sliders() {
  const slideLeft = useRef(null);
  const slideRight = useRef(null);

  const [isFound, setIsFound] = useState(null);

  const sliderHandler = (isRightSlide, isUnlocked) => {
    if (isUnlocked)
      if (isRightSlide) {
        setIsFound(true);
        slideLeft.current.reset();
      } else {
        setIsFound(false);
        slideRight.current.reset();
      }
  };
  return (
    <div className="flex items-center justify-center mb-16 mt-4">
      <div className="flex flex-col justify-center items-center gap-6">
        <SliderInput
          text="Yes"
          sliderHandler={sliderHandler}
          isFound={isFound}
          ref={slideRight}
        />
        <SliderInput
          text="No"
          isRightSlide={false}
          sliderHandler={sliderHandler}
          isFound={isFound}
          ref={slideLeft}
        />
      </div>
    </div>
  );
}

export default Sliders;
