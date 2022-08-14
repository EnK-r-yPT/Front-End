import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextSetStep,
  setIsFormValid,
  setPassword,
} from "../../store/reducers/logIn.Reducer";
import SliderInput from "../Inputs/SliderInput.component";

function Sliders() {
  const password = useSelector((state) => state.logIn.password);
  const step = useSelector((state) => state.logIn.step);

  const dispatch = useDispatch();
  const slideLeft = useRef(null);
  const slideRight = useRef(null);
  const calledOnce = useRef(false);

  const [isFound, setIsFound] = useState(null);

  let timer;
  const nextImageSlide = () => {
    dispatch(nextSetStep());
  };

  // useEffect(() => {
  //   return () => clearTimeout(timer);
  // }, [timer]);

  const sliderHandler = (isRightSlide, isUnlocked) => {
    if (!isUnlocked) return;
    if (isRightSlide) {
      setIsFound(true);
      slideLeft.current.reset();
    } else {
      setIsFound(false);
      slideRight.current.reset();
    }
  };

  useEffect(() => {
    if (calledOnce.current) {
      calledOnce.current = false;
      return;
    }

    console.log({ isFound });
    if (isFound === null) return;
    let passArray = [...password];
    passArray[step - 1] = !isFound ? 0 : 1;
    dispatch(setPassword(passArray));
  }, [isFound]);

  useEffect(() => {
    if (password[step - 1] === null) {
      setIsFound(null);
      slideLeft.current.reset();
      slideRight.current.reset();
    } else {
      const isRight = password[step - 1] === 1;
      calledOnce.current = true;
      console.log({ isRight });

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

    return () => {
      slideLeft.current.reset();
      slideRight.current.reset();
    };
  });

  console.log({ step, isFound, password });

  return (
    <div className="flex items-center justify-center mb-16 mt-4">
      <div className="flex flex-col justify-center items-center gap-6 w-full mx-6 min-w-[8rem] select-none">
        <SliderInput
          text="Yes"
          sliderHandler={sliderHandler}
          isFound={isFound}
          ref={slideRight}
          nextImageSlide={nextImageSlide}
        />
        <SliderInput
          text="No"
          isRightSlide={false}
          sliderHandler={sliderHandler}
          isFound={isFound}
          ref={slideLeft}
          nextImageSlide={nextImageSlide}
        />
      </div>
    </div>
  );
}

export default Sliders;
