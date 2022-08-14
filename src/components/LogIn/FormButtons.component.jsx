import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistHandler } from "../../store/actions/logIn.actions";
import { backSetStep, nextSetStep } from "../../store/reducers/logIn.Reducer";
import Button from "../Button/Button.component";
import LoadingSpinner from "../UI/LoadingSpinner.component";

const FormButtons = () => {
  const userUniqueId = useSelector((state) => state.auth.userUniqueId);
  const isLoading = useSelector((state) => state.logIn.isLoading);
  const step = useSelector((state) => state.logIn.step);
  const isFormValid = useSelector((state) => state.logIn.isFormValid);
  const noOfSteps = useSelector((state) => state.logIn.noOfSteps);
  const allImages = useSelector((state) => state.logIn.allImages);
  const username = useSelector((state) => state.logIn.username);
  const categoryLen = useSelector((state) => state.logIn.categoryLength);
  const dispatch = useDispatch();
  const buttonTitle = !isFormValid ? "Fill The Form Correctly!" : "";
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (step === 0) {
    return (
      <Button
        type="button"
        onClick={() =>
          dispatch(
            isUserExistHandler(
              {
                username,
                timestamp: Date.now(),
                loginId: userUniqueId,
                categoriesLength:categoryLen,
              },
              allImages
            )
          )
        }
        className="btn-base px-4 py-2"
        disabled={!isFormValid}
        title={buttonTitle}
      >
        Continue
      </Button>
    );
  }
  if (step === noOfSteps)
    return (
      <React.Fragment>
        <Button
          type="button"
          onClick={() => dispatch(backSetStep())}
          className="btn-inverted px-4 py-2"
        >
          Back
        </Button>
        <Button
          type="submit"
          className="btn-base px-4 py-2"
          disabled={!isFormValid}
        >
          Submit
        </Button>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <Button
        type="button"
        onClick={() => dispatch(backSetStep())}
        className="btn-inverted px-4 py-2"
      >
        Back
      </Button>

      <Button
        type="button"
        className="btn-base px-4 py-2"
        disabled={!isFormValid}
        title={buttonTitle}
        onClick={() => dispatch(nextSetStep())}
      >
        Continue
      </Button>
    </React.Fragment>
  );
};

export default FormButtons;
