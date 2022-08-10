import React from "react";
import Button from "../Button/Button.component";
import LoadingSpinner from "../UI/LoadingSpinner.component";

const FormButtons = ({
  step,
  nextStepHandler,
  backStepHandler,
  isFormValid,
  isUserExistHandler,
  isLoading,
}) => {
  const buttonTitle = !isFormValid ? "Fill The Form Correctly!" : "";
  if (step === 0) {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    return (
      <Button
        type="button"
        onClick={isUserExistHandler}
        className="btn-base px-4 py-2"
        disabled={!isFormValid}
        title={buttonTitle}
      >
        Continue
      </Button>
    );
  }

  if (step === 1)
    return (
      <React.Fragment>
        <Button
          type="button"
          onClick={backStepHandler}
          className="btn-inverted px-4 py-2"
        >
          Back
        </Button>

        <Button
          type="button"
          className="btn-base px-4 py-2"
          disabled={!isFormValid}
          title={buttonTitle}
          onClick={nextStepHandler}
        >
          Submit
        </Button>
      </React.Fragment>
    );

  if (step === 2) {
    return (
      <Button
        type="button"
        className="btn-base px-4 py-2"
        onClick={nextStepHandler}
        disabled={!isFormValid}
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
        onClick={backStepHandler}
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
};

export default FormButtons;
