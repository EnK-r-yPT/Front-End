import React from "react";
import Button from "../Button/Button.component";
import LoadingSpinner from "../UI/LoadingSpinner.component";

const FormButtons = ({ isLoading, step, togglePageHandler, isFormValid }) => {
  const buttonTitle = !isFormValid ? "Fill The Form Correctly!" : "";

  if (isLoading && !step) {
    return <LoadingSpinner containerClass="" />;
  }

  if (step === false) {
    return (
      <Button
        type="button"
        onClick={togglePageHandler}
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
        onClick={togglePageHandler}
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
