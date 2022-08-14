import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistHandler } from "../../store/actions/signUp.actions";
import { backSetStep } from "../../store/reducers/signUp.Reducer";
import Button from "../Button/Button.component";
import LoadingSpinner from "../UI/LoadingSpinner.component";

const FormButtons = () => {
  const isFormValid = useSelector((state) => state.signUp.isFormValid);
  const isLoading = useSelector((state) => state.signUp.isLoading);
  const step = useSelector((state) => state.signUp.step);
  const username = useSelector((state) => state.signUp.username);

  const dispatch = useDispatch();
  const buttonTitle = !isFormValid ? "Fill The Form Correctly!" : "";

  if (isLoading) {
    return <LoadingSpinner containerClass="" />;
  }

  if (step === 0) {
    return (
      <Button
        type="button"
        onClick={() => dispatch(isUserExistHandler({ username }))}
        className="btn-base px-4 py-2"
        disabled={!isFormValid || isLoading}
        title={buttonTitle}
      >
        Continue
      </Button>
    );
  }

  return (
    <React.Fragment>
      <Button
        type="button"
        onClick={() => dispatch(backSetStep())}
        className="btn-inverted px-4 py-2"
      >
        Back
      </Button>

      <Button type="submit" className="btn-base px-4 py-2" disabled={isLoading}>
        Submit
      </Button>
    </React.Fragment>
  );
};

export default FormButtons;
