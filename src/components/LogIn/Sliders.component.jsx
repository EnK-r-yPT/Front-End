import { useState, useRef, useEffect } from "react";
import SliderInput from "../Inputs/SliderInput.component";

function Sliders({
  formData,
  setFormData,
  step,
  nextStepHandler,
  setIsFormValid,
}) {
  const slideLeft = useRef(null);
  const slideRight = useRef(null);

  const [isFound, setIsFound] = useState(null);

  useEffect(() => {
    if (formData["password"].length + 1 === step) {
      setIsFound(null);
      slideLeft.current.reset();
      slideRight.current.reset();
    } else {
      const isRight = formData["password"][step - 1] === 1;
      setIsFound(isRight);
      if (isRight) {
        setIsFound(true);
        slideRight.current.setSlider();
        slideLeft.current.reset();
      } else {
        setIsFound(false);
        slideLeft.current.setSlider();
        slideRight.current.reset();
      }
    }
  });

  const sliderHandler = (isRightSlide, isUnlocked) => {
    if (isUnlocked) {
      if (isRightSlide) {
        setIsFound(true);
        slideLeft.current.reset();
      } else {
        setIsFound(false);
        slideRight.current.reset();
      }
    }
  };

  useEffect(() => {
    setIsFormValid(isFound !== null);
  }, [isFound, setIsFormValid]);

  useEffect(() => {
    if (isFound === null) return;
    let passArray = formData["password"];
    if (formData["password"].length + 1 === step) {
      passArray.push(isFound === false ? 0 : 1);
    } else {
      passArray[step - 1] = isFound === false ? 0 : 1;
    }
    setFormData((formData) => {
      return {
        ...formData,
        password: passArray,
      };
    });
  }, [isFound, setFormData]);

  console.log(step, isFound, formData);

  return (
    <div className="flex items-center justify-center mb-16 mt-4">
      <div className="flex flex-col justify-center items-center gap-6 w-full mx-6 min-w-[8rem]">
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
