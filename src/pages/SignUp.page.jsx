import React, { useState } from "react";
import Button from "../components/Button/Button.component";

import ImageSelect from "../components/SignUp /ImageSelect.component";
import SingUpInfo from "../components/SignUp /SingUpInfo.component";

const SignUp = () => {
  const [step, setStep] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    email: "",
    category: "",
    password: "",
  });

  const BodyDisplay = () => {
    if (step === false) {
      return (
        <SingUpInfo
          formData={formData}
          setFormData={setFormData}
          setIsFormValid={setIsFormValid}
        />
      );
    }
    return <ImageSelect setFormData={setFormData} formData={formData} />;
  };

  const togglePageHandler = () => {
    if (!isFormValid) {
      return;
    }
    setStep((step) => !step);
  };

  const buttonTitle = !isFormValid ? "Fill The Form Correctly!" : "";

  const FooterDisplay = () => {
    if (step === false) {
      return (
        <Button
          type="button"
          onClick={togglePageHandler}
          className="btn-base px-4 py-2"
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
          onClick={togglePageHandler}
          className="btn-inverted px-4 py-2"
        >
          Back
        </Button>

        <Button type="submit" className="btn-base px-4 py-2">
          Submit
        </Button>
      </React.Fragment>
    );
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mt-32 mx-auto md:mt-36 bg-white shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[480px] md:mx-auto shadow-gray-400 rounded-xl p-8">
      <form action="" className="w-4/5 mx-auto" onSubmit={onSubmitHandler}>
        <div className="header flex flex-col items-center justify-center">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-semibold mb-2">
            Create an Account
          </h1>
          <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>

        <div className="body">{BodyDisplay()}</div>

        <div className="footer mt-8 flex justify-around">{FooterDisplay()}</div>
      </form>
    </div>
  );
};

export default SignUp;
